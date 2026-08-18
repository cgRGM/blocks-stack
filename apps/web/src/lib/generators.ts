export type Selections = Record<string, string | string[]>;

export function generateCliCommand(
  selections: Selections,
  pm: string = "bun",
  projectName: string = "my-aws-app",
): string {
  const runner =
    pm === "bun"
      ? "bun create @aws-blocks/blocks-app@latest"
      : pm === "pnpm"
        ? "pnpm create @aws-blocks/blocks-app@latest"
        : pm === "yarn"
          ? "yarn create @aws-blocks/blocks-app"
          : "npx @aws-blocks/create-blocks-app@latest";

  const flags: string[] = [];

  // Frontend
  const frontend = selections.webFrontend;
  if (frontend && frontend !== "next") {
    flags.push(`--frontend ${frontend}`);
  }

  // Native
  const native = selections.nativeFrontend;
  if (native && native !== "none") {
    flags.push(`--native ${native}`);
  }

  // Database
  const db = selections.database;
  if (db && db !== "aurora-postgres") {
    flags.push(`--database ${db}`);
  }

  // ORM
  const orm = selections.orm;
  if (orm && orm !== "drizzle") {
    flags.push(`--orm ${orm}`);
  }

  // Auth
  const auth = selections.auth;
  if (auth && auth !== "cognito") {
    flags.push(`--auth ${auth}`);
  }

  // AI Bedrock
  const ai = selections.aiBedrock;
  if (ai && ai !== "none") {
    flags.push(`--ai ${ai}`);
  }

  // Storage
  const storage = selections.storage;
  if (storage && storage !== "s3") {
    flags.push(`--storage ${storage}`);
  }

  // Compute
  const compute = selections.backendRuntime;
  if (compute && compute !== "lambda") {
    flags.push(`--compute ${compute}`);
  }

  // Async & Events
  const events = Array.isArray(selections.asyncAndEvents) ? selections.asyncAndEvents : [];
  if (events.length > 0) {
    flags.push(`--events ${events.join(",")}`);
  }

  // Addons
  const addons = Array.isArray(selections.addons) ? selections.addons : [];
  if (addons.length > 0) {
    flags.push(`--addons ${addons.join(",")}`);
  }

  // Examples
  const example = selections.examples;
  if (example && example !== "none") {
    flags.push(`--example ${example}`);
  }

  // Git & Install
  if (selections.git === "none") {
    flags.push("--no-git");
  }
  if (selections.install === "skip") {
    flags.push("--no-install");
  }

  return `${runner} ${projectName} ${flags.join(" ")}`.trim();
}

export function generateBlocksTs(selections: Selections): string {
  const imports: string[] = ["Scope", "ApiNamespace"];
  const db = selections.database;
  const auth = selections.auth;
  const storage = selections.storage;
  const ai = selections.aiBedrock;
  const events = Array.isArray(selections.asyncAndEvents) ? selections.asyncAndEvents : [];

  if (db === "aurora-postgres" || db === "aurora-mysql" || db === "neon" || db === "supabase") {
    imports.push("Database");
  } else if (db === "dynamodb") {
    imports.push("KVStore", "DistributedTable");
  } else if (db === "aurora-dsql") {
    imports.push("DistributedDatabase");
  }

  if (auth === "cognito") {
    imports.push("AuthCognito");
  } else if (auth === "auth-basic") {
    imports.push("AuthBasic");
  } else if (auth === "auth-oidc") {
    imports.push("AuthOIDC");
  }

  if (storage === "s3" || storage === "s3-private") {
    imports.push("FileBucket");
  }

  if (ai === "agent" || ai === "agent-and-kb") {
    imports.push("Agent");
  }
  if (ai === "knowledge-base" || ai === "agent-and-kb") {
    imports.push("KnowledgeBase");
  }

  if (events.includes("async-job")) imports.push("AsyncJob");
  if (events.includes("cron-job")) imports.push("CronJob");
  if (events.includes("realtime")) imports.push("Realtime");
  if (events.includes("email-client")) imports.push("EmailClient");
  if (events.includes("secret-store")) imports.push("SecretStore");

  const blockInstantiations: string[] = [];

  // Database
  if (db === "aurora-postgres") {
    blockInstantiations.push(`// 1. Relational Database (Aurora Serverless v2 PostgreSQL)
export const db = new Database(scope, "main-database", {
  engine: "postgres",
  minCapacity: 0.5,
  maxCapacity: 16,
  enablePgVector: ${ai === "agent-and-kb" || ai === "knowledge-base" ? "true" : "false"},
});`);
  } else if (db === "dynamodb") {
    blockInstantiations.push(`// 1. Key-Value & Document Persistence (Amazon DynamoDB)
export const store = new KVStore(scope, "app-store", {
  billingMode: "PAY_PER_REQUEST",
  ttlAttribute: "expiresAt",
});

export const tables = new DistributedTable(scope, "records", {
  partitionKey: { name: "pk", type: "string" },
  sortKey: { name: "sk", type: "string" },
});`);
  } else if (db === "aurora-dsql") {
    blockInstantiations.push(`// 1. Multi-Region Active-Active Distributed SQL (Aurora DSQL)
export const dsql = new DistributedDatabase(scope, "global-dsql", {
  multiRegion: true,
  witnessRegion: "us-east-1",
});`);
  }

  // Auth
  if (auth === "cognito") {
    blockInstantiations.push(`// 2. Authentication & User Management (Amazon Cognito)
export const auth = new AuthCognito(scope, "user-auth", {
  mfa: "OPTIONAL",
  passwordPolicy: { minLength: 8, requireSpecialCharacters: true },
  socialProviders: ["google", "apple"],
});`);
  } else if (auth === "auth-basic") {
    blockInstantiations.push(`// 2. Lightweight Token Authentication (AWS Blocks Basic Auth)
export const auth = new AuthBasic(scope, "basic-auth", {
  jwtExpiry: "7d",
  algorithm: "ES256",
});`);
  } else if (auth === "auth-oidc") {
    blockInstantiations.push(`// 2. Enterprise SSO / OIDC Provider (AWS Blocks AuthOIDC)
export const auth = new AuthOIDC(scope, "enterprise-sso", {
  discoveryEndpoint: process.env.OIDC_DISCOVERY_URL,
  clientId: process.env.OIDC_CLIENT_ID,
});`);
  }

  // Storage
  if (storage === "s3" || storage === "s3-private") {
    blockInstantiations.push(`// 3. Object Storage & Media (Amazon S3)
export const files = new FileBucket(scope, "uploads-bucket", {
  cors: [{ allowedOrigins: ["*"], allowedMethods: ["GET", "PUT", "POST"] }],
  encryption: "KMS_MANAGED",
  enableCloudFrontCdn: ${storage === "s3" ? "true" : "false"},
});`);
  }

  // Bedrock AI
  if (ai === "agent-and-kb") {
    blockInstantiations.push(`// 4. Generative AI Agent & RAG Knowledge Base (Amazon Bedrock)
export const knowledgeBase = new KnowledgeBase(scope, "kb-docs", {
  embeddingModel: "amazon.titan-embed-text-v2:0",
  vectorStore: "pgvector", // Auto-wired to Aurora DB
});

export const agent = new Agent(scope, "assistant-agent", {
  foundationModel: "anthropic.claude-3-5-sonnet-20241022-v2:0",
  instruction: "You are an expert AI assistant that queries data and helps users accomplish tasks.",
  knowledgeBases: [knowledgeBase],
});`);
  } else if (ai === "agent") {
    blockInstantiations.push(`// 4. Bedrock Autonomous Agent (Amazon Bedrock)
export const agent = new Agent(scope, "copilot-agent", {
  foundationModel: "anthropic.claude-3-5-sonnet-20241022-v2:0",
  instruction: "You are a helpful assistant capable of executing tools.",
});`);
  } else if (ai === "knowledge-base") {
    blockInstantiations.push(`// 4. Semantic Vector Knowledge Base (Amazon Bedrock RAG)
export const knowledgeBase = new KnowledgeBase(scope, "vector-kb", {
  embeddingModel: "amazon.titan-embed-text-v2:0",
  vectorStore: "opensearch-serverless",
});`);
  }

  // Events & Queues
  if (events.includes("async-job")) {
    blockInstantiations.push(`// 5. Asynchronous Background Jobs (Amazon SQS + Lambda)
export const backgroundWorker = new AsyncJob(scope, "task-queue", {
  maxRetries: 3,
  visibilityTimeoutSeconds: 300,
  deadLetterQueue: true,
});`);
  }

  if (events.includes("cron-job")) {
    blockInstantiations.push(`// 6. Scheduled Event Cron (Amazon EventBridge)
export const nightlyCron = new CronJob(scope, "nightly-cleanup", {
  schedule: "cron(0 0 * * ? *)",
  handler: async () => {
    console.log("Running scheduled maintenance job in AWS Lambda...");
  },
});`);
  }

  if (events.includes("realtime")) {
    blockInstantiations.push(`// 7. Real-Time Bidirectional WebSockets (Amazon API Gateway)
export const realtime = new Realtime(scope, "live-channel", {
  enablePresence: true,
});`);
  }

  if (events.includes("email-client")) {
    blockInstantiations.push(`// 8. Transactional Emails (Amazon SES)
export const mailer = new EmailClient(scope, "notifications", {
  defaultSender: "noreply@myapp.com",
});`);
  }

  if (events.includes("secret-store")) {
    blockInstantiations.push(`// 9. Automated Secret Management (AWS Secrets Manager)
export const secrets = new SecretStore(scope, "app-secrets", {
  keys: ["STRIPE_SECRET_KEY", "THIRD_PARTY_API_KEY"],
});`);
  }

  return `import { ${imports.join(", ")} } from "@aws-blocks/blocks";

/**
 * AWS Blocks Application Definition
 * 
 * This file serves three roles simultaneously:
 * 1. Local Mock Environment (run offline with \`bun run dev\`)
 * 2. AWS Infrastructure Definition (synthesized to AWS CDK / CloudFormation)
 * 3. Production Runtime Code (executed in AWS Lambda / App Runner)
 */
export const scope = new Scope("blocks-stack");

${blockInstantiations.join("\n\n")}

// 🚀 End-to-End Type-Safe API Namespace
export const api = new ApiNamespace(scope, "api", (context) => ({
  // Health check query
  ping: async () => ({ status: "ok", timestamp: new Date().toISOString(), region: process.env.AWS_REGION || "local" }),

  // User Profile
  getProfile: async () => {
    ${auth !== "none" ? "const user = auth.requireAuth(context);" : '// No auth required\n    const user = { id: "user_guest", email: "guest@example.com" };'}
    ${
      db === "dynamodb"
        ? "const data = await store.get(`user:${user.id}`);\n    return { user, data };"
        : 'return { user, message: "Welcome to AWS Blocks!" };'
    }
  },

  ${
    ai === "agent-and-kb" || ai === "agent"
      ? `// AI Chat Query
  chatWithAgent: async (message: string) => {
    ${auth !== "none" ? "const user = auth.requireAuth(context);" : ""}
    const response = await agent.invoke({
      prompt: message,
      sessionId: ${auth !== "none" ? "user.id" : '"anonymous-session"'},
    });
    return { reply: response.text, citations: response.citations };
  },`
      : ""
  }

  ${
    storage === "s3"
      ? `// Generate Presigned S3 Upload URL
  getUploadUrl: async (filename: string, contentType: string) => {
    ${auth !== "none" ? "const user = auth.requireAuth(context);" : ""}
    const upload = await files.createUploadUrl({
      key: \`uploads/\${Date.now()}-\${filename}\`,
      contentType,
      maxSizeBytes: 10 * 1024 * 1024,
    });
    return upload;
  },`
      : ""
  }
}));

export type AppApi = typeof api;
`;
}

export function generateAgentsMd(selections: Selections): string {
  const db = selections.database;
  const auth = selections.auth;
  const ai = selections.aiBedrock;

  return `# AGENTS.md — AI Agent Guidance for AWS Blocks Stack

This file provides architectural context and conventions for AI coding assistants (Claude, Gemini, Cursor, Copilot) working on this codebase.

## 🧱 Architectural Overview
This application is built with **AWS Blocks**, an open-source "Infrastructure from Code" framework by AWS DevTools.

- **Frontend:** \`${selections.webFrontend}\` (Web) ${selections.nativeFrontend !== "none" ? `+ \`${selections.nativeFrontend}\` (Native)` : ""}
- **Compute Layer:** \`${selections.backendRuntime}\`
- **API Protocol:** \`${selections.apiLayer}\` with End-to-End Type Safety
- **Database:** \`${db}\` (${selections.orm !== "none" ? `ORM: ${selections.orm}` : "Native DocumentClient"})
- **Auth Provider:** \`${auth}\`
- **Generative AI:** \`${ai}\` (Amazon Bedrock)
- **Deployment:** \`${selections.deployment}\` (AWS CDK)

---

## ⚡ Core Rules for AI Assistants

### 1. Tri-Purpose Block Abstractions
Every Block imported from \`@aws-blocks/blocks\` serves 3 purposes:
1. **Local Development:** When executing \`bun run dev\`, Blocks run local mocks in-memory or on local filesystem. Do NOT write manual mocks or conditional AWS SDK wrappers.
2. **Infrastructure Definition:** During \`blocks deploy\`, the Block automatically defines AWS CDK constructs (DynamoDB tables, Cognito User Pools, S3 buckets, Bedrock Agent aliases).
3. **Runtime Execution:** Inside Lambda / App Runner handlers, calling \`block.set()\` or \`auth.requireAuth()\` executes optimized AWS SDK operations.

### 2. Type-Safe Client Access
Frontend components should import the typed API client:
\`\`\`tsx
import { api } from "@/lib/blocks-client";

export function UserDashboard() {
  const { data, isLoading } = api.getProfile.useQuery();
  return <div>{data?.user?.email}</div>;
}
\`\`\`

### 3. Local Development Commands
- Start local mock dev server: \`bun run dev\`
- Push schema migrations: \`bun run db:push\`
- Run code quality checks: \`bun run check\`
- Deploy to AWS: \`bunx @aws-blocks/cli deploy --stage dev\`

### 4. Code Generation Rules
- Do NOT hardcode AWS account IDs or physical resource ARNs.
- Keep all block declarations inside \`aws-blocks/index.ts\`.
- Keep business logic inside \`ApiNamespace\` handlers or modular domain services.
- Never disable TypeScript strict mode.
`;
}

export function generateCdkStack(
  selections: Selections,
  projectName: string = "blocks-stack",
): string {
  const db = selections.database;
  const ai = selections.aiBedrock;

  return `import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { BlocksStack, BlocksBackend } from "@aws-blocks/cdk";
import * as path from "path";

/**
 * AWS CDK Infrastructure Stack synthesized by AWS Blocks
 * 
 * You can inspect and extend this construct tree directly.
 * Standard AWS CDK escape hatches (L2/L1 constructs, custom IAM, VPCs, WAF)
 * can be attached seamlessly to any Block.
 */
export class ${projectName.replace(/[^a-zA-Z0-9]/g, "")}Stack extends BlocksStack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 1. Auto-synthesize all Blocks defined in aws-blocks/index.ts
    const backend = new BlocksBackend(this, "BlocksBackend", {
      entry: path.join(__dirname, "../aws-blocks/index.ts"),
      stage: this.node.tryGetContext("stage") || "dev",
      ${
        selections.backendRuntime === "lambda"
          ? 'compute: "lambda",\n      lambdaOptions: { memorySize: 1024, timeout: cdk.Duration.seconds(30) },'
          : 'compute: "app-runner",\n      appRunnerOptions: { cpu: "1 vCPU", memory: "2 GB" },'
      }
    });

    ${
      db === "aurora-postgres"
        ? `// 2. Custom CDK Configuration for Aurora Database Block
    // Access underlying L2 construct: backend.resources.database
    backend.resources.database?.applyRemovalPolicy(
      this.stage === "prod" ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY
    );`
        : db === "dynamodb"
          ? `// 2. Custom CDK Configuration for DynamoDB Table Block
    backend.resources.store?.applyRemovalPolicy(
      this.stage === "prod" ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY
    );`
          : ""
    }

    ${
      ai !== "none"
        ? `// 3. Amazon Bedrock IAM Permissions
    backend.resources.agent?.grantInvoke(backend.computeFunction);`
        : ""
    }

    // 4. CloudFormation Outputs
    new cdk.CfnOutput(this, "ApiEndpoint", {
      value: backend.apiEndpoint,
      description: "Live API Gateway endpoint for AWS Blocks ApiNamespace",
    });
  }
}
`;
}

export function generateCliWorkflow(
  selections: Selections,
  pm: string = "bun",
  projectName: string = "my-aws-app",
): string {
  const cli = generateCliCommand(selections, pm, projectName);

  return `# 🚀 AWS Blocks Developer Workflow Guide

## 1. Create Project
$ ${cli}

## 2. Navigate to Project
$ cd ${projectName}

## 3. Local-First Development (100% Offline)
# Starts local server with in-memory mocks for Database, DynamoDB, S3, Cognito & Bedrock.
# No AWS account, credentials, or internet connection required!
$ ${pm === "bun" ? "bun run dev" : pm === "pnpm" ? "pnpm dev" : "npm run dev"}

## 4. Personal Cloud Sandbox (Isolated Ephemeral Cloud Dev)
# Proactively provisions private AWS cloud resources tagged to your developer IAM identity
$ npx @aws-blocks/cli sandbox

## 5. Production AWS Deployment
# Synthesizes AWS CDK constructs and deploys CloudFormation stack
$ npx @aws-blocks/cli deploy --stage prod

## 6. Vendorize / Eject Block Constructs (Escape Hatch)
# Copy raw CDK construct and runtime source into your project for full customization
$ npx @aws-blocks/cli vendorize database ./packages/custom-database

## 7. Add More Capabilities Anytime
$ npx @aws-blocks/cli add realtime
$ npx @aws-blocks/cli add email-client
`;
}

export function generateConfigJson(
  selections: Selections,
  projectName: string = "blocks-stack",
): string {
  return JSON.stringify(
    {
      $schema: "https://schema.aws-blocks.dev/v1/config.json",
      name: projectName,
      version: "1.0.0",
      framework: selections.webFrontend,
      native: selections.nativeFrontend,
      compute: selections.backendRuntime,
      api: selections.apiLayer,
      database: selections.database,
      orm: selections.orm,
      auth: selections.auth,
      storage: selections.storage,
      ai: selections.aiBedrock,
      events: selections.asyncAndEvents,
      deployment: selections.deployment,
      addons: selections.addons,
      packageManager: selections.packageManager,
    },
    null,
    2,
  );
}

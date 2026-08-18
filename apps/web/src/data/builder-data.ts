export interface OptionItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  badge?:
    | "DEFAULT"
    | "RECOMMENDED"
    | "SERVERLESS"
    | "AWS MANAGED"
    | "AI READY"
    | "LOCAL DEV READY"
    | "EXPERIMENTAL";
  requires?: string[];
  incompatibleWith?: string[];
  requirementMessage?: string;
  cliFlag?: string;
  npmPackages?: string[];
}

export interface CategoryGroup {
  id: string;
  title: string;
  description?: string;
  type: "single" | "multiple";
  defaultSelected: string | string[];
  options: OptionItem[];
}

export const BUILDER_CATEGORIES: CategoryGroup[] = [
  {
    id: "webFrontend",
    title: "WEB FRONTEND",
    description: "Choose your frontend framework",
    type: "single",
    defaultSelected: "next",
    options: [
      {
        id: "next",
        name: "Next.js",
        description: "Full-stack React framework with App Router & hybrid rendering",
        iconName: "nextjs",
        badge: "DEFAULT",
      },
      {
        id: "tanstack-start",
        name: "TanStack Start",
        description: "Full-stack React framework powered by TanStack Router & Vinxi",
        iconName: "tanstack",
        badge: "RECOMMENDED",
      },
      {
        id: "tanstack-router",
        name: "TanStack Router",
        description: "Modern type-safe client routing for React applications",
        iconName: "tanstack",
      },
      {
        id: "react-router",
        name: "React Router",
        description: "Declarative, standards-first routing and SSR for React",
        iconName: "react",
      },
      {
        id: "nuxt",
        name: "Nuxt",
        description: "Vue full-stack framework (SSR, SSG, hybrid rendering)",
        iconName: "nuxt",
      },
      {
        id: "svelte",
        name: "Svelte / SvelteKit",
        description: "Cybernetically enhanced web apps with ultra-small bundle size",
        iconName: "svelte",
      },
      {
        id: "solid",
        name: "Solid / SolidStart",
        description: "Solid application with fine-grained reactivity and SSR",
        iconName: "solid",
      },
      {
        id: "astro",
        name: "Astro",
        description: "The web framework for content-driven websites & island architecture",
        iconName: "astro",
      },
      {
        id: "none",
        name: "No Web Frontend",
        description: "Skip web frontend (Headless API or Mobile-first architecture)",
        iconName: "terminal",
      },
    ],
  },
  {
    id: "nativeFrontend",
    title: "NATIVE FRONTEND",
    description: "Mobile and native client SDKs with end-to-end type safety",
    type: "single",
    defaultSelected: "none",
    options: [
      {
        id: "none",
        name: "No Native Frontend",
        description: "No native mobile frontend required",
        iconName: "terminal",
        badge: "DEFAULT",
      },
      {
        id: "expo-uniwind",
        name: "Expo + Uniwind",
        description: "Fastest Tailwind bindings for React Native with HeroUI Native",
        iconName: "expo",
        badge: "RECOMMENDED",
      },
      {
        id: "expo-bare",
        name: "Expo + Bare",
        description: "Standard Expo setup with React Native StyleSheet",
        iconName: "expo",
      },
      {
        id: "expo-unistyles",
        name: "Expo + Unistyles",
        description: "Cross-platform mobile styling with type-safe design tokens",
        iconName: "expo",
      },
      {
        id: "swift",
        name: "Swift (iOS Native)",
        description: "Native iOS app with auto-generated Swift types from AWS Blocks",
        iconName: "swift",
        badge: "AWS MANAGED",
      },
      {
        id: "kotlin",
        name: "Kotlin (Android Native)",
        description: "Native Android app with auto-generated Kotlin coroutine clients",
        iconName: "kotlin",
        badge: "AWS MANAGED",
      },
      {
        id: "flutter",
        name: "Flutter / Dart",
        description: "Cross-platform mobile with typed Dart RPC bindings",
        iconName: "flutter",
      },
    ],
  },
  {
    id: "backendRuntime",
    title: "BACKEND COMPUTE & RUNTIME",
    description: "Serverless or containerized compute layer for AWS Blocks",
    type: "single",
    defaultSelected: "lambda",
    options: [
      {
        id: "lambda",
        name: "AWS Lambda (Serverless)",
        description:
          "Instant scale-to-zero compute with sub-millisecond execution & zero idle cost",
        iconName: "lambda",
        badge: "DEFAULT",
      },
      {
        id: "app-runner",
        name: "AWS App Runner",
        description: "Fully managed container service with automatic load balancing & HTTPS",
        iconName: "app-runner",
        badge: "RECOMMENDED",
      },
      {
        id: "ecs-fargate",
        name: "AWS ECS Fargate",
        description: "Serverless container execution for enterprise workloads and background jobs",
        iconName: "cdk",
      },
      {
        id: "fullstack-next",
        name: "Fullstack Next.js",
        description: "Run AWS Blocks directly inside Next.js Server Actions and Route Handlers",
        iconName: "nextjs",
        requires: ["next"],
        requirementMessage: "Requires Next.js frontend",
      },
      {
        id: "hono",
        name: "Hono Web Framework",
        description: "Ultrafast, lightweight web framework running on AWS Lambda or Node.js",
        iconName: "hono",
      },
      {
        id: "none",
        name: "No Backend",
        description: "Skip backend integration (Static frontend or external backend)",
        iconName: "terminal",
      },
    ],
  },
  {
    id: "apiLayer",
    title: "API LAYER & RPC",
    description: "Type-safe API contract between frontend, mobile and backend",
    type: "single",
    defaultSelected: "blocks-api",
    options: [
      {
        id: "blocks-api",
        name: "AWS Blocks ApiNamespace",
        description: "Native type-safe RPC with automatic client SDK & OpenAPI generation",
        iconName: "aws-blocks",
        badge: "DEFAULT",
      },
      {
        id: "trpc",
        name: "tRPC",
        description: "End-to-end typesafe APIs without schemas or code generation",
        iconName: "trpc",
      },
      {
        id: "orpc",
        name: "oRPC",
        description: "Typesafe APIs made simple with native OpenAPI 3.1 contract generation",
        iconName: "trpc",
      },
      {
        id: "rest",
        name: "REST / Amazon API Gateway",
        description: "Standard RESTful HTTP endpoints with OpenAPI spec integration",
        iconName: "api-gateway",
      },
      {
        id: "graphql",
        name: "AWS AppSync (GraphQL)",
        description: "Managed GraphQL service with real-time subscriptions & offline sync",
        iconName: "aws",
      },
      {
        id: "none",
        name: "No API Layer",
        description: "Skip API layer (Direct database queries in fullstack framework)",
        iconName: "terminal",
      },
    ],
  },
  {
    id: "database",
    title: "DATABASE & PERSISTENCE",
    description: "AWS cloud database or serverless Postgres options",
    type: "single",
    defaultSelected: "aurora-postgres",
    options: [
      {
        id: "aurora-postgres",
        name: "Aurora Serverless v2 (PostgreSQL)",
        description: "On-demand auto-scaling relational SQL (0.5 to 128 ACUs) with pgvector",
        iconName: "aurora",
        badge: "DEFAULT",
      },
      {
        id: "dynamodb",
        name: "Amazon DynamoDB (KVStore)",
        description:
          "Single-digit millisecond NoSQL database with unlimited scale & pay-per-request",
        iconName: "dynamodb",
        badge: "SERVERLESS",
      },
      {
        id: "aurora-dsql",
        name: "Amazon Aurora DSQL",
        description: "Next-gen distributed SQL with active-active multi-region & zero maintenance",
        iconName: "dsql",
        badge: "RECOMMENDED",
      },
      {
        id: "aurora-mysql",
        name: "Aurora Serverless v2 (MySQL)",
        description: "Managed enterprise MySQL compatible engine with automated backups",
        iconName: "aurora",
      },
      {
        id: "neon",
        name: "Neon Serverless Postgres",
        description: "Connect external Neon Postgres with instant branching and autoscaling",
        iconName: "neon",
      },
      {
        id: "supabase",
        name: "Supabase Postgres",
        description: "Connect external Supabase Postgres database with row level security",
        iconName: "supabase",
      },
      {
        id: "none",
        name: "No Database",
        description: "Skip database integration",
        iconName: "terminal",
      },
    ],
  },
  {
    id: "orm",
    title: "ORM & DATA ACCESS",
    description: "Object-relational mapping and type-safe query building",
    type: "single",
    defaultSelected: "drizzle",
    options: [
      {
        id: "drizzle",
        name: "Drizzle ORM",
        description: "Lightweight, TypeScript-first SQL ORM with zero overhead and migrations",
        iconName: "drizzle",
        badge: "DEFAULT",
        incompatibleWith: ["dynamodb"],
        requirementMessage: "Drizzle is for SQL databases (Aurora Postgres, MySQL, Neon)",
      },
      {
        id: "prisma",
        name: "Prisma ORM",
        description: "Next-gen ORM with declarative schema, type-safe queries and Prisma Studio",
        iconName: "prisma",
        incompatibleWith: ["dynamodb"],
        requirementMessage: "Prisma requires a SQL database",
      },
      {
        id: "blocks-sdk",
        name: "AWS Blocks Native SDK",
        description: "Built-in typed CRUD and DynamoDB DocumentClient wrapper with local mock",
        iconName: "aws-blocks",
        badge: "LOCAL DEV READY",
      },
      {
        id: "kysely",
        name: "Kysely Query Builder",
        description: "Type-safe TypeScript SQL query builder without runtime magic",
        iconName: "drizzle",
        incompatibleWith: ["dynamodb"],
      },
      {
        id: "none",
        name: "No ORM",
        description: "Skip ORM integration",
        iconName: "terminal",
      },
    ],
  },
  {
    id: "auth",
    title: "AUTHENTICATION & SECURITY",
    description: "User authentication, OAuth2, and session management",
    type: "single",
    defaultSelected: "cognito",
    options: [
      {
        id: "cognito",
        name: "Amazon Cognito (AuthCognito)",
        description: "Enterprise user directory with hosted UI, MFA, OAuth, Google/Apple login",
        iconName: "cognito",
        badge: "DEFAULT",
      },
      {
        id: "auth-basic",
        name: "AWS Blocks Auth (AuthBasic)",
        description: "Lightweight password/JWT authentication backed by DynamoDB or Postgres",
        iconName: "aws-blocks",
        badge: "LOCAL DEV READY",
      },
      {
        id: "auth-oidc",
        name: "AWS Blocks OIDC (AuthOIDC)",
        description: "Connect enterprise SAML/OIDC identity providers (Okta, Auth0, Google)",
        iconName: "cognito",
      },
      {
        id: "better-auth",
        name: "Better-Auth",
        description: "The most comprehensive TypeScript auth framework with 2FA and sessions",
        iconName: "better-auth",
        badge: "RECOMMENDED",
      },
      {
        id: "clerk",
        name: "Clerk",
        description: "Complete drop-in user management with pre-built UI components",
        iconName: "clerk",
      },
      {
        id: "none",
        name: "No Authentication",
        description: "Skip authentication layer",
        iconName: "terminal",
      },
    ],
  },
  {
    id: "storage",
    title: "STORAGE & ASSETS",
    description: "File upload, media storage, and CDN delivery",
    type: "single",
    defaultSelected: "s3",
    options: [
      {
        id: "s3",
        name: "Amazon S3 (FileBucket)",
        description: "High-durability object storage with presigned upload URLs & CloudFront CDN",
        iconName: "s3",
        badge: "DEFAULT",
      },
      {
        id: "s3-private",
        name: "S3 Private Vault",
        description: "Private encrypted bucket with IAM-scoped temporary access tokens",
        iconName: "s3",
      },
      {
        id: "none",
        name: "No File Storage",
        description: "Skip file storage integration",
        iconName: "terminal",
      },
    ],
  },
  {
    id: "aiBedrock",
    title: "AI & AMAZON BEDROCK",
    description: "Generative AI agents, foundation models & RAG vector knowledge bases",
    type: "single",
    defaultSelected: "agent-and-kb",
    options: [
      {
        id: "agent-and-kb",
        name: "Bedrock Agent + KnowledgeBase",
        description: "Full AI Agent pipeline with Claude 3.5 Sonnet / Nova + pgvector RAG",
        iconName: "bedrock",
        badge: "RECOMMENDED",
      },
      {
        id: "agent",
        name: "Amazon Bedrock Agent",
        description: "Autonomous reasoning agent capable of executing backend tool calls",
        iconName: "bedrock",
        badge: "AI READY",
      },
      {
        id: "knowledge-base",
        name: "Bedrock Knowledge Base (RAG)",
        description: "Managed semantic search and document vector embedding pipeline",
        iconName: "bedrock",
      },
      {
        id: "none",
        name: "No Bedrock AI",
        description: "Skip AI features",
        iconName: "terminal",
      },
    ],
  },
  {
    id: "asyncAndEvents",
    title: "ASYNC, QUEUES & REALTIME",
    description: "Event-driven architecture and background task processing",
    type: "multiple",
    defaultSelected: ["async-job", "cron-job", "realtime", "email-client", "secret-store"],
    options: [
      {
        id: "async-job",
        name: "Amazon SQS (AsyncJob)",
        description: "Reliable asynchronous queue and dead-letter handling for background tasks",
        iconName: "sqs",
        badge: "SERVERLESS",
      },
      {
        id: "cron-job",
        name: "Amazon EventBridge (CronJob)",
        description: "Serverless scheduled cron jobs, recurring timers, and event routing",
        iconName: "eventbridge",
        badge: "SERVERLESS",
      },
      {
        id: "realtime",
        name: "WebSocket (Realtime)",
        description: "Bidirectional real-time live messaging and presence via API Gateway",
        iconName: "api-gateway",
      },
      {
        id: "email-client",
        name: "Amazon SES (EmailClient)",
        description: "High-deliverability transactional emails, templates, and domain verification",
        iconName: "ses",
      },
      {
        id: "secret-store",
        name: "Secrets Manager (SecretStore)",
        description: "Encrypted secret storage with automated rotation and SSM Parameter Store",
        iconName: "secrets-manager",
      },
    ],
  },
  {
    id: "deployment",
    title: "DEPLOYMENT & INFRASTRUCTURE",
    description: "Infrastructure-as-Code and automated deployment targets",
    type: "single",
    defaultSelected: "cdk",
    options: [
      {
        id: "cdk",
        name: "AWS CDK (Infrastructure from Code)",
        description:
          "Automatic synthesis of production-ready AWS CDK constructs directly from code",
        iconName: "cdk",
        badge: "DEFAULT",
      },
      {
        id: "amplify",
        name: "AWS Amplify Hosting",
        description: "Continuous deployment and hosting for Next.js, Nuxt & Single Page Apps",
        iconName: "aws",
        badge: "RECOMMENDED",
      },
      {
        id: "app-runner",
        name: "AWS App Runner",
        description: "Containerized deployment directly from Git repository",
        iconName: "app-runner",
      },
      {
        id: "fargate",
        name: "Docker + ECS Fargate",
        description: "Self-host via Dockerfile, docker-compose.yml and Amazon ECS",
        iconName: "cdk",
      },
      {
        id: "none",
        name: "None (Manual Deploy)",
        description: "Skip deployment configuration",
        iconName: "terminal",
      },
    ],
  },
  {
    id: "addons",
    title: "ADDONS & AGENT DX",
    description: "Developer experience tools, AI coding agent steering files, and utilities",
    type: "multiple",
    defaultSelected: ["agents-md", "turborepo", "local-mock", "oxlint", "mcp-server"],
    options: [
      {
        id: "agents-md",
        name: "AI Agent Steering (AGENTS.md)",
        description: "Pre-configured AI agent steering files for Claude, Gemini, Cursor & Copilot",
        iconName: "agent-skills",
        badge: "DEFAULT",
      },
      {
        id: "turborepo",
        name: "Turborepo",
        description: "High-performance monorepo build system and smart task runner",
        iconName: "turborepo",
        badge: "DEFAULT",
      },
      {
        id: "local-mock",
        name: "Local Mock Dev Server",
        description:
          "100% offline local AWS emulation without needing an AWS account or credentials",
        iconName: "aws-blocks",
        badge: "LOCAL DEV READY",
      },
      {
        id: "mcp-server",
        name: "AWS Blocks MCP Server",
        description: "Expose local blocks and cloud schema tools to AI coding agents via MCP",
        iconName: "agent-skills",
        badge: "RECOMMENDED",
      },
      {
        id: "oxlint",
        name: "Oxlint + Oxfmt",
        description: "Ultra-fast Rust-based linter and code formatter (50-100x faster than ESLint)",
        iconName: "biome",
      },
      {
        id: "biome",
        name: "Biome",
        description: "Unified formatter, linter, and import organizer for JavaScript/TypeScript",
        iconName: "biome",
      },
      {
        id: "husky",
        name: "Husky",
        description: "Modern native Git hooks for automated pre-commit linting and checks",
        iconName: "terminal",
      },
      {
        id: "lefthook",
        name: "Lefthook",
        description: "Fast and powerful polyglot Git hooks manager",
        iconName: "terminal",
      },
      {
        id: "fumadocs",
        name: "Fumadocs",
        description: "Build exceptional documentation sites with Next.js and MDX",
        iconName: "nextjs",
      },
      {
        id: "starlight",
        name: "Starlight",
        description: "Build stellar documentation sites with Astro",
        iconName: "astro",
      },
      {
        id: "wxt",
        name: "WXT",
        description: "Framework for building next-generation cross-browser extensions",
        iconName: "terminal",
      },
      {
        id: "opentui",
        name: "OpenTUI",
        description: "Build beautiful terminal user interfaces in TypeScript",
        iconName: "opentui",
      },
    ],
  },
  {
    id: "examples",
    title: "STARTER TEMPLATES & EXAMPLES",
    description: "Include pre-built starter features to accelerate your development",
    type: "single",
    defaultSelected: "ai-rag",
    options: [
      {
        id: "ai-rag",
        name: "AI Agent & RAG Search",
        description: "Interactive chat with Amazon Bedrock Claude 3.5 + pgvector document search",
        iconName: "bedrock",
        badge: "RECOMMENDED",
      },
      {
        id: "saas",
        name: "Multi-tenant SaaS Starter",
        description: "Complete SaaS with Cognito Auth, team workspaces, S3 uploads & SES emails",
        iconName: "cognito",
      },
      {
        id: "todo",
        name: "Todo Example",
        description: "Simple CRUD task management application with database & auth",
        iconName: "aws-blocks",
      },
      {
        id: "none",
        name: "Blank Starter",
        description: "Clean empty repository without example code",
        iconName: "terminal",
      },
    ],
  },
  {
    id: "packageManager",
    title: "PACKAGE MANAGER",
    description: "Choose your preferred package manager",
    type: "single",
    defaultSelected: "bun",
    options: [
      {
        id: "bun",
        name: "bun",
        description: "All-in-one fast JavaScript runtime, bundler & package manager",
        iconName: "bun",
        badge: "DEFAULT",
      },
      {
        id: "pnpm",
        name: "pnpm",
        description: "Fast, disk-space efficient package manager with symlinked node_modules",
        iconName: "pnpm",
      },
      {
        id: "npm",
        name: "npm",
        description: "Default standard Node.js package manager",
        iconName: "npm",
      },
    ],
  },
  {
    id: "git",
    title: "GIT REPOSITORY",
    description: "Git version control initialization",
    type: "single",
    defaultSelected: "git",
    options: [
      {
        id: "git",
        name: "Initialize Git",
        description: "Initialize Git repository with .gitignore and initial commit",
        iconName: "terminal",
        badge: "DEFAULT",
      },
      {
        id: "none",
        name: "No Git",
        description: "Skip Git initialization",
        iconName: "terminal",
      },
    ],
  },
  {
    id: "install",
    title: "DEPENDENCY INSTALLATION",
    description: "Automatically run install after project generation",
    type: "single",
    defaultSelected: "install",
    options: [
      {
        id: "install",
        name: "Install Dependencies",
        description: "Install all npm packages automatically during project creation",
        iconName: "terminal",
        badge: "DEFAULT",
      },
      {
        id: "skip",
        name: "Skip Install",
        description: "Skip dependency installation (Run manually later)",
        iconName: "terminal",
      },
    ],
  },
];

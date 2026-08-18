# AWS Blocks Stack Builder 🧱⚡

An interactive stack builder and architecture configurator for **AWS Blocks** (`@aws-blocks/blocks`), inspired by Better-T-Stack and powered by modern TypeScript and AWS infrastructure-from-code principles.

---

## 🌟 What is AWS Blocks?

[AWS Blocks](https://github.com/aws-devtools-labs/aws-blocks) is an open-source, "Infrastructure from Code" TypeScript framework by AWS DevTools.

Each Block (e.g. `Database`, `KVStore`, `AuthCognito`, `FileBucket`, `Agent`, `AsyncJob`, `CronJob`) serves **three roles simultaneously**:

1. **Local Mock**: Runs 100% locally with zero cloud dependencies and no AWS account required during development (`bun run dev`).
2. **Infrastructure Definition**: Synthesizes production-ready AWS CDK constructs and CloudFormation templates on deploy (`blocks deploy`).
3. **Runtime Implementation**: Provides high-performance, type-safe AWS SDK runtime execution inside Lambda or App Runner.
4. **AI-Agent Ready**: Includes `AGENTS.md` steering files for Claude, Gemini, Cursor, and Copilot.

---

## 🚀 Interactive Builder Features

- **Web Frontend**: Next.js, TanStack Start, TanStack Router, React Router, Nuxt, SvelteKit, SolidStart, Astro.
- **Native Frontend**: Expo (Uniwind / Bare / Unistyles), Swift (iOS Native), Kotlin (Android Native), Flutter (Dart).
- **Backend & Compute**: AWS Lambda (Serverless scale-to-zero), AWS App Runner, ECS Fargate, Hono, Fullstack Next.js.
- **API & RPC Layer**: AWS Blocks `ApiNamespace` (type-safe RPC & SDK gen), tRPC, oRPC, REST (API Gateway), AppSync GraphQL.
- **Database Options**:
  - **Aurora Serverless v2 PostgreSQL** (0.5 - 128 ACUs with pgvector)
  - **Amazon DynamoDB** (KVStore & DistributedTable)
  - **Amazon Aurora DSQL** (Multi-region active-active distributed SQL)
  - **Aurora Serverless v2 MySQL**
  - **Neon Serverless Postgres** & **Supabase Postgres**
- **ORM Options**: Drizzle ORM, Prisma ORM, Kysely, AWS Blocks Native SDK.
- **Auth Options**: Amazon Cognito (`AuthCognito`), AWS Blocks Basic Auth (`AuthBasic`), AWS OIDC (`AuthOIDC`), Better-Auth, Clerk.
- **Storage**: Amazon S3 (`FileBucket`) with presigned upload URLs & CloudFront CDN.
- **AI & Amazon Bedrock**: Bedrock Agent (`Agent` - Claude 3.5 Sonnet / Nova), Bedrock KnowledgeBase (`KnowledgeBase` RAG vector search).
- **Async & Events**: SQS (`AsyncJob`), EventBridge (`CronJob`), WebSockets (`Realtime`), SES (`EmailClient`), Secrets Manager (`SecretStore`).
- **Deployment**: AWS CDK (Native Infra-from-Code), AWS Amplify Hosting, AWS App Runner, Docker + ECS Fargate.
- **Addons & DX**: AI Agent Steering (`AGENTS.md`), Turborepo, Local Mock Server, AWS Blocks MCP Server, Oxlint, Biome, Husky, Fumadocs.

---

## 🛠️ Quick Start

```bash
# 1. Install dependencies
bun install

# 2. Run the interactive web builder
bun run dev
```

Open [http://localhost:3001](http://localhost:3001) to explore the builder, load architectural presets, and inspect generated code!

---

## 📋 Architecture Presets Included

1. 🤖 **AI Agent & RAG Stack**: Next.js + Bedrock Agent (Claude 3.5) + KnowledgeBase + Aurora pgvector + Cognito + S3.
2. 🏢 **Modern Fullstack SaaS**: Next.js + Aurora Postgres + Drizzle + Cognito + S3 + SQS + SES + Turborepo.
3. 📱 **Cross-Platform Mobile**: Expo (Uniwind) + Swift & Kotlin clients + DynamoDB + Cognito + S3 + WebSockets.
4. ⚡ **High-Scale Serverless**: TanStack Start + DynamoDB + ApiNamespace + SQS + EventBridge + Lambda.
5. 🌐 **Aurora DSQL Active-Active**: React Router + Aurora DSQL + Prisma + AuthOIDC + S3 + App Runner.
6. 🛠️ **Local-First Lightweight**: Next.js + DynamoDB + AuthBasic + Local Mock simulation (zero AWS credentials needed).

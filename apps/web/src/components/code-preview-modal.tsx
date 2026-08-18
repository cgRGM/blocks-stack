"use client";

import * as React from "react";
import {
  generateBlocksTs,
  generateAgentsMd,
  generateConfigJson,
  generateCdkStack,
  generateCliWorkflow,
  type Selections,
} from "@/lib/generators";
import {
  X,
  Copy,
  Check,
  Code2,
  FileText,
  Boxes,
  Cpu,
  Layers,
  Sparkles,
  Database,
  Shield,
  FolderLock,
  Radio,
  Clock,
  Mail,
  Key,
  Cloud,
  Terminal,
} from "lucide-react";
import { toast } from "sonner";
import { AwsBlocksIcon } from "./icons";

interface CodePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  selections: Selections;
  packageManager: string;
  projectName: string;
}

export function CodePreviewModal({
  isOpen,
  onClose,
  selections,
  packageManager,
  projectName,
}: CodePreviewModalProps) {
  const [activeTab, setActiveTab] = React.useState<
    "architecture" | "indexTs" | "cdkStack" | "agentsMd" | "workflow" | "config"
  >("architecture");
  const [copied, setCopied] = React.useState(false);
  const [selectedNode, setSelectedNode] = React.useState<string | null>("api");

  if (!isOpen) return null;

  const blocksTs = generateBlocksTs(selections);
  const cdkStack = generateCdkStack(selections, projectName);
  const agentsMd = generateAgentsMd(selections);
  const workflow = generateCliWorkflow(selections, packageManager, projectName);
  const configJson = generateConfigJson(selections, projectName);

  const getCurrentContent = () => {
    switch (activeTab) {
      case "indexTs":
        return blocksTs;
      case "cdkStack":
        return cdkStack;
      case "agentsMd":
        return agentsMd;
      case "workflow":
        return workflow;
      case "config":
        return configJson;
      default:
        return blocksTs;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCurrentContent());
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const events = Array.isArray(selections.asyncAndEvents) ? selections.asyncAndEvents : [];
  const db = selections.database as string;
  const auth = selections.auth as string;
  const ai = selections.aiBedrock as string;
  const storage = selections.storage as string;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative flex h-[90vh] w-full max-w-5xl flex-col rounded-xl border border-border bg-background shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-border/80 px-4 py-3 bg-muted/40">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900]">
              <AwsBlocksIcon size={18} />
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-tight text-foreground flex items-center gap-2">
                <span>Architecture & Code Preview</span>
                <span className="text-[11px] font-mono font-normal text-muted-foreground bg-muted px-2 py-0.5 rounded border border-border">
                  {projectName}
                </span>
              </h3>
              <p className="text-xs text-muted-foreground">
                Infrastructure from Code synthesized for AWS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors shadow-xs"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-500" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Content</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="rounded-md p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 border-b border-border/80 px-4 bg-muted/20 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`flex items-center gap-2 border-b-2 px-3 py-2.5 transition-colors whitespace-nowrap ${
              activeTab === "architecture"
                ? "border-[#FF9900] text-[#FF9900] font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Boxes size={15} />
            <span>Interactive Architecture</span>
          </button>
          <button
            onClick={() => setActiveTab("indexTs")}
            className={`flex items-center gap-2 border-b-2 px-3 py-2.5 transition-colors whitespace-nowrap ${
              activeTab === "indexTs"
                ? "border-[#FF9900] text-[#FF9900] font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Code2 size={15} />
            <span>aws-blocks/index.ts</span>
          </button>
          <button
            onClick={() => setActiveTab("cdkStack")}
            className={`flex items-center gap-2 border-b-2 px-3 py-2.5 transition-colors whitespace-nowrap ${
              activeTab === "cdkStack"
                ? "border-[#FF9900] text-[#FF9900] font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Cloud size={15} />
            <span>infra/stack.ts (CDK)</span>
          </button>
          <button
            onClick={() => setActiveTab("agentsMd")}
            className={`flex items-center gap-2 border-b-2 px-3 py-2.5 transition-colors whitespace-nowrap ${
              activeTab === "agentsMd"
                ? "border-[#FF9900] text-[#FF9900] font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sparkles size={15} />
            <span>AGENTS.md (AI Steering)</span>
          </button>
          <button
            onClick={() => setActiveTab("workflow")}
            className={`flex items-center gap-2 border-b-2 px-3 py-2.5 transition-colors whitespace-nowrap ${
              activeTab === "workflow"
                ? "border-[#FF9900] text-[#FF9900] font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Terminal size={15} />
            <span>Sandbox & CLI Workflow</span>
          </button>
          <button
            onClick={() => setActiveTab("config")}
            className={`flex items-center gap-2 border-b-2 px-3 py-2.5 transition-colors whitespace-nowrap ${
              activeTab === "config"
                ? "border-[#FF9900] text-[#FF9900] font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <FileText size={15} />
            <span>blocks.config.json</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-4 bg-muted/10 font-mono text-xs">
          {activeTab === "architecture" ? (
            <div className="flex flex-col gap-6 font-sans">
              <div className="rounded-lg border border-border/80 bg-card p-4 shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      Synthesized AWS Architecture Flow
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Click any component to inspect its AWS Block construct and local mock behavior
                    </p>
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-[#FF9900]/10 text-[#FF9900] border border-[#FF9900]/30">
                    Target: AWS CDK v2
                  </span>
                </div>

                {/* Architecture Diagram Nodes */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Layer 1: Client */}
                  <div className="flex flex-col gap-3 rounded-lg border border-border/80 bg-muted/30 p-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      1. Clients
                    </span>
                    <button
                      onClick={() => setSelectedNode("web")}
                      className={`flex items-center gap-2.5 p-2.5 rounded border text-left transition-all ${
                        selectedNode === "web"
                          ? "border-[#FF9900] bg-[#FF9900]/10 text-foreground"
                          : "border-border/60 bg-background text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Layers size={16} className="text-[#FF9900]" />
                      <div>
                        <div className="text-xs font-semibold text-foreground capitalize">
                          {String(selections.webFrontend)}
                        </div>
                        <div className="text-[10px] text-muted-foreground">Web Application</div>
                      </div>
                    </button>
                    {selections.nativeFrontend !== "none" && (
                      <button
                        onClick={() => setSelectedNode("native")}
                        className={`flex items-center gap-2.5 p-2.5 rounded border text-left transition-all ${
                          selectedNode === "native"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-foreground"
                            : "border-border/60 bg-background text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Radio size={16} className="text-sky-500" />
                        <div>
                          <div className="text-xs font-semibold text-foreground capitalize">
                            {String(selections.nativeFrontend)}
                          </div>
                          <div className="text-[10px] text-muted-foreground">Native Mobile App</div>
                        </div>
                      </button>
                    )}
                  </div>

                  {/* Layer 2: API & Gateway */}
                  <div className="flex flex-col gap-3 rounded-lg border border-border/80 bg-muted/30 p-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      2. API & Routing
                    </span>
                    <button
                      onClick={() => setSelectedNode("api")}
                      className={`flex items-center gap-2.5 p-2.5 rounded border text-left transition-all ${
                        selectedNode === "api"
                          ? "border-[#FF9900] bg-[#FF9900]/10 text-foreground"
                          : "border-border/60 bg-background text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Cpu size={16} className="text-pink-500" />
                      <div>
                        <div className="text-xs font-semibold text-foreground">
                          {selections.apiLayer === "blocks-api"
                            ? "AWS Blocks ApiNamespace"
                            : String(selections.apiLayer)}
                        </div>
                        <div className="text-[10px] text-muted-foreground">Amazon API Gateway</div>
                      </div>
                    </button>

                    <button
                      onClick={() => setSelectedNode("compute")}
                      className={`flex items-center gap-2.5 p-2.5 rounded border text-left transition-all ${
                        selectedNode === "compute"
                          ? "border-[#FF9900] bg-[#FF9900]/10 text-foreground"
                          : "border-border/60 bg-background text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Cpu size={16} className="text-amber-500" />
                      <div>
                        <div className="text-xs font-semibold text-foreground capitalize">
                          {String(selections.backendRuntime)}
                        </div>
                        <div className="text-[10px] text-muted-foreground">Compute Runtime</div>
                      </div>
                    </button>
                  </div>

                  {/* Layer 3: Data & Storage */}
                  <div className="flex flex-col gap-3 rounded-lg border border-border/80 bg-muted/30 p-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      3. Data & Storage
                    </span>
                    {db !== "none" && (
                      <button
                        onClick={() => setSelectedNode("db")}
                        className={`flex items-center gap-2.5 p-2.5 rounded border text-left transition-all ${
                          selectedNode === "db"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-foreground"
                            : "border-border/60 bg-background text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Database size={16} className="text-blue-500" />
                        <div>
                          <div className="text-xs font-semibold text-foreground">
                            {db === "aurora-postgres"
                              ? "Aurora Serverless v2"
                              : db === "dynamodb"
                                ? "Amazon DynamoDB"
                                : db === "aurora-dsql"
                                  ? "Aurora DSQL"
                                  : db}
                          </div>
                          <div className="text-[10px] text-muted-foreground">
                            {selections.orm !== "none" ? `ORM: ${selections.orm}` : "Native Client"}
                          </div>
                        </div>
                      </button>
                    )}

                    {storage !== "none" && (
                      <button
                        onClick={() => setSelectedNode("storage")}
                        className={`flex items-center gap-2.5 p-2.5 rounded border text-left transition-all ${
                          selectedNode === "storage"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-foreground"
                            : "border-border/60 bg-background text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <FolderLock size={16} className="text-red-500" />
                        <div>
                          <div className="text-xs font-semibold text-foreground">Amazon S3</div>
                          <div className="text-[10px] text-muted-foreground">FileBucket + CDN</div>
                        </div>
                      </button>
                    )}

                    {auth !== "none" && (
                      <button
                        onClick={() => setSelectedNode("auth")}
                        className={`flex items-center gap-2.5 p-2.5 rounded border text-left transition-all ${
                          selectedNode === "auth"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-foreground"
                            : "border-border/60 bg-background text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Shield size={16} className="text-emerald-500" />
                        <div>
                          <div className="text-xs font-semibold text-foreground">
                            {auth === "cognito" ? "Amazon Cognito" : auth}
                          </div>
                          <div className="text-[10px] text-muted-foreground">User Pool & MFA</div>
                        </div>
                      </button>
                    )}
                  </div>

                  {/* Layer 4: AI & Event Capabilities */}
                  <div className="flex flex-col gap-3 rounded-lg border border-border/80 bg-muted/30 p-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      4. AI & Background
                    </span>
                    {ai !== "none" && (
                      <button
                        onClick={() => setSelectedNode("ai")}
                        className={`flex items-center gap-2.5 p-2.5 rounded border text-left transition-all ${
                          selectedNode === "ai"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-foreground"
                            : "border-border/60 bg-background text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Sparkles size={16} className="text-purple-500" />
                        <div>
                          <div className="text-xs font-semibold text-foreground">
                            Amazon Bedrock
                          </div>
                          <div className="text-[10px] text-muted-foreground">Claude 3.5 + RAG</div>
                        </div>
                      </button>
                    )}

                    {events.includes("async-job") && (
                      <button
                        onClick={() => setSelectedNode("sqs")}
                        className={`flex items-center gap-2.5 p-2.5 rounded border text-left transition-all ${
                          selectedNode === "sqs"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-foreground"
                            : "border-border/60 bg-background text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Layers size={16} className="text-pink-500" />
                        <div>
                          <div className="text-xs font-semibold text-foreground">Amazon SQS</div>
                          <div className="text-[10px] text-muted-foreground">AsyncJob Worker</div>
                        </div>
                      </button>
                    )}

                    {events.includes("cron-job") && (
                      <button
                        onClick={() => setSelectedNode("cron")}
                        className={`flex items-center gap-2.5 p-2.5 rounded border text-left transition-all ${
                          selectedNode === "cron"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-foreground"
                            : "border-border/60 bg-background text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Clock size={16} className="text-pink-500" />
                        <div>
                          <div className="text-xs font-semibold text-foreground">
                            Amazon EventBridge
                          </div>
                          <div className="text-[10px] text-muted-foreground">CronJob Scheduler</div>
                        </div>
                      </button>
                    )}

                    {events.includes("email-client") && (
                      <button
                        onClick={() => setSelectedNode("ses")}
                        className={`flex items-center gap-2.5 p-2.5 rounded border text-left transition-all ${
                          selectedNode === "ses"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-foreground"
                            : "border-border/60 bg-background text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Mail size={16} className="text-pink-500" />
                        <div>
                          <div className="text-xs font-semibold text-foreground">Amazon SES</div>
                          <div className="text-[10px] text-muted-foreground">
                            Transactional Email
                          </div>
                        </div>
                      </button>
                    )}

                    {events.includes("secret-store") && (
                      <button
                        onClick={() => setSelectedNode("secrets")}
                        className={`flex items-center gap-2.5 p-2.5 rounded border text-left transition-all ${
                          selectedNode === "secrets"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-foreground"
                            : "border-border/60 bg-background text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <Key size={16} className="text-red-500" />
                        <div>
                          <div className="text-xs font-semibold text-foreground">
                            Secrets Manager
                          </div>
                          <div className="text-[10px] text-muted-foreground">Rotated Keys</div>
                        </div>
                      </button>
                    )}
                  </div>
                </div>

                {/* Node Details Inspection Panel */}
                <div className="mt-5 rounded-lg border border-[#FF9900]/30 bg-amber-500/[0.04] p-4 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-border/60">
                    <span className="font-semibold text-[#FF9900] uppercase tracking-wider font-mono">
                      Inspector: {selectedNode?.toUpperCase()}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      Simultaneous Local Mock + AWS Cloud Formation CDK
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="rounded bg-background/60 p-2.5 border border-border/40">
                      <div className="font-semibold text-foreground mb-1">Local Dev (Mock)</div>
                      <p className="text-muted-foreground text-[11px] leading-relaxed">
                        Runs 100% locally with zero cloud dependencies. No AWS credentials or
                        internet required during{" "}
                        <code className="text-foreground">bun run dev</code>.
                      </p>
                    </div>
                    <div className="rounded bg-background/60 p-2.5 border border-border/40">
                      <div className="font-semibold text-foreground mb-1">AWS Infrastructure</div>
                      <p className="text-muted-foreground text-[11px] leading-relaxed">
                        Synthesizes production AWS CDK constructs with IAM least-privilege security
                        policies, KMS encryption, and auto-scaling.
                      </p>
                    </div>
                    <div className="rounded bg-background/60 p-2.5 border border-border/40">
                      <div className="font-semibold text-foreground mb-1">Runtime Execution</div>
                      <p className="text-muted-foreground text-[11px] leading-relaxed">
                        Executes optimized AWS SDK calls inside Lambda handlers with built-in
                        connection pooling and caching.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <pre className="p-4 rounded-lg bg-card border border-border/80 overflow-x-auto text-[12px] leading-relaxed text-foreground select-text whitespace-pre">
              {getCurrentContent()}
            </pre>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-border/80 px-4 py-3 bg-muted/30">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Ready to create this AWS stack?</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 rounded-lg bg-[#FF9900] px-4 py-2 text-xs font-semibold text-black hover:bg-[#FF9900]/90 transition-colors shadow-sm"
          >
            {copied ? <Check size={14} strokeWidth={3} /> : <Copy size={14} />}
            <span>Copy {activeTab === "workflow" ? "Workflow Commands" : "File Code"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

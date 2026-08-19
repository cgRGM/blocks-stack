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
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const events = Array.isArray(selections.asyncAndEvents) ? selections.asyncAndEvents : [];
  const db = selections.database as string;
  const auth = selections.auth as string;
  const ai = selections.aiBedrock as string;
  const storage = selections.storage as string;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-3 sm:p-6 animate-in fade-in duration-150">
      <div className="relative flex h-[88vh] w-full max-w-5xl flex-col rounded-lg border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden text-zinc-100">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3 bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-zinc-800 border border-zinc-700 text-[#FF9900]">
              <AwsBlocksIcon size={16} />
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-tight text-zinc-100 font-mono flex items-center gap-2">
                <span>Architecture & Project Scaffolding</span>
                <span className="text-[11px] font-mono text-zinc-400 bg-zinc-900 px-2 py-0.2 rounded border border-zinc-800">
                  {projectName}
                </span>
              </h3>
              <p className="text-xs text-zinc-400">
                Generated source code and synthesized AWS CDK constructs
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-xs font-mono text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="rounded p-1 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 border-b border-zinc-800 px-4 bg-black/40 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`flex items-center gap-1.5 border-b-2 px-3 py-2.5 transition-colors whitespace-nowrap ${
              activeTab === "architecture"
                ? "border-[#FF9900] text-[#FF9900] font-semibold"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Boxes size={14} />
            <span>Architecture Diagram</span>
          </button>
          <button
            onClick={() => setActiveTab("indexTs")}
            className={`flex items-center gap-1.5 border-b-2 px-3 py-2.5 transition-colors whitespace-nowrap ${
              activeTab === "indexTs"
                ? "border-[#FF9900] text-[#FF9900] font-semibold"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Code2 size={14} />
            <span>aws-blocks/index.ts</span>
          </button>
          <button
            onClick={() => setActiveTab("cdkStack")}
            className={`flex items-center gap-1.5 border-b-2 px-3 py-2.5 transition-colors whitespace-nowrap ${
              activeTab === "cdkStack"
                ? "border-[#FF9900] text-[#FF9900] font-semibold"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Cloud size={14} />
            <span>infra/stack.ts (CDK)</span>
          </button>
          <button
            onClick={() => setActiveTab("agentsMd")}
            className={`flex items-center gap-1.5 border-b-2 px-3 py-2.5 transition-colors whitespace-nowrap ${
              activeTab === "agentsMd"
                ? "border-[#FF9900] text-[#FF9900] font-semibold"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Sparkles size={14} />
            <span>AGENTS.md</span>
          </button>
          <button
            onClick={() => setActiveTab("workflow")}
            className={`flex items-center gap-1.5 border-b-2 px-3 py-2.5 transition-colors whitespace-nowrap ${
              activeTab === "workflow"
                ? "border-[#FF9900] text-[#FF9900] font-semibold"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <Terminal size={14} />
            <span>Workflow & Commands</span>
          </button>
          <button
            onClick={() => setActiveTab("config")}
            className={`flex items-center gap-1.5 border-b-2 px-3 py-2.5 transition-colors whitespace-nowrap ${
              activeTab === "config"
                ? "border-[#FF9900] text-[#FF9900] font-semibold"
                : "border-transparent text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <FileText size={14} />
            <span>blocks.config.json</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-4 bg-black font-mono text-xs">
          {activeTab === "architecture" ? (
            <div className="flex flex-col gap-5 font-sans">
              <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-200">
                      Synthesized AWS Architecture Blueprint
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Modular blocks deployed via AWS CDK constructs
                    </p>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                    Target: AWS CDK v2
                  </span>
                </div>

                {/* Architecture Nodes */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3.5">
                  {/* Layer 1: Client */}
                  <div className="flex flex-col gap-2.5 rounded border border-zinc-800/80 bg-zinc-900/30 p-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                      1. Clients
                    </span>
                    <button
                      onClick={() => setSelectedNode("web")}
                      className={`flex items-center gap-2 p-2 rounded border text-left transition-all ${
                        selectedNode === "web"
                          ? "border-[#FF9900] bg-[#FF9900]/10 text-white"
                          : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <Layers size={15} className="text-[#FF9900]" />
                      <div>
                        <div className="text-xs font-semibold text-zinc-200 capitalize">
                          {String(selections.webFrontend)}
                        </div>
                        <div className="text-[10px] text-zinc-500">Web App</div>
                      </div>
                    </button>
                    {selections.nativeFrontend !== "none" && (
                      <button
                        onClick={() => setSelectedNode("native")}
                        className={`flex items-center gap-2 p-2 rounded border text-left transition-all ${
                          selectedNode === "native"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-white"
                            : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        <Radio size={15} className="text-sky-400" />
                        <div>
                          <div className="text-xs font-semibold text-zinc-200 capitalize">
                            {String(selections.nativeFrontend)}
                          </div>
                          <div className="text-[10px] text-zinc-500">Mobile Client</div>
                        </div>
                      </button>
                    )}
                  </div>

                  {/* Layer 2: API & Routing */}
                  <div className="flex flex-col gap-2.5 rounded border border-zinc-800/80 bg-zinc-900/30 p-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                      2. API & Routing
                    </span>
                    <button
                      onClick={() => setSelectedNode("api")}
                      className={`flex items-center gap-2 p-2 rounded border text-left transition-all ${
                        selectedNode === "api"
                          ? "border-[#FF9900] bg-[#FF9900]/10 text-white"
                          : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <Cpu size={15} className="text-pink-400" />
                      <div>
                        <div className="text-xs font-semibold text-zinc-200">
                          {selections.apiLayer === "blocks-api"
                            ? "ApiNamespace"
                            : String(selections.apiLayer)}
                        </div>
                        <div className="text-[10px] text-zinc-500">API Gateway</div>
                      </div>
                    </button>

                    <button
                      onClick={() => setSelectedNode("compute")}
                      className={`flex items-center gap-2 p-2 rounded border text-left transition-all ${
                        selectedNode === "compute"
                          ? "border-[#FF9900] bg-[#FF9900]/10 text-white"
                          : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <Cpu size={15} className="text-amber-400" />
                      <div>
                        <div className="text-xs font-semibold text-zinc-200 capitalize">
                          {String(selections.backendRuntime)}
                        </div>
                        <div className="text-[10px] text-zinc-500">Compute Runtime</div>
                      </div>
                    </button>
                  </div>

                  {/* Layer 3: Data & Storage */}
                  <div className="flex flex-col gap-2.5 rounded border border-zinc-800/80 bg-zinc-900/30 p-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                      3. Data & Storage
                    </span>
                    {db !== "none" && (
                      <button
                        onClick={() => setSelectedNode("db")}
                        className={`flex items-center gap-2 p-2 rounded border text-left transition-all ${
                          selectedNode === "db"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-white"
                            : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        <Database size={15} className="text-blue-400" />
                        <div>
                          <div className="text-xs font-semibold text-zinc-200">
                            {db === "aurora-postgres"
                              ? "Aurora Postgres"
                              : db === "dynamodb"
                                ? "DynamoDB"
                                : db === "aurora-dsql"
                                  ? "Aurora DSQL"
                                  : db}
                          </div>
                          <div className="text-[10px] text-zinc-500">
                            {selections.orm !== "none" ? `ORM: ${selections.orm}` : "Native Client"}
                          </div>
                        </div>
                      </button>
                    )}

                    {storage !== "none" && (
                      <button
                        onClick={() => setSelectedNode("storage")}
                        className={`flex items-center gap-2 p-2 rounded border text-left transition-all ${
                          selectedNode === "storage"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-white"
                            : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        <FolderLock size={15} className="text-red-400" />
                        <div>
                          <div className="text-xs font-semibold text-zinc-200">Amazon S3</div>
                          <div className="text-[10px] text-zinc-500">FileBucket</div>
                        </div>
                      </button>
                    )}

                    {auth !== "none" && (
                      <button
                        onClick={() => setSelectedNode("auth")}
                        className={`flex items-center gap-2 p-2 rounded border text-left transition-all ${
                          selectedNode === "auth"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-white"
                            : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        <Shield size={15} className="text-emerald-400" />
                        <div>
                          <div className="text-xs font-semibold text-zinc-200">
                            {auth === "cognito" ? "Amazon Cognito" : auth}
                          </div>
                          <div className="text-[10px] text-zinc-500">Auth Block</div>
                        </div>
                      </button>
                    )}
                  </div>

                  {/* Layer 4: AI & Background */}
                  <div className="flex flex-col gap-2.5 rounded border border-zinc-800/80 bg-zinc-900/30 p-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                      4. AI & Background
                    </span>
                    {ai !== "none" && (
                      <button
                        onClick={() => setSelectedNode("ai")}
                        className={`flex items-center gap-2 p-2 rounded border text-left transition-all ${
                          selectedNode === "ai"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-white"
                            : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        <Sparkles size={15} className="text-teal-400" />
                        <div>
                          <div className="text-xs font-semibold text-zinc-200">Amazon Bedrock</div>
                          <div className="text-[10px] text-zinc-500">Agent & RAG</div>
                        </div>
                      </button>
                    )}

                    {events.includes("async-job") && (
                      <button
                        onClick={() => setSelectedNode("sqs")}
                        className={`flex items-center gap-2 p-2 rounded border text-left transition-all ${
                          selectedNode === "sqs"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-white"
                            : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        <Layers size={15} className="text-pink-400" />
                        <div>
                          <div className="text-xs font-semibold text-zinc-200">Amazon SQS</div>
                          <div className="text-[10px] text-zinc-500">AsyncJob</div>
                        </div>
                      </button>
                    )}

                    {events.includes("cron-job") && (
                      <button
                        onClick={() => setSelectedNode("cron")}
                        className={`flex items-center gap-2 p-2 rounded border text-left transition-all ${
                          selectedNode === "cron"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-white"
                            : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        <Clock size={15} className="text-pink-400" />
                        <div>
                          <div className="text-xs font-semibold text-zinc-200">EventBridge</div>
                          <div className="text-[10px] text-zinc-500">CronJob</div>
                        </div>
                      </button>
                    )}

                    {events.includes("email-client") && (
                      <button
                        onClick={() => setSelectedNode("ses")}
                        className={`flex items-center gap-2 p-2 rounded border text-left transition-all ${
                          selectedNode === "ses"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-white"
                            : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        <Mail size={15} className="text-pink-400" />
                        <div>
                          <div className="text-xs font-semibold text-zinc-200">Amazon SES</div>
                          <div className="text-[10px] text-zinc-500">EmailClient</div>
                        </div>
                      </button>
                    )}

                    {events.includes("secret-store") && (
                      <button
                        onClick={() => setSelectedNode("secrets")}
                        className={`flex items-center gap-2 p-2 rounded border text-left transition-all ${
                          selectedNode === "secrets"
                            ? "border-[#FF9900] bg-[#FF9900]/10 text-white"
                            : "border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        <Key size={15} className="text-red-400" />
                        <div>
                          <div className="text-xs font-semibold text-zinc-200">Secrets Manager</div>
                          <div className="text-[10px] text-zinc-500">SecretStore</div>
                        </div>
                      </button>
                    )}
                  </div>
                </div>

                {/* Node Details Inspection Panel */}
                <div className="mt-4 rounded border border-zinc-800 bg-zinc-900/40 p-3 text-xs">
                  <div className="flex items-center justify-between pb-1.5 border-b border-zinc-800">
                    <span className="font-semibold text-[#FF9900] uppercase tracking-wider font-mono">
                      Component Inspector: {selectedNode?.toUpperCase()}
                    </span>
                    <span className="text-[11px] text-zinc-500 font-mono">
                      Tri-Purpose Block Architecture
                    </span>
                  </div>
                  <div className="mt-2.5 grid grid-cols-1 md:grid-cols-3 gap-2.5">
                    <div className="rounded bg-black/60 p-2 border border-zinc-800">
                      <div className="font-semibold text-zinc-300 mb-0.5">1. Local Mock</div>
                      <p className="text-zinc-400 text-[11px] leading-relaxed">
                        Runs locally in memory with zero cloud dependencies. No AWS credentials
                        needed during <code className="text-zinc-200">bun run dev</code>.
                      </p>
                    </div>
                    <div className="rounded bg-black/60 p-2 border border-zinc-800">
                      <div className="font-semibold text-zinc-300 mb-0.5">
                        2. Infrastructure (CDK)
                      </div>
                      <p className="text-zinc-400 text-[11px] leading-relaxed">
                        Synthesizes AWS CDK constructs with least-privilege IAM policies, KMS
                        encryption, and auto-scaling.
                      </p>
                    </div>
                    <div className="rounded bg-black/60 p-2 border border-zinc-800">
                      <div className="font-semibold text-zinc-300 mb-0.5">3. Runtime Execution</div>
                      <p className="text-zinc-400 text-[11px] leading-relaxed">
                        Executes optimized AWS SDK operations inside Lambda handlers with
                        sub-millisecond connection pooling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <pre className="p-4 rounded border border-zinc-800 bg-zinc-950 text-zinc-300 text-[12px] leading-relaxed select-text whitespace-pre overflow-x-auto">
              {getCurrentContent()}
            </pre>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-zinc-800 px-4 py-2.5 bg-zinc-900/50">
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
            <span>
              Ready to scaffold: <code className="text-zinc-300">{projectName}</code>
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded bg-[#FF9900] px-3.5 py-1.5 text-xs font-mono font-semibold text-black hover:bg-[#FF9900]/90 transition-colors shadow-xs"
          >
            {copied ? <Check size={13} strokeWidth={3} /> : <Copy size={13} />}
            <span>Copy {activeTab === "workflow" ? "Workflow Commands" : "Content"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

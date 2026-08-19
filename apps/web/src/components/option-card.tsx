"use client";

import * as React from "react";
import {
  AwsBlocksIcon,
  AwsIcon,
  AuroraIcon,
  DynamoDbIcon,
  DsqlIcon,
  CognitoIcon,
  S3Icon,
  BedrockIcon,
  LambdaIcon,
  SqsIcon,
  EventBridgeIcon,
  ApiGatewayIcon,
  CdkIcon,
  AppRunnerIcon,
  SesIcon,
  SecretsManagerIcon,
  NextjsIcon,
  ReactIcon,
  ReactRouterIcon,
  TanStackIcon,
  NuxtIcon,
  SvelteIcon,
  SolidIcon,
  AstroIcon,
  ExpoIcon,
  SwiftIcon,
  KotlinIcon,
  FlutterIcon,
  DrizzleIcon,
  PrismaIcon,
  KyselyIcon,
  HonoIcon,
  TrpcIcon,
  NeonIcon,
  SupabaseIcon,
  TurborepoIcon,
  BiomeIcon,
  BunIcon,
  PnpmIcon,
  NpmIcon,
  AgentSkillsIcon,
  BetterAuthIcon,
  ClerkIcon,
  AmplifyIcon,
  AppSyncIcon,
} from "./icons";
import type { OptionItem } from "@/data/builder-data";
import { Check, AlertCircle, Terminal } from "lucide-react";

interface OptionCardProps {
  option: OptionItem;
  isSelected: boolean;
  isMulti: boolean;
  onSelect: () => void;
  disabled?: boolean;
  disabledReason?: string;
}

export function RenderIcon({
  name,
  className,
  size = 22,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  switch (name) {
    case "aws-blocks":
      return <AwsBlocksIcon size={size} className={className} />;
    case "aws":
      return <AwsIcon size={size} className={className} />;
    case "aurora":
      return <AuroraIcon size={size} className={className} />;
    case "dynamodb":
      return <DynamoDbIcon size={size} className={className} />;
    case "dsql":
      return <DsqlIcon size={size} className={className} />;
    case "cognito":
      return <CognitoIcon size={size} className={className} />;
    case "s3":
      return <S3Icon size={size} className={className} />;
    case "bedrock":
      return <BedrockIcon size={size} className={className} />;
    case "lambda":
      return <LambdaIcon size={size} className={className} />;
    case "sqs":
      return <SqsIcon size={size} className={className} />;
    case "eventbridge":
      return <EventBridgeIcon size={size} className={className} />;
    case "api-gateway":
      return <ApiGatewayIcon size={size} className={className} />;
    case "cdk":
      return <CdkIcon size={size} className={className} />;
    case "app-runner":
      return <AppRunnerIcon size={size} className={className} />;
    case "amplify":
      return <AmplifyIcon size={size} className={className} />;
    case "ses":
      return <SesIcon size={size} className={className} />;
    case "secrets-manager":
      return <SecretsManagerIcon size={size} className={className} />;
    case "graphql":
    case "appsync":
      return <AppSyncIcon size={size} className={className} />;
    case "nextjs":
      return <NextjsIcon size={size} className={className} />;
    case "react":
      return <ReactIcon size={size} className={className} />;
    case "react-router":
      return <ReactRouterIcon size={size} className={className} />;
    case "tanstack":
      return <TanStackIcon size={size} className={className} />;
    case "nuxt":
      return <NuxtIcon size={size} className={className} />;
    case "svelte":
      return <SvelteIcon size={size} className={className} />;
    case "solid":
      return <SolidIcon size={size} className={className} />;
    case "astro":
      return <AstroIcon size={size} className={className} />;
    case "expo":
      return <ExpoIcon size={size} className={className} />;
    case "swift":
      return <SwiftIcon size={size} className={className} />;
    case "kotlin":
      return <KotlinIcon size={size} className={className} />;
    case "flutter":
      return <FlutterIcon size={size} className={className} />;
    case "drizzle":
      return <DrizzleIcon size={size} className={className} />;
    case "prisma":
      return <PrismaIcon size={size} className={className} />;
    case "kysely":
      return <KyselyIcon size={size} className={className} />;
    case "hono":
      return <HonoIcon size={size} className={className} />;
    case "trpc":
      return <TrpcIcon size={size} className={className} />;
    case "neon":
      return <NeonIcon size={size} className={className} />;
    case "supabase":
      return <SupabaseIcon size={size} className={className} />;
    case "turborepo":
      return <TurborepoIcon size={size} className={className} />;
    case "biome":
      return <BiomeIcon size={size} className={className} />;
    case "bun":
      return <BunIcon size={size} className={className} />;
    case "pnpm":
      return <PnpmIcon size={size} className={className} />;
    case "npm":
      return <NpmIcon size={size} className={className} />;
    case "agent-skills":
      return <AgentSkillsIcon size={size} className={className} />;
    case "better-auth":
      return <BetterAuthIcon size={size} className={className} />;
    case "clerk":
      return <ClerkIcon size={size} className={className} />;
    default:
      return <Terminal size={size} className={className} />;
  }
}

export function OptionCard({
  option,
  isSelected,
  isMulti,
  onSelect,
  disabled,
  disabledReason,
}: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={() => {
        if (!disabled) onSelect();
      }}
      disabled={disabled}
      className={`group relative flex w-full flex-col justify-between rounded-lg border text-left p-3.5 transition-all select-none ${
        disabled
          ? "cursor-not-allowed border-zinc-800/40 bg-zinc-900/20 opacity-40"
          : isSelected
            ? "border-[#FF9900]/70 bg-[#FF9900]/[0.03] shadow-xs"
            : "border-zinc-800/80 bg-zinc-950/40 hover:border-zinc-700 hover:bg-zinc-900/40"
      }`}
    >
      <div className="flex items-start justify-between gap-3 w-full">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border p-1 transition-colors ${
              isSelected
                ? "border-[#FF9900]/30 bg-[#FF9900]/10 text-foreground"
                : "border-zinc-800 bg-zinc-900/60 text-muted-foreground group-hover:border-zinc-700"
            }`}
          >
            <RenderIcon name={option.iconName} size={22} />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`text-sm font-semibold tracking-tight ${
                  isSelected ? "text-zinc-100" : "text-zinc-200 group-hover:text-white"
                }`}
              >
                {option.name}
              </span>
              {option.badge && (
                <span
                  className={`text-[10px] font-medium px-1.5 py-0.2 rounded tracking-wide uppercase font-mono ${
                    option.badge === "DEFAULT"
                      ? "bg-zinc-800 text-zinc-400 border border-zinc-700/60"
                      : option.badge === "RECOMMENDED"
                        ? "bg-emerald-950/40 text-emerald-400 border border-emerald-800/40"
                        : option.badge === "SERVERLESS"
                          ? "bg-amber-950/40 text-amber-400 border border-amber-800/40"
                          : option.badge === "AWS MANAGED"
                            ? "bg-blue-950/40 text-blue-400 border border-blue-800/40"
                            : "bg-zinc-800 text-zinc-400 border border-zinc-700/60"
                  }`}
                >
                  {option.badge}
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-zinc-400 line-clamp-2 leading-relaxed font-normal">
              {option.description}
            </p>
          </div>
        </div>

        {/* Selection Indicator */}
        <div className="shrink-0 pt-1">
          {disabled ? (
            <div className="flex h-4 w-4 items-center justify-center text-zinc-600">
              <AlertCircle size={14} />
            </div>
          ) : isMulti ? (
            <div
              className={`flex h-4 w-4 items-center justify-center rounded border transition-all ${
                isSelected
                  ? "border-[#FF9900] bg-[#FF9900] text-black font-bold"
                  : "border-zinc-700 bg-zinc-900 group-hover:border-zinc-500"
              }`}
            >
              {isSelected && <Check size={11} strokeWidth={3.5} />}
            </div>
          ) : (
            <div
              className={`flex h-4 w-4 items-center justify-center rounded-full border transition-all ${
                isSelected
                  ? "border-[#FF9900] bg-transparent"
                  : "border-zinc-700 bg-zinc-900 group-hover:border-zinc-500"
              }`}
            >
              {isSelected && <div className="h-2 w-2 rounded-full bg-[#FF9900]" />}
            </div>
          )}
        </div>
      </div>

      {disabled && disabledReason && (
        <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-amber-500/80 font-mono">
          <AlertCircle size={11} className="shrink-0" />
          <span>{disabledReason}</span>
        </div>
      )}
    </button>
  );
}

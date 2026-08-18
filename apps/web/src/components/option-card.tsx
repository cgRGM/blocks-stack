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
  OpenTuiIcon,
  BetterAuthIcon,
  ClerkIcon,
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
  size = 20,
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
    case "ses":
      return <SesIcon size={size} className={className} />;
    case "secrets-manager":
      return <SecretsManagerIcon size={size} className={className} />;
    case "nextjs":
      return <NextjsIcon size={size} className={className} />;
    case "react":
      return <ReactIcon size={size} className={className} />;
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
    case "opentui":
      return <OpenTuiIcon size={size} className={className} />;
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
          ? "cursor-not-allowed border-dashed border-border/40 bg-muted/20 opacity-50"
          : isSelected
            ? "border-[#FF9900] bg-amber-500/[0.04] shadow-sm ring-1 ring-[#FF9900]/40 dark:bg-amber-500/[0.08]"
            : "border-border/60 bg-card hover:border-border hover:bg-accent/40"
      }`}
    >
      <div className="flex items-start justify-between gap-3 w-full">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border p-1.5 transition-colors ${
              isSelected
                ? "border-[#FF9900]/40 bg-[#FF9900]/10 text-[#FF9900]"
                : "border-border/60 bg-muted/50 text-foreground group-hover:bg-muted"
            }`}
          >
            <RenderIcon name={option.iconName} size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`text-sm font-semibold tracking-tight ${
                  isSelected ? "text-[#FF9900] dark:text-amber-400" : "text-foreground"
                }`}
              >
                {option.name}
              </span>
              {option.badge && (
                <span
                  className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full uppercase tracking-wider ${
                    option.badge === "DEFAULT"
                      ? "bg-blue-500/10 text-blue-500 border border-blue-500/20"
                      : option.badge === "RECOMMENDED"
                        ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                        : option.badge === "AI READY"
                          ? "bg-purple-500/10 text-purple-500 border border-purple-500/20"
                          : option.badge === "SERVERLESS"
                            ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                            : option.badge === "LOCAL DEV READY"
                              ? "bg-sky-500/10 text-sky-500 border border-sky-500/20"
                              : "bg-muted text-muted-foreground border border-border"
                  }`}
                >
                  {option.badge}
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-muted-foreground line-clamp-2 leading-relaxed">
              {option.description}
            </p>
          </div>
        </div>

        {/* Indicator */}
        <div className="shrink-0 pt-0.5">
          {disabled ? (
            <div className="flex h-5 w-5 items-center justify-center text-muted-foreground/50">
              <AlertCircle size={15} />
            </div>
          ) : isMulti ? (
            <div
              className={`flex h-5 w-5 items-center justify-center rounded border transition-all ${
                isSelected
                  ? "border-[#FF9900] bg-[#FF9900] text-black font-bold shadow-xs"
                  : "border-border/80 bg-background group-hover:border-foreground/40"
              }`}
            >
              {isSelected && <Check size={12} strokeWidth={3.5} />}
            </div>
          ) : (
            <div
              className={`flex h-5 w-5 items-center justify-center rounded-full border transition-all ${
                isSelected
                  ? "border-[#FF9900] bg-[#FF9900]/15"
                  : "border-border/80 bg-background group-hover:border-foreground/40"
              }`}
            >
              {isSelected && <div className="h-2.5 w-2.5 rounded-full bg-[#FF9900]" />}
            </div>
          )}
        </div>
      </div>

      {disabled && disabledReason && (
        <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-amber-500/90 font-medium">
          <AlertCircle size={12} className="shrink-0" />
          <span>{disabledReason}</span>
        </div>
      )}
    </button>
  );
}

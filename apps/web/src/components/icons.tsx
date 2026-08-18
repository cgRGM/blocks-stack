import * as React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export function AwsBlocksIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="9" height="9" rx="2" fill="#FF9900" />
      <rect x="13" y="2" width="9" height="9" rx="2" fill="#FF9900" fillOpacity="0.85" />
      <rect x="2" y="13" width="9" height="9" rx="2" fill="#FF9900" fillOpacity="0.7" />
      <rect x="13" y="13" width="9" height="9" rx="2" fill="#FF9900" fillOpacity="0.5" />
      <path d="M6.5 6.5L17.5 17.5" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function AwsIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M18.8 17.2c-2.4 1.8-5.8 2.8-8.8 2.8-4.2 0-8-1.5-10.9-4-.2-.2 0-.5.3-.3 3.1 1.8 6.9 2.9 10.8 2.9 2.7 0 5.6-.6 8.3-2 .4-.2.7.3.3.6zm1.1-.9c-.3-.4-2-.2-2.9-.1-.3 0-.3-.2-.1-.4 1.4-1 3.6-.7 3.9-.3.3.4-.1 2.6-1.4 3.7-.2.2-.4.1-.3-.2.3-.8.8-2.3.8-2.7zm-6.7-6.2c0-1.7-.8-2.7-2.6-2.7-.9 0-1.7.3-2.3.8-.2.2-.1.4.1.5l.7.5c.2.1.3 0 .5-.1.3-.2.7-.4 1.1-.4.9 0 1.2.5 1.2 1.3v.4c-3.1.2-4.5 1-4.5 2.7 0 1.2.8 2 2.2 2 1.1 0 2-.6 2.4-1.4.3.5.8.9 1.5.9 1 0 1.6-.5 1.9-1.2.1-.2 0-.4-.2-.4l-.8-.3c-.2-.1-.3 0-.4.2-.1.3-.3.5-.6.5-.4 0-.6-.2-.6-.6v-2.8zm-1.3 1.9c0 .7-.5 1.2-1.3 1.2-.6 0-1-.3-1-.8 0-.7.5-1.1 1.8-1.2l.5.8zm-6.6-4.5h-1.6c-.2 0-.4.2-.4.4v7.8c0 .2.2.4.4.4h1.6c.2 0 .4-.2.4-.4V7.9c0-.2-.2-.4-.4-.4z" />
    </svg>
  );
}

export function AuroraIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="#3B48CC" />
      <path
        d="M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4ZM12 6.5C15.04 6.5 17.5 8.96 17.5 12C17.5 15.04 15.04 17.5 12 17.5C8.96 17.5 6.5 15.04 6.5 12C6.5 8.96 8.96 6.5 12 6.5Z"
        fill="#8C4FFF"
      />
      <circle cx="12" cy="12" r="3.5" fill="#527FFF" />
      <path
        d="M12 7V9M12 15V17M7 12H9M15 12H17"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DynamoDbIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M4 6C4 4.34315 7.58172 3 12 3C16.4183 3 20 4.34315 20 6V18C20 19.6569 16.4183 21 12 21C7.58172 21 4 19.6569 4 18V6Z"
        fill="#4053EC"
      />
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="#6979F8" />
      <path
        d="M4 10C4 11.6569 7.58172 13 12 13C16.4183 13 20 11.6569 20 10"
        stroke="#232F3E"
        strokeWidth="1.5"
      />
      <path
        d="M4 14C4 15.6569 7.58172 17 12 17C16.4183 17 20 15.6569 20 14"
        stroke="#232F3E"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function DsqlIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="#2E294E" />
      <circle cx="12" cy="12" r="7" stroke="#00F5D4" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="12" cy="12" r="3" fill="#00F5D4" />
    </svg>
  );
}

export function CognitoIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#DD344C" />
      <circle cx="12" cy="9" r="3.5" fill="#FFFFFF" />
      <path
        d="M6 18C6 15 8.5 13.5 12 13.5C15.5 13.5 18 15 18 18"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function S3Icon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M4 5L12 2L20 5L12 8L4 5Z" fill="#E05243" />
      <path d="M4 5V15L12 18V8L4 5Z" fill="#C43B2E" />
      <path d="M20 5V15L12 18V8L20 5Z" fill="#EB695B" />
      <path d="M4 15L12 18L20 15L12 22L4 15Z" fill="#8C2018" />
    </svg>
  );
}

export function BedrockIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" fill="#147EBA" />
      <path d="M12 6L16 10L12 14L8 10L12 6Z" fill="#45B0EB" />
      <path d="M12 14L16 18L12 22L8 18L12 14Z" fill="#72CAFC" />
      <circle cx="12" cy="10" r="1.5" fill="#FFFFFF" />
      <circle cx="12" cy="18" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

export function LambdaIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#ED7100" />
      <path d="M8 17L11.5 7H13.5L10 17H8Z" fill="#FFFFFF" />
      <path
        d="M11 11L15.5 17H13.5L10 12.5"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SqsIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#E7157B" />
      <rect x="6" y="7" width="12" height="2.5" rx="1" fill="#FFFFFF" />
      <rect x="6" y="11" width="12" height="2.5" rx="1" fill="#FFFFFF" />
      <rect x="6" y="15" width="12" height="2.5" rx="1" fill="#FFFFFF" />
    </svg>
  );
}

export function EventBridgeIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#E7157B" />
      <circle cx="7" cy="12" r="2" fill="#FFFFFF" />
      <circle cx="17" cy="7" r="2" fill="#FFFFFF" />
      <circle cx="17" cy="17" r="2" fill="#FFFFFF" />
      <path d="M7 12L17 7M7 12L17 17" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  );
}

export function ApiGatewayIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#E7157B" />
      <path
        d="M7 8H17M7 12H17M7 16H17M12 6V18"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CdkIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#1A4A87" />
      <path d="M12 5L18 8.5V15.5L12 19L6 15.5V8.5L12 5Z" stroke="#FF9900" strokeWidth="1.8" />
      <path d="M12 5V19M6 8.5L18 15.5M18 8.5L6 15.5" stroke="#FF9900" strokeWidth="1.2" />
    </svg>
  );
}

export function AppRunnerIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#E76D00" />
      <path
        d="M7 12H17M13 8L17 12L13 16"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SesIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#E7157B" />
      <path
        d="M6 8L12 13L18 8M6 8H18V16H6V8Z"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SecretsManagerIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#DD344C" />
      <rect x="7" y="10" width="10" height="8" rx="2" fill="#FFFFFF" />
      <path
        d="M9 10V7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V10"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      <circle cx="12" cy="14" r="1.5" fill="#DD344C" />
    </svg>
  );
}

export function NextjsIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.89 14.86l-6.49-8.4v8.4H8V7.14h1.72l6.28 8.16v-8.16h1.4v9.72h-1.51z" />
    </svg>
  );
}

export function ReactIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <ellipse
        cx="12"
        cy="12"
        rx="4"
        ry="10"
        stroke="#00D8FF"
        strokeWidth="1.5"
        transform="rotate(30 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="4"
        ry="10"
        stroke="#00D8FF"
        strokeWidth="1.5"
        transform="rotate(90 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="4"
        ry="10"
        stroke="#00D8FF"
        strokeWidth="1.5"
        transform="rotate(150 12 12)"
      />
      <circle cx="12" cy="12" r="2" fill="#00D8FF" />
    </svg>
  );
}

export function TanStackIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="#FF4154" />
      <path d="M7 8H17M12 8V16" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1.2" fill="#FFFFFF" />
    </svg>
  );
}

export function NuxtIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M2 18L9 6L16 18H2Z" fill="#00DC82" />
      <path d="M10 18L16 8L22 18H10Z" fill="#00C58E" fillOpacity="0.8" />
    </svg>
  );
}

export function SvelteIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path
        fill="#FF3E00"
        d="M18.8 4.2C16.5 2.4 13.2 2.8 11.4 5.1L7.5 10.1c-1.3 1.7-1 4.1.7 5.4.6.5 1.4.8 2.2.8.6 0 1.2-.2 1.7-.5l3.9-3.1c.3-.2.7-.2.9.1.2.3.2.7-.1.9l-3.9 3.1c-1.1.9-2.5 1.2-3.8.8-1.4-.4-2.5-1.5-3-2.8-.5-1.4-.4-2.9.4-4.2l3.9-5C13.2 1.9 17.6 1.4 20.3 4.1c2.7 2.7 2.7 7.1 0 9.8l-5 6.4c-2.3 2.9-6.5 3.4-9.4 1.1-2.9-2.3-3.4-6.5-1.1-9.4l2.1-2.7c.3-.4.9-.4 1.3-.1.4.3.4.9.1 1.3l-2.1 2.7c-1.6 2-1.2 5 .8 6.6 2 1.6 5 1.2 6.6-.8l5-6.4c1.9-2.1 1.8-5.3-.2-7.2z"
      />
    </svg>
  );
}

export function SolidIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M4 18L12 6L20 18H4Z" fill="#2C4F7C" />
      <path d="M8 18L12 12L16 18H8Z" fill="#446B9E" />
    </svg>
  );
}

export function AstroIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path
        fill="#BC52EE"
        d="M12 2L3 19h4.5l1.5-3.5h6L16.5 19H21L12 2zm-1.5 10.5L12 7.5l1.5 5h-3z"
      />
    </svg>
  );
}

export function ExpoIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M2.5 18.5l9.5-15 9.5 15h-4l-5.5-9-5.5 9h-4z" />
    </svg>
  );
}

export function SwiftIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#F05138" />
      <path
        d="M18 16C15 17.5 11 16 8 13C10.5 14 13.5 13 15 11C12 11.5 9.5 9.5 8 7C11 9 14.5 8.5 17 6C15.5 8 13.5 9.5 11 10C14 10.5 17 12.5 18 16Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function KotlinIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#7F52FF" />
      <path d="M4 20L20 4H4V20Z" fill="#C757BC" />
      <path d="M4 20L12 12L20 20H4Z" fill="#00AFFF" />
    </svg>
  );
}

export function FlutterIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M13.5 2.5L5.5 10.5L8.5 13.5L19.5 2.5H13.5Z" fill="#54C5F8" />
      <path d="M13.5 14.5L8.5 19.5L11.5 22.5L19.5 14.5H13.5Z" fill="#29B6F6" />
      <path d="M8.5 19.5L13.5 14.5L16.5 17.5L11.5 22.5L8.5 19.5Z" fill="#01579B" />
    </svg>
  );
}

export function DrizzleIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#C5F74F" />
      <path d="M8 8L16 16M16 8L8 16" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function PrismaIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <path d="M12 2L4 19L12 22L20 19L12 2Z" fill="#2D3748" stroke="#5A67D8" strokeWidth="1.5" />
      <path d="M12 2L12 22M4 19L12 14L20 19" stroke="#5A67D8" strokeWidth="1" />
    </svg>
  );
}

export function HonoIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#E36002" />
      <path
        d="M12 4C12 4 8 8 8 13C8 16.5 10 19 12 20C14 19 16 16.5 16 13C16 8 12 4 12 4Z"
        fill="#FFD200"
      />
    </svg>
  );
}

export function TrpcIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#2563EB" />
      <path d="M7 8H17M12 8V17" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function NeonIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#00E599" />
      <path
        d="M6 18V6L18 18V6"
        stroke="#000000"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SupabaseIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#1C1C1C" />
      <path d="M13 3L4 14H12L11 21L20 10H12L13 3Z" fill="#3ECF8E" />
    </svg>
  );
}

export function TurborepoIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="#000000" />
      <path
        d="M7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17"
        stroke="url(#turbo-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="turbo-gradient"
          x1="7"
          y1="7"
          x2="17"
          y2="17"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0070F3" />
          <stop offset="1" stopColor="#FF0080" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BiomeIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#60A5FA" />
      <circle cx="12" cy="12" r="5" fill="#1E293B" />
      <path d="M12 9V15M9 12H15" stroke="#60A5FA" strokeWidth="2" />
    </svg>
  );
}

export function BunIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="10" fill="#FBF0DF" />
      <ellipse cx="12" cy="13" rx="7" ry="5.5" fill="#ECCCA2" />
      <circle cx="9.5" cy="12.5" r="1" fill="#000" />
      <circle cx="14.5" cy="12.5" r="1" fill="#000" />
      <path
        d="M11 15C11.5 15.5 12.5 15.5 13 15"
        stroke="#000"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PnpmIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="3" y="3" width="7" height="7" fill="#F69220" />
      <rect x="14" y="3" width="7" height="7" fill="#F69220" />
      <rect x="3" y="14" width="7" height="7" fill="#4ABAFF" />
      <rect x="14" y="14" width="7" height="7" fill="#F69220" />
      <rect x="8.5" y="8.5" width="7" height="7" fill="#F69220" />
    </svg>
  );
}

export function NpmIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="2" y="5" width="20" height="14" fill="#CB3837" />
      <path d="M5 8H19V16H14V11H11V16H5V8Z" fill="#FFFFFF" />
    </svg>
  );
}

export function AgentSkillsIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#8B5CF6" />
      <path d="M12 6L14 10L18 12L14 14L12 18L10 14L6 12L10 10L12 6Z" fill="#FFFFFF" />
    </svg>
  );
}

export function OpenTuiIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect
        x="2"
        y="3"
        width="20"
        height="18"
        rx="3"
        fill="#18181B"
        stroke="#3F3F46"
        strokeWidth="1.5"
      />
      <path
        d="M6 8L10 12L6 16"
        stroke="#22C55E"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="12"
        y1="16"
        x2="17"
        y2="16"
        stroke="#22C55E"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BetterAuthIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        fill="#09090B"
        stroke="#27272A"
        strokeWidth="1.5"
      />
      <path
        d="M12 6V18M7 9L12 6L17 9V14C17 17 12 18 12 18C12 18 7 17 7 14V9Z"
        stroke="#F59E0B"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClerkIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#6C47FF" />
      <path
        d="M8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12V8Z"
        fill="#FFFFFF"
      />
      <circle cx="12" cy="10" r="2.5" fill="#6C47FF" />
    </svg>
  );
}

export function GithubIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

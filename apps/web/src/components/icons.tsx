import * as React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

// AWS Blocks Core Logo
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
      <rect x="2.5" y="2.5" width="8" height="8" rx="2" fill="#FF9900" />
      <rect x="13.5" y="2.5" width="8" height="8" rx="2" fill="#FF9900" fillOpacity="0.8" />
      <rect x="2.5" y="13.5" width="8" height="8" rx="2" fill="#FF9900" fillOpacity="0.6" />
      <rect x="13.5" y="13.5" width="8" height="8" rx="2" fill="#FF9900" fillOpacity="0.4" />
      <path d="M6.5 6.5L17.5 17.5" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// Official AWS Mark
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

// Official Amazon Aurora Architecture Icon
export function AuroraIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="aurora-grad">
          <stop stopColor="#2E27AD" offset="0%" />
          <stop stopColor="#527FFF" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="10" fill="url(#aurora-grad)" />
      <path
        d="M36.2 16h-2v-2h2v-2h2v2h2v2h-2v2h-2v-2zm9.1 8h-2v-2h2v-2h2v2h2v2h-2v1h-2v-1zm-3.4 22.7c-1.5-3.3-4.5-6.3-7.8-7.8 3.3-1.5 6.3-4.5 7.8-7.8 1.5 3.3 4.5 6.3 7.8 7.8-3.3 1.5-6.3 4.5-7.8 7.8zm12.1-8.8c-5.2 0-11.1-5.9-11.1-11.1 0-.6-.5-1-1.1-1s-1 .4-1 1c0 5.2-5.9 11.1-11.1 11.1-.6 0-1 .5-1 1s.4 1 1 1c5.2 0 11.1 5.9 11.1 11.1 0 .6.5 1 1 1s1-.4 1-1c0-5.2 5.9-11.1 11.1-11.1.6 0 1.1-.5 1.1-1.1 0-.5-.5-1-1.1-1zm-31.4-19.9c6.8 0 10.6 2 10.6 3s-3.7 3-10.6 3-10.6-2-10.6-3 3.7-3 10.6-3zm-.3 15.1c-5 0-8.6-1.1-10.2-2.2v-7.1c2.4 1.4 6.5 2.2 10.6 2.2s8.2-.7 10.6-2.2v6.5c-1 1.4-5.2 2.8-11 2.8zm11 12.8c0 1.4-4.1 3.5-10.6 3.5s-10.6-2.1-10.6-3.5v-4.4c2.3 1.4 6 2.2 10.3 2.2 2.9 0 5.8-.4 8-1.2l-.7-1.9c-2 .7-4.6 1.1-7.3 1.1-5.4 0-9.3-1.4-10.3-2.8v-5.7c2.4 1.2 6.1 1.9 10.2 1.9 3.9 0 8.3-.7 10.9-2.3v2.2h2v-14c0-3.3-6.3-5-12.6-5s-12.6 1.7-12.6 5v25c0 3.6 6.5 5.5 12.6 5.5s12.6-1.9 12.6-5.5v-2.9h-2v2.9z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Official Amazon DynamoDB Architecture Icon
export function DynamoDbIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="dynamo-grad">
          <stop stopColor="#2E27AD" offset="0%" />
          <stop stopColor="#527FFF" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="10" fill="url(#dynamo-grad)" />
      <path
        d="M46.6 25.2h-3.6c-.3 0-.6-.2-.8-.4-.2-.3-.2-.6-.1-1l2.5-6.7h-8.9l-4.1 9.1h4.4c.3 0 .6.2.8.4.2.3.2.6.1 1l-3.7 11.1 13.4-13.5zm3.1-.3l-18 18.2c-.2.2-.5.3-.7.3-.2 0-.4-.1-.5-.2-.4-.2-.6-.7-.4-1.2l4.6-13.8h-4.6c-.3 0-.7-.2-.8-.5-.2-.3-.2-.7-.1-1l5-11.1c.2-.4.5-.6.9-.6h11c.3 0 .6.2.8.4.2.3.2.6.1 1l-2.5 6.7h4.6c.4 0 .8.2.9.6.2.4.1.8-.2 1.1zm-8.7 19.3c-2.7 1.9-7.7 2.9-12.5 2.9-4.8 0-9.8-1-12.5-2.9v3.8c0 1.7 4.8 4 12.5 4s12.5-2.7 12.5-4.5v-3.3zm2.1-3.3v6.5c0 3.6-6.5 6.5-14.5 6.5s-14.5-2.9-14.5-6.5v-32.3c0-4 7.5-6.2 14.5-6.2 3.9 0 7.7.6 10.4 1.8l-.8 1.9c-2.4-1-5.9-1.6-9.6-1.6-7.8 0-12.5 2.4-12.5 4.1s4.8 4.1 12.5 4.1c.2 0 .4 0 .6 0l.1 2c-.2 0-.5 0-.7 0-4.8 0-9.8-1-12.5-2.9v4.4c0 .5.5 1.1 1.4 1.7 2 1.3 5.5 2.2 9.5 2.4l-.1 2c-4.1-.2-7.8-1.1-10.1-2.4-.3.3-.7 1.1-.7 1.5 0 1.7 4.8 4.1 12.5 4.1.7 0 1.5 0 2.2-.1l.1 2c-.7.1-1.5.1-2.3.1-4.8 0-9.8-1-12.5-2.9v3.7c0 .5.5 1.2 1.4 1.7 2.3 1.5 6.5 2.4 11.2 2.4h.3v2h-.3c-4.8 0-9.9-1-12.5-2.5-.3.3 0 1 0 1.5 0 1.7 4.8 4.1 12.5 4.1s12.5-2.4 12.5-4.1c0-.6-.6-1.2-1.1-1.5-.4.2-.9.5-1.4.7l-.8-1.9c.5-.2 1-.5 1.4-.7 1.1-.7 1.8-1.8 1.8-2.2h2c0 .9-.6 1.9-1.4 2.8 1.2 1 1.5 2.1 1.5 2.8z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Official Amazon S3 Architecture Icon
export function S3Icon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="s3-grad">
          <stop stopColor="#1B660F" offset="0%" />
          <stop stopColor="#6CAE3E" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="10" fill="url(#s3-grad)" />
      <g transform="translate(8, 8)" fill="#FFFFFF">
        <path d="M39.8 25.9l.2-1.8c2.2 1.2 2.8 2 3 2.3-.3.1-1.2.1-3.2-.5zm-17.3-12.9c-10.4 0-17.1-2.5-17.5-4.3v-.2c.3-1.1 6.1-4.5 17.5-4.5s17.1 3.4 17.5 4.5v.1c-.3 1.8-7.1 4.4-17.5 4.4zm15.3 12.4c-4.8-1.6-10.9-4.4-13.2-5.5-.1-1.1-1-2-2.1-2-1.2 0-2.1.9-2.1 2.1 0 1.2.9 2.1 2.1 2.1.5 0 .9-.2 1.2-.4 2.4 1.1 8.9 4.1 13.8 5.7l-1.7 13.3c-.3 1.6-4.9 3.3-13.3 3.3s-13.1-1.6-13.3-3.3l-3.7-28.9c3.5 2.1 10.3 3.2 17.1 3.2s13.6-1.1 17.1-3.2l-1.8 13.6zm4.2-16.9c0-3.1-8.3-6.5-19.5-6.5s-19.5 3.4-19.5 6.5v.5l4.2 32c.7 4.5 11 5 15.3 5s14.6-.5 15.3-5l1.7-13.1c1.3.3 2.3.5 3.1.5 1 0 1.7-.3 2.1-.8.4-.4.5-.9.4-1.5-.2-1.2-1.7-2.5-4.7-4.2l-.1-.1 1.7-12.9v-.5z" />
      </g>
    </svg>
  );
}

// Official Amazon Cognito Architecture Icon
export function CognitoIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="cognito-grad">
          <stop stopColor="#BD0816" offset="0%" />
          <stop stopColor="#FF5252" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="10" fill="url(#cognito-grad)" />
      <path
        d="M48.4 21v-5.3c0-.9-.6-1.7-1.3-1.7H13.4c-.7 0-1.4.8-1.4 1.7V21h15.2v-4c0-.6.5-1 1-1h17.2c.6 0 1 .4 1 1v4h2zm-4-3h-15.2v12.4c1-1.8 2.6-3.2 4.5-4-.6-.8-.9-1.7-.9-2.7 0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 1.1-.4 2.1-1.1 2.9 1.4.6 2.7 1.6 3.6 2.8V18zm-4.5 5.7c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5.5 1.7 1.3 2.2c.8.4 1.7.4 2.4 0 .8-.5 1.3-1.3 1.3-2.2zm8.5 9.3v-10h-2v7h-1.7l-1.6 1c-.8-1.4-2.2-2.4-3.8-2.9-1.4.6-3 .6-4.3 0-2.7.8-4.5 3.2-4.7 5.9h6v2h-8.1c-.6 0-1-.5-1-1v-12H12v14.3c0 .9.6 1.7 1.4 1.7h19.8v2H13.4c-1.9 0-3.4-1.7-3.4-3.7V15.7c0-2 1.5-3.7 3.4-3.7h33.7c1.9 0 3.4 1.7 3.4 3.7v17.3h-2.1zm-5.1 14l5.6-5.6-1.4-1.4-4.9 4.9-2.1-2.1-1.4 1.4 2.8 2.8c.2.2.5.3.7.3.3 0 .6-.1.7-.3zm2-11c2.5.3 4.7 1.8 5.8 4.1.7 1.3 1 2.8.8 4.3-.2 1.5-.8 2.9-1.8 4-.7.8-1.6 1.5-2.5 1.9-1.3.6-2.7.8-4.1.7-1.4-.2-2.7-.7-3.8-1.6-2.1-1.6-3.1-4.2-2.8-6.8.3-2.5 1.8-4.7 4.1-5.8 1.1-.5 2.2-.8 3.4-.8.4 0 .7 0 1.1.1zm3.2 16.1c1.2-.6 2.3-1.4 3.2-2.4 1.2-1.4 2-3.1 2.2-5 .2-1.9-.1-3.8-1-5.5-1.5-2.8-4.3-4.7-7.4-5.1-1.9-.2-3.8.1-5.5 1-2.8 1.5-4.8 4.2-5.1 7.4-.4 3.3.9 6.6 3.6 8.6 1.4 1.1 3 1.8 4.8 2 1.8.3 3.6 0 5.2-.6z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Official AWS Lambda Architecture Icon
export function LambdaIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="lambda-grad">
          <stop stopColor="#C8511B" offset="0%" />
          <stop stopColor="#FF9900" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="10" fill="url(#lambda-grad)" />
      <path
        d="M22.7 52h-9.1l10.3-21.6 4.5 9.5-5.7 12.1zm2-24.3c-.2-.3-.5-.6-.9-.6h-.1c-.4 0-.7.2-.9.6l-11.8 24.9c-.1.3-.1.7.1 1 .2.3.5.5.8.5h11.3c.4 0 .7-.2.9-.6l6.2-13.1c.1-.3.1-.6 0-.9l-5.6-11.8zm26.3 24.3H42L27 19.6c-.2-.4-.5-.6-.9-.6h-6v-7h11.7l15 32.4c.2.4.5.6.9.6h3.3v7zm1-9h-3.7l-15-32.4c-.2-.4-.5-.6-.9-.6H19.1c-.5 0-1 .4-1 1v9c0 .3.1.5.3.7.2.2.4.3.7.3h6.3l15 32.4c.2.4.5.6.9.6h10.7c.6 0 1-.5 1-1v-9c0-.6-.5-1-1-1z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Official Amazon EventBridge Architecture Icon
export function EventBridgeIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="eb-grad">
          <stop stopColor="#B0084D" offset="0%" />
          <stop stopColor="#FF4F8B" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="10" fill="url(#eb-grad)" />
      <path
        d="M43.3 52c-1.6 0-2.9-1.3-2.9-2.8 0-1.6 1.3-2.8 2.9-2.8s2.8 1.3 2.8 2.8c0 1.6-1.2 2.8-2.8 2.8zm-6.7-13h-8.1l-4.1-7 4.1-7h8.1l4.1 7-4.1 7zm-13.8-21.4c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8 1.6 0 2.8 1.3 2.8 2.8 0 1.6-1.2 2.8-2.8 2.8zm20.5 26.8c-.5 0-1.1.1-1.5.3l-3.1-5.2 4-6.9c.2-.3.2-.7 0-1l-4.7-8c-.2-.3-.5-.5-.9-.5h-8.3l-2.8-4.7c1-.9 1.6-2.1 1.6-3.5 0-2.7-2.2-4.8-4.9-4.8-2.7 0-4.9 2.2-4.9 4.8 0 2.7 2.2 4.8 4.9 4.8.5 0 1.1-.1 1.5-.3l2.6 4.3-4.6 7.8c-.2.3-.2.7 0 1l4.7 8c.2.3.5.5.9.5h9.3l2.8 4.7c-1 .9-1.6 2.1-1.6 3.5 0 2.7 2.2 4.8 4.9 4.8 2.7 0 4.9-2.2 4.9-4.8 0-2.7-2.2-4.8-4.9-4.8zm4.7-18.8c-1.6 0-2.8-1.3-2.8-2.8 0-1.6 1.3-2.8 2.8-2.8s2.8 1.3 2.8 2.8c0 1.5-1.2 2.8-2.8 2.8zm3-4.7l2.6 4.5-4.2 7.1 1.7 1 4.1-7.1c.2-.3.2-.7 0-1l-2.9-4.5z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Official Amazon SQS Architecture Icon
export function SqsIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="sqs-grad">
          <stop stopColor="#B0084D" offset="0%" />
          <stop stopColor="#FF4F8B" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="10" fill="url(#sqs-grad)" />
      <path
        d="M23.8 35.5l2-2.9c.2-.3.2-.8 0-1.1l-2-3-1.7 1.1 1 1.4h-3.1v2h3.1l-1 1.4 1.7 1.1zm18 0l2-3c.2-.3.2-.8 0-1.1l-2-3-1.7 1.1 1 1.4h-3.1v2h3.1l-1 1.4 1.7 1.1zm-13.3-3.5c0 1.5-.2 2.9-.7 4.2 1.3-.4 2.8-.7 4.2-.7s2.9.2 4.2.7c-.4-1.3-.7-2.7-.7-4.2s.2-2.9.7-4.2c-2.6.9-5.7.9-8.4 0 .5 1.3.7 2.7.7 4.2zm-4.2 7.6c-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7 1.4-1.4 2.2-3.7 2.2-6.2s-.8-4.9-2.2-6.2c-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7.4-.4 1-.4 1.4 0 2.9 2.9 9.7 2.9 12.6 0 .4-.4 1-.4 1.4 0 .2.2.3.4.3.7 0 .3-.1.5-.3.7-1.4 1.4-2.2 3.7-2.2 6.2s.8 4.9 2.2 6.2c.2.2.3.4.3.7 0 .3-.1.5-.3.7-.2.2-.5.3-.7.3s-.5-.1-.7-.3c-2.9-2.9-9.7-2.9-12.6 0-.4.4-1.1.4-1.4 0zm27-9.3c-.5-.5-1.1-.7-1.8-.7s-1.3.3-1.8.7c-.5.5-.7 1.1-.7 1.8s.3 1.3.7 1.7c1 1 2.5 1 3.5 0 1-1 1-2.5.1-3.5zm-35 0c-.5-.5-1.1-.7-1.8-.7s-1.3.3-1.8.7c-1 1-1 2.5 0 3.5 1 .9 2.6.9 3.5 0 1-1 1-2.5.1-3.5zm27.1 13c-6.3 6.3-16.6 6.3-23 0-1.6-1.6-2.7-3.3-3.5-5.7l-1.9.6c1 2.8 2.1 4.6 4 6.5 3.6 3.5 8.2 5.3 12.9 5.3s9.3-1.8 12.9-5.3c2-2 3.2-3.9 4.1-6.5l-1.9-.6c-.8 2.2-1.9 4-3.6 5.7z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Official Amazon SES Architecture Icon
export function SesIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="ses-grad">
          <stop stopColor="#B0084D" offset="0%" />
          <stop stopColor="#FF4F8B" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="10" fill="url(#ses-grad)" />
      <path
        d="M48 20H16c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h32c1.1 0 2-.9 2-2V22c0-1.1-.9-2-2-2zm-1.4 4L32 33.8 17.4 24h29.2zM16 42V26.2l15.4 10.3c.3.2.7.3 1.1.3s.8-.1 1.1-.3L48 26.2V42H16z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// Official Amazon API Gateway Architecture Icon
export function ApiGatewayIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="apigw-grad">
          <stop stopColor="#B0084D" offset="0%" />
          <stop stopColor="#FF4F8B" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="10" fill="url(#apigw-grad)" />
      <g transform="translate(14, 14)" fill="#FFFFFF">
        <path d="M18 2h-12c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zm-12 4h12v24h-12v-24zm22 10h8v4h-8v-4zm0 8h8v4h-8v-4zm0-16h8v4h-8v-4z" />
      </g>
    </svg>
  );
}

// Official AWS Secrets Manager Architecture Icon
export function SecretsManagerIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="sec-grad">
          <stop stopColor="#BD0816" offset="0%" />
          <stop stopColor="#FF5252" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="10" fill="url(#sec-grad)" />
      <g transform="translate(16, 14)" fill="#FFFFFF">
        <path d="M16 0C7.2 0 0 7.2 0 16c0 6.5 3.9 12.1 9.5 14.6l-7.1 7.1c-.6.6-.6 1.5 0 2.1l2.8 2.8c.6.6 1.5.6 2.1 0l2.1-2.1 2.1 2.1c.6.6 1.5.6 2.1 0l2.8-2.8c.6-.6.6-1.5 0-2.1l-2.1-2.1 2.1-2.1c5.6 2.3 12.1.3 14.6-5.3C33.6 23.2 32 16 32 16 32 7.2 24.8 0 16 0zm0 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" />
      </g>
    </svg>
  );
}

// Official AWS App Runner Architecture Icon
export function AppRunnerIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="apprunner-grad">
          <stop stopColor="#C8511B" offset="0%" />
          <stop stopColor="#FF9900" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="10" fill="url(#apprunner-grad)" />
      <g transform="translate(12, 12)" fill="#FFFFFF">
        <path d="M20 4L4 12v16l16 8 16-8V12L20 4zm0 4.5l11.4 5.7-11.4 5.7-11.4-5.7L20 8.5zM6.5 16.2L18 22v14l-11.5-5.8v-14zm27 14L22 36V22l11.5-5.8v14z" />
      </g>
    </svg>
  );
}

// Official AWS CloudFormation / CDK Architecture Icon
export function CdkIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="cdk-grad">
          <stop stopColor="#2E27AD" offset="0%" />
          <stop stopColor="#527FFF" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="10" fill="url(#cdk-grad)" />
      <g transform="translate(12, 12)" fill="#FFFFFF">
        <path d="M20 2L4 10.5v19L20 38l16-8.5v-19L20 2zm0 4.8l11.6 6.2L20 19.2 8.4 13 20 6.8zM6.5 15.6L18 21.8v12.4l-11.5-6.1V15.6zm27 12.4L22 34.2V21.8l11.5-6.2v12.4z" />
      </g>
    </svg>
  );
}

// Official AWS Amplify Architecture Icon
export function AmplifyIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="amp-grad">
          <stop stopColor="#D62400" offset="0%" />
          <stop stopColor="#FF9900" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="10" fill="url(#amp-grad)" />
      <g transform="translate(12, 14)" fill="#FFFFFF">
        <path d="M19.8 4L4 32h7.8l5.2-9.3 4.2 7.4 3.7-6.5-6.1-10.8L19.8 4zm5.8 11.2l-3.3 5.8 8.8 15h7.9l-13.4-20.8zm-11.1 19.8l2.9-5.1 2.9 5.1h-5.8z" />
      </g>
    </svg>
  );
}

// Official Amazon Bedrock AI Architecture Icon
export function BedrockIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="bedrock-grad">
          <stop stopColor="#005B60" offset="0%" />
          <stop stopColor="#00A4A6" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="10" fill="url(#bedrock-grad)" />
      <g transform="translate(14, 14)" fill="#FFFFFF">
        <circle cx="18" cy="18" r="4" />
        <circle cx="6" cy="10" r="3" />
        <circle cx="30" cy="10" r="3" />
        <circle cx="6" cy="26" r="3" />
        <circle cx="30" cy="26" r="3" />
        <line x1="6" y1="10" x2="18" y2="18" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="30" y1="10" x2="18" y2="18" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="6" y1="26" x2="18" y2="18" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="30" y1="26" x2="18" y2="18" stroke="#FFFFFF" strokeWidth="2" />
      </g>
    </svg>
  );
}

// Amazon Aurora DSQL Icon
export function DsqlIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="dsql-grad">
          <stop stopColor="#1E1B4B" offset="0%" />
          <stop stopColor="#4338CA" offset="100%" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="10" fill="url(#dsql-grad)" />
      <circle cx="32" cy="32" r="16" stroke="#00F5D4" strokeWidth="2.5" strokeDasharray="4 4" />
      <circle cx="32" cy="32" r="7" fill="#00F5D4" />
      <circle cx="20" cy="24" r="3" fill="#FFFFFF" />
      <circle cx="44" cy="24" r="3" fill="#FFFFFF" />
      <circle cx="32" cy="48" r="3" fill="#FFFFFF" />
    </svg>
  );
}

// Next.js Icon
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

// React Icon
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

// TanStack Icon
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

// Nuxt Icon
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

// Svelte Icon
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

// Solid Icon
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

// Astro Icon
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

// Expo Icon
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

// Swift Icon
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

// Kotlin Icon
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

// Flutter Icon
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

// Drizzle ORM Icon
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

// Prisma ORM Icon
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

// Hono Icon
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

// tRPC Icon
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

// Neon Postgres Icon
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

// Supabase Icon
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

// Turborepo Icon
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

// Biome Icon
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

// Bun Icon
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

// pnpm Icon
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

// npm Icon
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

// AI Agent Skills Icon
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

// Better-Auth Icon
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

// Clerk Icon
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

// GitHub Icon
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

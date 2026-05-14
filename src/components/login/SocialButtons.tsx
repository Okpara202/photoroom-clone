import Link from "next/link";

export function SocialButtons() {
  return (
    <div className="flex flex-col gap-3">
      <Link
        href="/create"
        className="inline-flex items-center justify-center gap-3 w-full bg-neutral-900 hover:bg-neutral-800 text-white text-[15px] font-semibold py-[14px] rounded-[12px] transition-colors"
      >
        <GoogleIcon />
        Continue with Google
      </Link>
      <Link
        href="/create"
        className="inline-flex items-center justify-center gap-3 w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-[15px] font-semibold py-[14px] rounded-[12px] transition-colors"
      >
        <FacebookIcon />
        Continue with Facebook
      </Link>
      <Link
        href="/create"
        className="inline-flex items-center justify-center gap-3 w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-[15px] font-semibold py-[14px] rounded-[12px] transition-colors"
      >
        <AppleIcon />
        Continue with Apple
      </Link>

      <div className="my-2 flex items-center gap-4 text-[12px] uppercase tracking-wider text-neutral-400">
        <div className="h-px flex-1 bg-neutral-200" />
        or
        <div className="h-px flex-1 bg-neutral-200" />
      </div>

      <Link
        href="/create"
        className="inline-flex items-center justify-center gap-3 w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-[15px] font-semibold py-[14px] rounded-[12px] transition-colors"
      >
        <MailIcon />
        Continue with personal or work email
      </Link>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
      <path d="M17.64 9.2c0-.64-.06-1.25-.17-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.71-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4" />
      <path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.94v2.32A9 9 0 0 0 9 18z" fill="#34A853" />
      <path d="M3.97 10.72A5.41 5.41 0 0 1 3.68 9c0-.6.1-1.18.29-1.72V4.96H.94A9 9 0 0 0 0 9c0 1.45.35 2.83.94 4.04l3.03-2.32z" fill="#FBBC05" />
      <path d="M9 3.58c1.32 0 2.5.45 3.44 1.34l2.58-2.58A9 9 0 0 0 9 0 9 9 0 0 0 .94 4.96l3.03 2.32C4.68 5.16 6.66 3.58 9 3.58z" fill="#EA4335" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2" aria-hidden>
      <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.6 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.4v7C18.4 21.1 22 17 22 12z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.05 12.04c-.02-2.32 1.9-3.43 1.98-3.49-1.08-1.58-2.76-1.8-3.36-1.82-1.42-.14-2.78.84-3.5.84-.74 0-1.84-.82-3.04-.8-1.56.02-3 .91-3.81 2.3-1.63 2.81-.42 6.97 1.16 9.25.78 1.12 1.69 2.37 2.89 2.32 1.16-.05 1.6-.75 3.01-.75 1.4 0 1.8.75 3.04.72 1.26-.02 2.05-1.13 2.81-2.26.89-1.3 1.25-2.56 1.27-2.63-.03-.01-2.43-.93-2.45-3.68zM14.95 5.2c.63-.78 1.06-1.85.94-2.93-.91.04-2.02.62-2.67 1.39-.58.68-1.1 1.79-.96 2.84 1.02.08 2.06-.52 2.69-1.3z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

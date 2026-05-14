import Link from "next/link";
import { LoginSidebar } from "@/components/login/LoginSidebar";
import { SocialButtons } from "@/components/login/SocialButtons";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-white">
      <LoginSidebar />

      <main className="flex-1 grid place-items-center px-6 py-12 relative">
        <div className="w-full max-w-[440px]">
          <h1
            className="text-neutral-900 text-center"
            style={{
              fontSize: "40px",
              fontWeight: 700,
              lineHeight: "110%",
              letterSpacing: "-0.018em",
            }}
          >
            Create and edit your designs for free
          </h1>
          <p className="mt-4 text-center text-[15px] text-neutral-600 leading-[150%]">
            Log in or sign up in seconds to continue using Photoroom
          </p>

          <div className="mt-8">
            <SocialButtons />
          </div>

          <div className="mt-6 text-center">
            <Link
              href="#"
              className="text-[14px] font-semibold text-[#410cd9] hover:underline"
            >
              How to sign in?
            </Link>
          </div>

          <p className="mt-10 text-center text-[12px] text-neutral-600 leading-[160%]">
            By signing up, you agree to our{" "}
            <Link href="#" className="text-[#410cd9] hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-[#410cd9] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <button
          aria-label="Help"
          className="fixed bottom-5 right-5 w-10 h-10 rounded-full bg-white border border-neutral-200 shadow-md grid place-items-center hover:bg-neutral-50"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-neutral-700"
            aria-hidden
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2-3 4" />
            <path d="M12 17h.01" />
          </svg>
        </button>
      </main>
    </div>
  );
}

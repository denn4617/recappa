import { LoginForm } from "@/components/AuthModal/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="h-screen flex bg-[var(--background)] text-[var(--foreground)]">
      {/* Left: Login Form (60%) */}
      <div className="w-full lg:w-[60%] bg-[#0e062b] flex flex-col items-center justify-between py-24">
        <div className="flex">
          <Link href="/">
            <img src="/logo.svg" alt="Recappa logo" className="h-6 w-auto" />
          </Link>
          <span className="logo-text">recappa</span>
        </div>
        <div className="w-full max-w-md space-y-6 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 bg-[var(--background)] text-[var(--foreground)] transition-colors">
          <h1 className="text-2xl font-bold text-center">Log In to Recappa</h1>
          <LoginForm />
        </div>
      </div>

      {/* Right: Placeholder Content (40%) */}
      <div className="w-[40%] relative bg-gray-950 bg-[url('/login-grid-background.png')] bg-cover bg-center hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950" />
        <div className="relative z-10 flex items-center justify-center h-full text-gray-400">
          <p className="text-lg">Right Side Content</p>
        </div>
      </div>
    </div>
  );
}

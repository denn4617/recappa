import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] px-4">
      <div className="w-full max-w-md space-y-6 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 bg-[var(--background)] text-[var(--foreground)] transition-colors">
        <h1 className="text-2xl font-bold text-center">Log In to Recappa</h1>
        <LoginForm />
      </div>
    </div>
  );
}

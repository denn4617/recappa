'use client';

import { useState } from 'react';

type Props = {
  onSwitch: (mode: 'register' | 'forgot') => void;
};

export function LoginForm({ onSwitch }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login with', email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md px-3 py-2 border border-gray-300 dark:border-gray-700 bg-[var(--background)] text-[var(--foreground)] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md px-3 py-2 border border-gray-300 dark:border-gray-700 bg-[var(--background)] text-[var(--foreground)] transition-colors"
        />
      </div>

      <div className="flex justify-end text-sm pb-2">
        <button
          type="button"
          onClick={() => onSwitch('forgot')}
          className="text-[var(--color-primary)] hover:underline"
        >
          Forgot password?
        </button>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:opacity-90 transition"
      >
        Log In
      </button>

      <div className="text-sm text-center">
        Don’t have an account?{' '}
        <button
          type="button"
          onClick={() => onSwitch('register')}
          className="text-[var(--color-secondary)] hover:underline"
        >
          Register →
        </button>
      </div>
    </form>
  );
}

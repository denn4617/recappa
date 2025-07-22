'use client';

import { useState } from 'react';

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Send reset link to:', email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email address
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

      <button
        type="submit"
        className="w-full py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:opacity-90 transition"
      >
        Send Reset Link
      </button>
    </form>
  );
}

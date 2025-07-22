'use client';

import { useState } from 'react';

type Props = {
  onSwitch: (mode: 'login') => void;
};

export function RegisterForm({ onSwitch }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register with', name, email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md px-3 py-2 border border-gray-300 dark:border-gray-700 bg-[var(--background)] text-[var(--foreground)] transition-colors"
        />
      </div>

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

      <button
        type="submit"
        className="w-full py-2 px-4 bg-[var(--color-primary)] text-white rounded-md hover:opacity-90 transition"
      >
        Register
      </button>

      <div className="text-sm text-center">
        Already have an account?{' '}
        <button
          type="button"
          onClick={() => onSwitch('login')}
          className="text-[var(--color-secondary)] hover:underline"
        >
          Log in →
        </button>
      </div>
    </form>
  );
}

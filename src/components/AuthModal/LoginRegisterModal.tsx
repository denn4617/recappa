'use client';

import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { ForgotPasswordForm } from './ForgotPasswordForm';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function LoginRegisterModal() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login');

  const close = () => {
    setOpen(false);
    setMode('login');
  };

  const renderTitle = {
    login: 'Log In to Recappa',
    register: 'Create an Account',
    forgot: 'Reset Your Password',
  }[mode];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-full border border-transparent bg-[var(--color-secondary)] text-white hover:opacity-90 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
      >
        Log In to Recappa
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-[var(--background)] text-[var(--foreground)] p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 transition-colors">
            <button
              onClick={close}
              className="absolute top-3 right-3 text-[var(--foreground)] hover:opacity-70"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <h2 className="text-xl font-bold mb-4 text-center">{renderTitle}</h2>

            <div className="relative min-h-[360px]">
              <AnimatePresence mode="wait" initial={false}>
                {mode === 'login' && (
                  <motion.div key="login" {...motionFade}>
                    <LoginForm onSwitch={setMode} />
                  </motion.div>
                )}
                {mode === 'register' && (
                  <motion.div key="register" {...motionFade}>
                    <RegisterForm onSwitch={setMode} />
                  </motion.div>
                )}
                {mode === 'forgot' && (
                  <motion.div key="forgot" {...motionFade}>
                    <ForgotPasswordForm />
                    <div className="text-sm text-center mt-4">
                      Back to{' '}
                      <button
                        type="button"
                        onClick={() => setMode('login')}
                        className="text-[var(--color-primary)] hover:underline"
                      >
                        Log In
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const motionFade = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.2 },
};

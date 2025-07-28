// src/components/Sidebar/Notch.tsx
const Notch = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
  >
    <path
      d="M40,0c0,15.485904,0,14.992623-40,14.992623v10.014754c40,0,40,0,40,14.992623v-40Z"
      fill="currentColor"
    />
  </svg>
);

export default Notch;

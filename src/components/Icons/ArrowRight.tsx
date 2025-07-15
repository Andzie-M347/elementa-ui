import { FC } from 'react';

export const ArrowRight: FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

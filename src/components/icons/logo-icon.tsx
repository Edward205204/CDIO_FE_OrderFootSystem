const LogoIcon = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 64 64'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={className}
  >
    <path d='M4 48h56' />
    <path d='M8 48c0-17.673 14.327-32 32-32s32 14.327 32 32' />
    <path d='M32 16v-4' />
    <circle cx='32' cy='8' r='2' fill='currentColor' />
    <path d='M16 48v4a4 4 0 004 4h24a4 4 0 004-4v-4' />
  </svg>
);

export default LogoIcon;

export default function LogoIcon({ container = 'w-6 h-6' }) {
  return (
    <div className={container}>
      <img src='./mainlogo.png' alt='light logo' className='w-full h-full object-cover rounded-full dark:hidden ' />
      <img src='/dartlogo.png' className='hidden dark:block' alt='dark-logo' />
    </div>
  );
}

import { Link } from 'react-router';
import { ModeToggle } from '../mode-toggle';
import LogoIcon from './logo-icon';

export default function LoginRegisterHeader() {
  return (
    <div className='border-b border-b-slate-200 dark:border-b-slate-700 '>
      <div className='container'>
        <div className='flex items-center justify-between px-1 py-6'>
          <Link to={'/'} className='flex items-center gap-4 '>
            <LogoIcon container='w-20 h-20' />
            <div className='capitalize text-3xl font-bold ml-12'>Đăng Nhập</div>
          </Link>

          <div className='flex items-center gap-4'>
            <ModeToggle />
            <div className='ml-4'>Về chúng tôi</div>
          </div>
        </div>
      </div>
    </div>
  );
}

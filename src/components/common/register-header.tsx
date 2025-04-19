import { Link, useMatch } from 'react-router';
import { ModeToggle } from '../mode-toggle';
import LogoIcon from './logo-icon';
import { PATH } from '@/constants/path';

export default function LoginRegisterHeader() {
  const isLogin = useMatch(PATH.login);
  console.log(isLogin);
  return (
    <div className='border-b border-b-slate-200 dark:border-b-slate-700 '>
      <div className='container'>
        <div className='flex items-center justify-between px-1 py-6'>
          <div className='flex items-center gap-4 '>
            <Link to={'/'}>
              <LogoIcon container='w-20 h-20' />
            </Link>
            <div className='capitalize text-3xl font-bold ml-12'>{isLogin ? 'Đăng nhập' : 'Đăng ký'}</div>
          </div>

          <div className='flex items-center gap-4'>
            <ModeToggle />
            <div className='ml-4'>Về chúng tôi</div>
          </div>
        </div>
      </div>
    </div>
  );
}

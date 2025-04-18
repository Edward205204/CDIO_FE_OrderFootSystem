import { Link, useNavigate } from 'react-router';
import { Button } from '../ui/button';
import { ModeToggle } from '../mode-toggle';
import LogoIcon from './logo-icon';
import { PATH } from '@/constants/path';

export default function Header() {
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate(PATH.login);
  };

  return (
    <div className='border-b border-b-slate-200 dark:border-b-slate-700 '>
      <div className='container'>
        <div className='flex item-center justify-between px-1 py-6'>
          <Link to={'/'}>
            <LogoIcon container='w-18 h-18' />
          </Link>

          <nav className='flex items-center text-base '>
            <ul className='flex items-center gap-4 font-sans'>
              {[
                { label: 'Trang chủ', path: '/' },
                { label: 'Về chúng tôi', path: '/ve-chung-toi' },
                { label: 'Thực đơn', path: '/thuc-don' },
                { label: 'Liên hệ', path: '/lien-he' }
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link to={path}>
                    <div className='relative px-3 py-2 flex items-center group'>
                      <span className='relative z-10 inline-block'>
                        {/* Lớp chữ mặc định */}
                        <span className='block transition-opacity duration-300 ease-in-out group-hover:opacity-0 text-foreground'>
                          {label}
                        </span>
                        {/* Lớp chữ gradient */}
                        <span className='absolute left-0 top-0 block bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100'>
                          {label}
                        </span>

                        {/* underline */}
                        <span className='absolute left-0 -bottom-0.5 h-px w-full scale-x-0 origin-left bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 transition-transform duration-300 ease-in-out group-hover:scale-x-100'></span>
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className='flex items-center gap-4'>
            <ModeToggle />
            <div className='flex items-center gap-4'>
              <Button className='cursor-pointer hover:via-purple-500 hover:to-indigo-500' onClick={handleNavigateLogin}>
                Login
              </Button>
              <Link
                to={PATH.register}
                className='px-4 py-2 rounded-xl bg-background  transition-all duration-300 bg-clip-text text-transparent cursor-pointer bg-gradient-to-r from-foreground to-foreground hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500'
              >
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router';
import LogoIcon from './logo-icon';
import { PATH } from '@/constants/path';
import Facebook from '../icons/facebook/facebook';

export default function Footer() {
  return (
    <div className='bg-background py-18 border-t border-t-slate-200 dark:border-t-slate-700 pb-18'>
      <div className='container'>
        <div className='grid grid-cols-12 lg:flex-row justify-between items-start gap-8'>
          <div className='col-span-4'>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-2'>
                <Link to='/'>
                  <LogoIcon container='w-18 h-18' />
                </Link>
                <span className='text-2xl font-semibold ml-4'>FoodieHub</span>
              </div>
              <p className='text-sm '>
                Chúng tôi cung cấp dịch vụ giao hàng tận nơi từ những nhà hàng nổi tiếng, mang đến cho bạn những trải
                nghiệm ẩm thực tuyệt vời ngay tại nhà.
              </p>
            </div>
          </div>

          <div className='col-span-2'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-lg font-medium '>Liên kết nhanh</h3>
              <ul className='flex flex-col gap-2'>
                {[
                  { label: 'Trang chủ', path: PATH.home },
                  { label: 'Về chúng tôi', path: PATH.about },
                  { label: 'Thực đơn', path: PATH.menu },
                  { label: 'Liên hệ', path: PATH.contact }
                ].map(({ label, path }) => (
                  <li key={path}>
                    <Link to={path} className='hover:underline'>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='col-span-2'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-lg font-medium '>Kết nối với chúng tôi</h3>
              <div className='flex items-center gap-4'>
                <Link to='https://www.facebook.com/' className='flex items-center gap-2 '>
                  <Facebook />
                  Facebook
                </Link>
                <Link to='https://www.facebook.com/' className='flex items-center gap-2 '>
                  <Facebook />
                  Instagram
                </Link>
              </div>
            </div>
          </div>

          {/* Thông tin liên hệ */}
          <div className='col-span-4'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-lg font-medium '>Thông tin liên hệ</h3>
              <ul className='text-sm '>
                <li>
                  <span className='block'>Địa chỉ: 123 Đường Ẩm thực, Quận 1, TP. Hồ Chí Minh</span>
                </li>
                <li>
                  <span className='block'>Điện thoại: +84 123 456 789</span>
                </li>
                <li>
                  <span className='block'>Email: contact@foodiehub.vn</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dòng chữ bản quyền */}
        <div className='flex justify-center items-center mt-14 '>
          <p className='text-sm '>&copy; {new Date().getFullYear()} FoodieHub. Tất cả quyền lợi được bảo lưu.</p>
        </div>
      </div>
    </div>
  );
}

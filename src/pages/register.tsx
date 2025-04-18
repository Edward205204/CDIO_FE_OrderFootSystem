import { RegisterForm } from '@/components/register-custom-form';
import anh_minh_hoa_login from '@/assets/anh_minh_hoa_login.jpg';

export default function Register() {
  return (
    <div>
      <div className='container grid grid-cols-2 gap-6'>
        <div className='col-span-1 '>
          <RegisterForm className='px-28 py-12' />
        </div>
        <div className='con-span-1 '>
          <img src={anh_minh_hoa_login} alt='Food' className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  );
}

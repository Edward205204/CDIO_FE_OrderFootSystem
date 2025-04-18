import RegisterHeader from '@/components/common/register-header';
import Footer from '../components/common/footer';

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  );
}

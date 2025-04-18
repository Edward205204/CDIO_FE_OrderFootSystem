import Footer from '@/components/common/footer';
import Header from '@/components/common/header';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

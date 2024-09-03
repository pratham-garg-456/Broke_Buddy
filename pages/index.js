import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Layout from '@/app/layout';
import HomePage from '@/app/components/HomePage';
export default function Home() {
  return <Layout header={<Navbar />} main={<HomePage />} footer={<Footer />}></Layout>;
}

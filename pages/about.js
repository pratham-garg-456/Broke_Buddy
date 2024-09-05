import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import AboutPage from '@/app/components/AboutPage';
import Layout from '@/app/layout';
export default function About() {
  return <Layout header={<Navbar />} main={<AboutPage />} footer={<Footer />}></Layout>;
}

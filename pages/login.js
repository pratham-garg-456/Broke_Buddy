import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Layout from '@/app/layout';
import LogIn from '@/app/components/LogIn';
export default function About() {
  return <Layout header={<Navbar />} main={<LogIn />} footer={<Footer />}></Layout>;
}

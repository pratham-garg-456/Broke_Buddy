import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Layout from '@/app/layout';
import Register from '@/app/components/Register';
export default function About() {
  return <Layout header={<Navbar />} main={<Register />} footer={<Footer />}></Layout>;
}

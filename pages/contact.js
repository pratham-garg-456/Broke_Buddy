import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Layout from '@/app/layout';
import ContactUs from '@/app/components/ContactUs';
export default function About() {
  return <Layout header={<Navbar />} main={<ContactUs />} footer={<Footer />}></Layout>;
}

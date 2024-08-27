import Image from 'next/image';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import Layout from '@/app/layout';
export default function Home() {
  return <Layout header={<Navbar />} footer={<Footer />}></Layout>;
}

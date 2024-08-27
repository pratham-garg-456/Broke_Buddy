import Image from 'next/image';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';
import Layout from '@/app/layout';
import HomePage from '@/app/HomePage';
export default function Home() {
  return <Layout header={<Navbar />} main={<HomePage />} footer={<Footer />}></Layout>;
}

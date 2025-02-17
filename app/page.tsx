"use client";

import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import ProfileSection from '@/components/ProfileSection';
import Footer from '@/components/Footer';
function Home() {
  return (
    <>
      <Navbar/>
      <Main/>
      <ProfileSection/>
      <Footer/>
    </>
  )
}

export default Home
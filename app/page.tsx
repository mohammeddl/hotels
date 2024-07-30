"use client";
import Banner from "@/src/components/Home/Banner";
import Destination from "@/src/components/Home/Destination";
import Discover from "@/src/components/Home/Discover";
import Footer from "@/src/components/Home/Footer";
import NavBar from "@/src/components/Home/NavBar";
import Rooms from "@/src/components/Home/Rooms";
import Search from "@/src/components/Home/Search";

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Search />
        <Banner />
        <Discover />
        <Destination />
        <Rooms />
        <Footer/>
      </main>
    </>
  );
}

export default Home;

"use client"
import Banner from "@/src/components/Home/Banner";
import Destination from "@/src/components/Home/Destination";
import Discover from "@/src/components/Home/Discover";
import Rooms from "@/src/components/Home/Rooms";
import Search from "@/src/components/Home/Search";


function Home() {
  return (
    <>
    <Search/>
    <Banner/>
    <Discover/>
    <Destination/>
    <Rooms/>
    </>
  );
}

export default Home;

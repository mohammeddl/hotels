import Nav from "@/src/components/dashboard/Nav";
import Stats from "@/src/components/dashboard/Stats";

export default function Dashboard() {
  return (
    <>
      <Nav />
      <div className='flex flex-col h-screen '>
        <Stats />
      </div>
    </>
  );
}

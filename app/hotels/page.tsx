import Nav from "@/src/components/dashboard/Nav";
import CreateHotel from "@/src/components/hotels/CreateHotel";

export default function Page() {
    return (
        <>
        <Nav />
        <div className='flex flex-col h-screen '>
          <CreateHotel />
        </div>
      </>
    );
    }
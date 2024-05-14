'use client';
import RoomForm from "@/src/components/RoomDashboard/RoomForm";
import Nav from "@/src/components/dashboard/Nav";

export default function Rooms(){

    return(<>
    <Nav/>
    <div className='flex flex-col h-screen '>
        <RoomForm/>
      </div>
    </>)
}
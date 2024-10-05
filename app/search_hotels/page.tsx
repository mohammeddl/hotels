import Footer from "@/src/components/Home/Footer";
import NavBar from "@/src/components/Home/NavBar";
import HotelListWithFilters from "@/src/components/hotel_Search/HotelListWithFilters";



export default function SearchHotels() {
    return (
        <div>
            <NavBar />
            <HotelListWithFilters />
            <Footer/>
        </div>
    )
}

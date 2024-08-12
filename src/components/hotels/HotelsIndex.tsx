import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function HotelsIndex() {

  const [hotels, setHotels] = useState<null | Array<any>>(null);
  useEffect(() => {
    const getHotels = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/hotels");
        setHotels(response.data.hotels);
        console.log(response.data.hotels);
      } catch (error) {
        console.log(error);
      }
    };

    getHotels();
  }, []);


  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Hotel</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Rooms</TableHead>
              <TableHead>Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hotels &&
              hotels.map((hotel) => (
                <TableRow key={hotel.id}>
                  <TableCell>{hotel.name}</TableCell>
                  <TableCell>{hotel.address}</TableCell>
                  <TableCell>{hotel.city}</TableCell>
                  <TableCell>{hotel.created_at}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use Illuminate\Http\Request;

class HotelController extends Controller
{
    public function index(){
        try{
            $hotels = Hotel::all();

            return response()->json(['hotels' => $hotels], 200);
        }catch(\Exception $e){
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function store(Request $request){
        try {
            $hotel = Hotel::create([
                'name' => $request->name,
                'address' => $request->address,
                'city' => $request->city,
            ]);

            return response()->json(['hotel'=>$hotel,'message' => 'Hotel created successfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function destroy($id){
        try{
            if(!$hotel = Hotel::find($id)){
                return response()->json(['message' => 'Hotel not found'], 404);
            }else{
                $hotel->delete();
                return response()->json(['message' => 'Hotel deleted successfully'], 200);
            }
        }catch(\Exception $e){
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function index(){
        try{
            $rooms = Room::all();
            $rooms->load('images');
            return response()->json(['rooms' => $rooms], 200);
            
        }catch(\Exception $e){
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    public function store(Request $request){
        try {
            $room = Room::create([
                'number' => $request->number,
                'hotel_id' => $request->hotel_id,
                'room_type' => $request->room_type,
                'price' => $request->price,
                'status' => $request->status,
                'description' => $request->description
            ]);
    
            if ($request->hasFile('room_images')) {
                foreach ($request->file('room_images') as $image) {
                    $imageName = time() . '_' . $image->getClientOriginalExtension();
                    $image->move(public_path('images'), $imageName);
    
                    $imageModel = Image::create([
                        'image_room' => $imageName,
                        'room_id' => $room->id
                    ]);
                }
            }
    
            return response()->json(['message' => 'Room created successfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
    

    public function update(Request $request, $id){
        try{
            $room = Room::find($id);
            if($room){
                $room->update($request->all());
                return response()->json($room, 200);
            }
            return response()->json(['message' => 'Room not found'], 404);
        }catch(\Exception $e){
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}

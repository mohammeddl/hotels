<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    protected $fillable = ['number', 'image_id', 'hotel_id', 'room_type', 'price', 'status','description'];

    public function hotel(){
        return $this->belongsTo(Hotel::class, 'hotel_id');
    }

   public function images(){
        return $this->hasMany(Image::class, 'room_id');
    }
}

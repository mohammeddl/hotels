<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'image_room',
        'room_id'
    ];

    public function room()
    {
        return $this->belongsTo(Room::class);
    }
}

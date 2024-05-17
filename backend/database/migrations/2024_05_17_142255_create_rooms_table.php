<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('number');
            $table->unsignedBigInteger('image_id');
            $table->unsignedBigInteger('hotel_id');
            $table->string('room_type');
            $table->bigInteger('price');
            $table->string('status')->default('available');
            $table->string('description')->nullable();

            $table->foreign('image_id')->references('id')->on('images')->onDelete('cascade');
            $table->foreign('hotel_id')->references('id')->on('hotels')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rooms');
    }
};

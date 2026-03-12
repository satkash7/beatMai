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
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('blogTitle');
            $table->string('blogRoute');
            $table->string('blogCategory');
            $table->longText('blogCaption');
            $table->longText('blogData');
            $table->string('publicPost')->default('0');
            $table->integer('blogCreator');
            $table->longText('blogImage')->nullable();
            $table->longText('imageUrl')->nullable();
            $table->string('status')->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};

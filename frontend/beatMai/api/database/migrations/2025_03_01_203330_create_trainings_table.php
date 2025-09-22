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
        Schema::create('trainings', function (Blueprint $table) {
            $table->id();
            $table->string('image')->nullable(); // Image (nullable)
            $table->string('imageUrl')->nullable(); // Image URL (nullable)
            $table->string('title'); // Title
            $table->longText('link')->nullable(); // External link
            $table->string('trainingRoute')->unique(); // Route
            $table->string('type')->default('Webinar'); // Type
            $table->string('status')->default('active'); // status
            $table->longText('description'); // Description
            $table->string('location')->nullable(); // Location (nullable)
            $table->string('language')->default('English'); // Language
            $table->string('format')->default('Online'); // Format
            $table->string('instructor')->nullable(); // Instructor (nullable)
            $table->string('category')->default('general'); // Category
            $table->string('level')->default('All Levels'); // Level
            $table->string('duration'); // Duration (in hours, or change as needed)
            $table->string('certification')->default('yes');
            $table->string('price')->default('Free'); // Price (decimal for currency)
            $table->string('start_date')->nullable(); // Start Date
            $table->string('creator'); // Creator
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trainings');
    }
};

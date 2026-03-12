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
        Schema::create('opportunities', function (Blueprint $table) {
            $table->id();
            $table->string('opportunityTitle');
            $table->string('opportunityRoute');
            $table->string('opportunityCategory');
            $table->longText('opportunityCaption');
            $table->longText('opportunityData');
            $table->string('publicPost')->default('1');
            $table->integer('opportunityCreator');
            $table->longText('opportunityImage')->nullable();
            $table->longText('imageUrl')->nullable();
            $table->longText('link');
            $table->string('status')->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('opportunities');
    }
};

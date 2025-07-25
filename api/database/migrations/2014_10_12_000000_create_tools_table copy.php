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
        Schema::create('tools', function (Blueprint $table) {
            $table->id();
            $table->string('visitorname')->nullable();
            $table->longText('visitormessage')->nullable();
            $table->string('visitorphone');
            $table->string('visitoremail')->nullable();
            $table->longText('imageUrl');
            $table->string('caregory');
            $table->string('validated');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tools');
    }
};

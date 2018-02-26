<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHorariosTable extends Migration
{

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('horarios', function(Blueprint $table) {
            $table->increments('id');
            $table->string('horario');
            $table->string('device_uuid', 255);
            $table->string('latitude', 255);
            $table->string('longitude', 255);
            $table->integer('ponto_id')->unsigned();
            $table->foreign('ponto_id')->references('id')->on('pontos');
            $table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('horarios');
	}

}

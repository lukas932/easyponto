<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\HorarioCreateRequest;
use App\Http\Requests\HorarioUpdateRequest;
use App\Repositories\HorarioRepository;


class HorariosController extends Controller
{

    /**
     * @var HorarioRepository
     */
    protected $repository;

    public function __construct(HorarioRepository $repository)
    {
        $this->repository = $repository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->repository->all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  HorarioCreateRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(HorarioCreateRequest $request)
    {
        $horario = $this->repository->create($request->all());
        return response()->json($horario, 201);
    }


    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->repository->find($id);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  HorarioUpdateRequest $request
     * @param  string            $id
     *
     * @return Response
     */
    public function update(HorarioUpdateRequest $request, $id)
    {
        $horario = $this->repository->update($request->all(),$id);
        return response()->json($horario, 200);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deleted = $this->repository->delete($id);

        if ($deleted) {
            return response()->json([], 204);
        }

        return response()->json([
            'error' => 'Resource can not be deleted'
        ], 500);
    }
}

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CargoRequest;
use App\Repositories\CargoRepository;


class CargosController extends Controller
{

    /**
     * @var CargoRepository
     */
    protected $repository;

    public function __construct(CargoRepository $repository)
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
     * @param  CargoRequest $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(CargoRequest $request)
    {
        $cargo = $this->repository->create($request->all());
        return response()->json($cargo, 201);
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
     * @param  CargoRequest $request
     * @param  string            $id
     *
     * @return Response
     */
    public function update(CargoRequest $request, $id)
    {
        $cargo = $this->repository->update($request->all(),$id);
        return response()->json($cargo, 200);
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

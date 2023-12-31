<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Dashboard',[
            'todos'=>Auth::user()->todos()->orderBy("id","desc")->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Todo/Create', [
            'todos' => Auth::user()->todos()->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            "title"=>"required",
        ]);
        $data = $request->only(['title', 'description']);
        $data['user_id'] = Auth::user()->id;
        Todo::create($data);
        return redirect()->route('home')->with('message','Successfully created')->with("type","success");
    }

    /**
     * Display the specified resource.
     */
    public function show(Todo $todo)
    {
        return Inertia::render("Todo/Show", ['todo' => $todo]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Todo $todo)
    {
        //
    }

    public function updateStatus(Request $todo){
        $todo = Todo::find($todo->id);
        if($todo){
            $status = ($todo->status=='pending')?'completed' : 'pending';
            $todo->status = $status;
            $todo->save();
        }
        return redirect()->back();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Todo $todo)
    {
        $this->validate($request, [
            "title"=>"required"
        ]);
        $data = $request->only(["title","description"]);
        $todo->update($data);
        return redirect()->route("home")->with("message","Successfully Updated")->with("type","success");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo)
    {
        $todo->delete();
        return redirect()->route("home")->with("message","Deleted Successfully")->with("type","success");
    }
}
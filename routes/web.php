<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TodoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[TodoController::class,'index'])->name("home")->middleware("auth");

Route::get('/dashboard', [TodoController::class,'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::resource("/todo",TodoController::class)->names([
    'create' => 'todo.create',
    'store' => 'todo.store',
    'index' => 'todo.index',
    'show' => 'todo.show',
    'edit' => 'todo.edit',
    'update' => 'todo.update',
    'destroy' => 'todo.destroy',
])->middleware("auth");

Route::post('/update-todo-status',[TodoController::class,'updateStatus'])->name('todoStatus.update');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
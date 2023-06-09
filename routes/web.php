<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\MyController;

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

Route::get('/', function () {
    return view('welcome');
});



Auth::routes(['verify' => true]);

Route::group(['middleware' => ['auth']], function () { //'verified',
    
    Route::resource('users', UserController::class);
    Route::resource('admins', UserController::class);
    
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('/home', [DashboardController::class, 'index'])->name('home');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::resource('donations', DonationController::class);
        
    // Route::get('importExportView', [MyController::class, 'importExportView']);
    Route::get('export', [MyController::class, 'export'])->name('export');
    Route::post('import', [MyController::class, 'import'])->name('import');
});
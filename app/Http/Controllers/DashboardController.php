<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        if(Auth::user()->user_type == 1) {

            $totalUsers = User::where('id', '!=', Auth::user()->id)
                  ->where('user_type', 2)
                  ->groupBy('status')
                  ->select('status', \DB::raw('count(*) as total'))
                  ->pluck('total', 'status')
                  ->toArray();

            $usersCountByMonth = User::where('id', '!=', Auth::user()->id)
                ->where('user_type', 2)
                ->selectRaw('MONTH(registration_date) as month, COUNT(*) as count')
                ->groupBy('month')
                ->get();

                $registerUsers = [];
                for ($month = 1; $month <= 12; $month++) {
                    $found = false;
                    foreach ($usersCountByMonth as $item) {
                        if ($item->month == $month) {
                            $registerUsers[] = $item->count;
                            $found = true;
                            break;
                        }
                    }
                    if (!$found) {
                        $registerUsers[] = 0;
                    }
                }

            return view('admin.dashboard', compact('totalUsers', 'registerUsers'));

        } else {
            return view('admin.dashboard');
        }
    }
}

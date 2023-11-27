<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name' => 'Pramana Yuda Sayeti, S.Kom',
                'username' => '199407292022031002',
                'jabatan' => 'Ahli Pertama - Pranata Komputer',
                'email' => '199407292022031002@kemenag.go.id',
                'password' => Hash::make('superadmin'),
                'updated_at' => \Carbon\Carbon::now()
            ],
            [
                'name' => 'Admin',
                'username' => 'admin',
                'jabatan' => 'Administrator',
                'email' => 'admin@sma3painan.sch.id',
                'password' => Hash::make('admin'),
                'updated_at' => \Carbon\Carbon::now()
            ],
           
        ];

        foreach ($data as $key => $item) {
            \App\Models\User::firstOrCreate(
                ['username' => $item['username']],
                $item
            );
        }


    }
}

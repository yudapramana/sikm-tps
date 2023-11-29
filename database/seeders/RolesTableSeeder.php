<?php

namespace Database\Seeders;

use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Seeder;
use App\Models\User;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $super_administrator = Role::create(['name' => 'super_administrator']);
        $administrator = Role::create(['name' => 'administrator']);
        $operator = Role::create(['name' => 'operator']);
        $director = Role::create(['name' => 'director']);
        $manager = Role::create(['name' => 'manager']);
        $supervisor = Role::create(['name' => 'supervisor']);
        $staff = Role::create(['name' => 'staff']);

        // Super Admin
        $user = User::where('username', '199407292022031002')->first();
        $user->assignRole('super_administrator', 'administrator');

        // Admin1
        $user = User::where('username', 'riniamelia')->first();
        $user->assignRole('administrator');

        // Admin2
        $user = User::where('username', 'hengkiprima')->first();
        $user->assignRole('administrator');

        // Admin3
        $user = User::where('username', 'dihenrp')->first();
        $user->assignRole('administrator');

        // Admin4
        $user = User::where('username', 'admin')->first();
        $user->assignRole('administrator');


        // Permissions
        $permissionMenu1 = Permission::create(['name' => 'menu-dashboard']);
        $permissionMenu2 = Permission::create(['name' => 'menu-pelayanan']);
        $permissionMenu3 = Permission::create(['name' => 'menu-arsip']);
        $permissionMenu4 = Permission::create(['name' => 'menu-disposisi']);
        $permissionMenu5 = Permission::create(['name' => 'menu-main']);
        $permissionMenu6 = Permission::create(['name' => 'menu-layanan']);

        $permissionPage1_1 = Permission::create(['name' => 'page-dashboard']);

        $permissionPage2_1 = Permission::create(['name' => 'page-pelayanan-input']);
        $permissionPage2_2 = Permission::create(['name' => 'page-pelayanan-list']);

        $permissionPage3_1 = Permission::create(['name' => 'page-arsip-pelayanan']);

        $permissionPage4_1 = Permission::create(['name' => 'page-disposisi-master']);
        $permissionPage4_2 = Permission::create(['name' => 'page-disposisi-list']);

        $permissionPage5_1 = Permission::create(['name' => 'page-main-permission']);
        $permissionPage5_2 = Permission::create(['name' => 'page-main-user-data']);
        $permissionPage5_3 = Permission::create(['name' => 'page-main-user-role']);
        $permissionPage5_4 = Permission::create(['name' => 'page-main-unit_pengolah']);

        $permissionPage6_1 = Permission::create(['name' => 'page-layanan-jenis']);
        $permissionPage6_2 = Permission::create(['name' => 'page-layanan-output']);
        $permissionPage6_3 = Permission::create(['name' => 'page-layanan-daftar']);
        $permissionPage6_4 = Permission::create(['name' => 'page-layanan-syarat-master']);
        $permissionPage6_5 = Permission::create(['name' => 'page-layanan-syarat-list']);

        $super_administrator->givePermissionTo([
            $permissionMenu1, $permissionMenu2, $permissionMenu3, $permissionMenu4, $permissionMenu5, $permissionMenu6,
            $permissionPage1_1,
            $permissionPage2_1, $permissionPage2_2,
            $permissionPage3_1,
            $permissionPage4_1, $permissionPage4_2,
            $permissionPage5_1, $permissionPage5_2, $permissionPage5_3, $permissionPage5_4,
            $permissionPage6_1, $permissionPage6_2, $permissionPage6_3, $permissionPage6_4, $permissionPage6_5,
        ]);

        $administrator->givePermissionTo([
            $permissionMenu1, $permissionMenu2, $permissionMenu6,
            $permissionPage1_1,
            $permissionPage2_1, $permissionPage2_2,
            $permissionPage3_1,
            $permissionPage6_1, $permissionPage6_2, $permissionPage6_3, $permissionPage6_4, $permissionPage6_5,
        ]);


        $operator->givePermissionTo([
            $permissionMenu1, $permissionMenu2, $permissionMenu3,
            $permissionPage1_1,
            $permissionPage2_1, $permissionPage2_2,
            $permissionPage3_1,
        ]);

        $director->givePermissionTo([
            $permissionMenu1, $permissionMenu4,
            $permissionPage1_1,
            $permissionPage4_1, $permissionPage4_2,
        ]);

        $manager->givePermissionTo([
            $permissionMenu1, $permissionMenu2, $permissionMenu4,
            $permissionPage1_1,
            $permissionPage2_1, $permissionPage2_2,
            $permissionPage4_1, $permissionPage4_2,
        ]);

        $supervisor->givePermissionTo([
            $permissionMenu1, $permissionMenu4,
            $permissionPage1_1,
            $permissionPage4_1, $permissionPage4_2,
        ]);

        $staff->givePermissionTo([
            $permissionMenu1, $permissionMenu2, $permissionMenu3, $permissionMenu4, $permissionMenu6,
            $permissionPage1_1,
            $permissionPage2_2,
            $permissionPage3_1,
            $permissionPage4_1, $permissionPage4_2,
            $permissionPage6_3, $permissionPage6_4, $permissionPage6_5,
        ]);
    }
}

<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2 justify-content-md-center">
                <div class="col-sm-6">
                    <h1 class="m-0"> Rekapitulasi Triwulan <strong> {{ triwulan }}</strong></h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Survey IKM</a></li>
                        <li class="breadcrumb-item"><a href="#">Rekapitulasi Triwulan</a></li>
                        <li class="breadcrumb-item active">Index</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="container-fluid">
            <div class="row justify-content-md-center">

                <div class="col-lg">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title m-0">Rekapitulasi Triwulan <strong> {{ triwulan }}</strong></h4>
                        </div>

                        <div class="card-body" style="overflow-x:auto;">
                            <DataTable :columns="columns" :data="data" class="table table-hover table-bordered" width="100%"
                                :options="{ order: false, sort: false, paging: true, searching: false }"
                                style="font-size:smaller !important;">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th width="35%">Nama Layanan</th>
                                        <th class="text-center">Nilai Index Pelayanan</th>
                                        <th>Konversi</th>
                                        <th>Mutu Pelayanan</th>
                                        <th>Jumlah Responden</th>
                                        <th width="10%">Aksi</th>
                                    </tr>
                                </thead>
                            </DataTable>

                        </div>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-lg">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title m-0">Rekapitulasi per <strong>Seksi</strong></h4>
                            <a :href="calcurl + year">Sinkronkan</a>
                        </div>
                    </div>

                    <!-- <div class="row">

                        <div class="card col-md-3" v-for="item in dataunit" :key="item.id_unit_rekap_triwulan">
                            <div class="card-header">
                                <h4 class="my-0 font-weight-normal">{{ item.unit.name }}</h4>
                            </div>
                        </div>

                    </div> -->


                    <div class="mb-3 text-center row">
                        <div class="col-md-3" v-for="item in dataunit"
                                :key="item.id_unit_rekap_triwulan">
                            <div class="card mb-4 shadow-sm" >
                                <div class="card-header" style="height: 80px !important;">
                                    <h4 class="my-0 font-weight-normal">{{ item.unit.name }}</h4>
                                </div>
                                <div class="card-body">
                                    <!-- <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1> -->
                                    <h1>{{ item.konversi }}</h1>
                                    <h3>{{ item.mutu_pelayanan }}</h3>
                                </div>
                            </div>
                        </div>


                    </div>




                </div>
            </div>

        </div>
    </div>
</template>
  
<script>
import GuestService from '../services/guest.service';
import Form from 'vform';
import Swal from 'sweetalert2';
// import DataTable from 'datatables.net-vue3'
import Select from 'datatables.net-select';


import DataTable from 'datatables.net-vue3';
import DataTableBs5 from 'datatables.net-bs5';
DataTable.use(Select);
DataTable.use(DataTableBs5);

import {
    HasError,
    AlertError,
} from 'vform/src/components/bootstrap5';

export default {
    name: "Thanks",
    components: {
        'has-error': HasError,
        'alert-error': AlertError,
        'DataTable': DataTable
    },
    data() {
        return {
            data: [],
            dataunit: [],
            triwulan: 1,
            calcurl: '/api/calc-recap-quarter/',
            year: new Date().getFullYear(),
            loading: false,
            disabled: false,
            editModal: false,
            columns: [
                { data: 'DT_RowIndex', className: "text-center fontsmaller smallfont" },
                { data: 'layanan.name', className: "fontsmaller smallfont" },
                { data: 'index_pelayanan', className: "text-center fontsmaller smallfont" },
                { data: 'konversi', className: "text-center fontsmaller smallfont" },
                { data: 'mutu_pelayanan', className: "text-center fontsmaller smallfont" },
                { data: 'jumlah_responden', className: "text-center fontsmaller smallfont" },
                { data: 'aksi', className: "text-center fontsmaller smallfont" },
            ]
        };
    },
    methods: {
        logOut() {
            this.$store.dispatch('auth/logout');
            this.$router.push('/login');
        },
        loadData() {
            this.$Progress.start();
            axios
                .get('/api/get/rekapitulasi-triwulan/' + this.$route.query.quarter)
                .then((response) => {
                    console.log('response getRekapTahunan');
                    console.log(response.data);
                    this.data = response.data.data;
                    // this.$Progress.finish();
                });

            axios
                .get('/api/unit-rekap-triwulan/' + this.$route.query.quarter)
                .then((response) => {

                    console.log('response rekapUnitTriwulan');
                    console.log(response.data);
                    this.dataunit = response.data;
                    this.$Progress.finish();

                });
        }
    },
    mounted() {
        this.loadData();
    },
    created() {
        this.$Progress.start();
    },
    mounted() {
        this.loadData();
        this.triwulan = this.$route.query.quarter;
        // alert(this.$route.query.year);
    },
    watch: {
        '$route.query.quarter': {
            handler: function (quarter) {
                console.log('quarter');
                console.log(quarter);
                this.$Progress.start();
                this.loadData();
            },
            deep: true,
            immediate: true
        }
    }
};
</script>
  
<style scoped>
@import 'datatables.net-dt';
@import 'bootstrap';
@import 'datatables.net-bs5';

.content-wrapper {
    margin-left: 0 !important;
}

.main-footer {
    margin-left: 0 !important;
}

.main-header {
    margin-left: 0 !important;
}

.main-header {
    --bs-navbar-padding-x: 1rem !important;
}

.fontsmaller {
    font-size: x-small !important;
}

.smallfont {
    font-size: x-small !important;
}

.paginate-button {
    padding: 0 !important;
}

.dataTables_wrapper .dataTables_paginate .paginate_button {
    padding: 0 !important;
}
</style>

<style>
.paginate-button {
    padding: 0 !important;
}

.dataTables_wrapper .dataTables_paginate .paginate_button {
    padding: 0 !important;
}
</style>
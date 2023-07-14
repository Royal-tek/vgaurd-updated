<template>
   <!-- Header -->
   <header class="dashboard_header super_admin_header">
            <div class="dashboard_header_info">
                <div class="menu-icon" onclick="openSidebar()">
                    <span class="material-icons-outlined ">menu</span>
                </div>
              
                <h1>LGA Admins</h1>
                <small>Total Number of LGA Admins</small>
            </div>
     
           
        </header>
        <AddLgaAdmin v-on:close-modal="closeModal" v-if="showAddLga"/>
        <DeleteLgaAdmin v-on:close-modal="closeDeleteModal" v-if="showDelete" :lgaAdmin="selectedlgaAdmin"/>
        <EditLgaAdmin v-if="showEdit" v-on:close-modal="closeEditModal" :lgaAdmin="selectedEditLgaAdmin"/>
        <LgaProfile v-if="showProfileModal" :lgaAdmin="lgaProfile" v-on:close-modal="closeProfileModal"/>
        <!-- End of Header -->
        <main class="main-container">
            <!-- Dashboard Card Section -->
            <div class="super_cards_wrapper">
                <div class="super_admin_cards">
                    <div class="super-card">
                        <p>Number of Registered Parties</p>
                        <span class="count">20</span>
                    </div>
                
                  
                </div>
            </div>
         

            <!-- Search Section Starts Here -->
            <section class="search_section super_admin_search">
                <div class="search_form"> 
                    <div class="search_input">
                        <img src="/assets/images/search-icon.svg" />
                        <input placeholder="Polling Unit,LGA,Name,Ward" />
                    </div>
                    <button @click="addLga">
                       Add Admin
                       <img src="/assets/images/add.svg">
                    </button>
                   
                </div>
                
            </section>
            <!-- Search Section Ends Here -->
           
            <!-- Table Starts Here  -->
            <div class="table-responsive-md table_wrapper">
                <table class="table">   
                    <thead class="table__head">
                        <tr>
                            <th>LGA Admin</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>LGA</th>
                            <th>
                                <span class="pointer_heading">
                                    No of Polling Unit Officers
                                    <img src="/assets/images/bold_pointer.svg" />
                                </span>
                            </th>
                           <th>Actions</th>
                          
                        </tr>
                    </thead>
                    <tbody class="table__body">
                        <tr v-for="(lga, index) in lgas" :key="index" >

                            <th scope="row" class="row__title" @click="showProfile(lga.id)" style="cursor:pointer">{{ lga.name }}</th>
                            <td>{{lga.email}}</td>
                            <td>{{lga.phoneNumber}}</td>
                            <td>{{ lga.lga }}</td>
                            <td>{{lga.totalPollingUnitOfficers}}</td>
                            <td >
                                <img style="cursor: pointer;" class="mx-2" src="/assets/images/trash.svg"  @click="triggerDelete(lga.id)"/>
                                <img style="cursor: pointer;" src="/assets/images/edit.svg" @click="triggerEdit(lga.id)" />
                            </td>
                        </tr>
                       
                      
                    </tbody>
                </table>




            <!-- Table Ends Here -->
            </div>
              
        </main>
   
</template>

<script>
import axios from 'axios'

import AddLgaAdmin from './AddLgaAdmin.vue'
import DeleteLgaAdmin from './DeleteLgaAdmin.vue'
import EditLgaAdmin from './EditLgaAdmin.vue'
import LgaProfile from './LgaAdminProfile.vue'
export default {
    name: 'LgaLanding',
    data(){
        return{
            lgas: [],
            showAddLga: false,
            showDelete: false,
            selectedlgaAdmin: '',
            selectedEditLgaAdmin: '',
            showEdit: false,
            lgaProfile: '',
            showProfileModal: false
        }
    },
    components: {
        AddLgaAdmin, DeleteLgaAdmin, EditLgaAdmin, LgaProfile
    },
    created(){
        this.getLga()
    },
    methods: {
        async getLga(){
            try {
                const lga = await axios.get('https://v-guard.onrender.com/api/lgaAdmin',  {headers : {"Authorization": "Token "+localStorage.getItem('token')}})
                this.lgas = lga.data.data
            } catch (error) {
                console.log(error);
            }
            
        },
        showProfile(id){
            this.lgaProfile = id
            this.showProfileModal = true
            // alert('wow')
        },
        closeProfileModal(){
            this.showProfileModal = false
        },
        closeModal(){
            this.showAddLga = false
            this.getLga()
        },
        triggerDelete(id){
            this.showDelete =true
            this.selectedlgaAdmin = id
        },
        addLga(){
            this.showAddLga = true
        },
        closeDeleteModal(){
            this.showDelete = false
            this.getLga()
        },
        triggerEdit(id){
            this.selectedEditLgaAdmin = id
            this.showEdit = true
        },
        closeEditModal(){
            this.showEdit = false
            this.getLga()
        }
    }
}
</script>
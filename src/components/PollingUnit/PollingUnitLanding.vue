<template>
    <!-- Header -->
    <header class="dashboard_header super_admin_header">
             <div class="dashboard_header_info">
                 <div class="menu-icon" onclick="openSidebar()">
                     <span class="material-icons-outlined ">menu</span>
                 </div>
               
                 <h1>Polling Unit Agent</h1>
                 <small>Here you can create and manage all polling unit agents</small>
             </div>
      
            
         </header>
         <AddPollingAgent v-on:close-modal="closeModal" v-if="showAddPolling"/>
         <DeletePolling v-on:close-modal="closeDeleteModal" v-if="showDelete" :polling="selectedPolling"/>
         <EditPolling v-if="showEdit" v-on:close-modal="closeEditModal" :polling="selectedEditPolling"/>
         <PollingUnitAgentProfile v-if="showProfileModal" :polling="PollingProfile" v-on:close-modal="closeProfileModal"/>
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
                     <button @click="addPolling">
                        Add Agent
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
                             <th>Name</th>
                             <th>LGA</th>
                             <th>Ward</th>
                             <th>Polling Unit</th>
                             <th>Lga Admin</th>
                            <th>Actions</th>
                           
                         </tr>
                     </thead>
                     <tbody class="table__body">
                         <tr v-for="(polling, index) in pollings" :key="index" >
 
                             <th scope="row" class="row__title" @click="showProfile(polling.id)" style="cursor:pointer">{{ polling.name }}</th>
                             <td>{{polling.lga}}</td>
                             <td>{{polling.ward}}</td>
                             <td>{{ polling.pollingUnit }}</td>
                             <td>{{polling.totalPollingUnitOfficers}}</td>
                             <td >
                                 <img style="cursor: pointer;" class="mx-2" src="/assets/images/trash.svg"  @click="triggerDelete(polling.id)"/>
                                 <img style="cursor: pointer;" src="/assets/images/edit.svg" @click="triggerEdit(polling.id)" />
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
 
 import AddPollingAgent from './AddPollingUnitAgent.vue'
 import DeletePolling from './DeletePollingUnitAgent.vue'
 import EditPolling from './EditPollingUnitAgent.vue'
 import PollingUnitAgentProfile from './PollingUnitAgentProfile.vue'
 export default {
     name: 'PollingLanding',
     data(){
         return{
             pollings: [],
             showAddPolling: false,
             showDelete: false,
             selectedPolling: '',
             selectedEditPolling: '',
             showEdit: false,
             PollingProfile: '',
             showProfileModal: false
         }
     },
     components: {
        AddPollingAgent, DeletePolling, EditPolling, PollingUnitAgentProfile
     },
     created(){
         this.getPolling()
     },
     methods: {
         async getPolling(){
             try {
                 const polling = await axios.get('https://v-guard.onrender.com/api/admin/unit/agent/all',  {headers : {"Authorization": "Token "+localStorage.getItem('token')}})
                 this.pollings = polling.data.data
             } catch (error) {
                 console.log(error);
             }
             
         },
         showProfile(id){
             this.PollingProfile = id
             this.showProfileModal = true
             // alert('wow')
         },
         closeProfileModal(){
             this.showProfileModal = false
         },
         closeModal(){
             this.showAddPolling = false
             this.getPolling()
         },
         triggerDelete(id){
             this.showDelete =true
             this.selectedPolling = id
         },
         addPolling(){
             this.showAddPolling = true
         },
         closeDeleteModal(){
             this.showDelete = false
             this.getPolling()
         },
         triggerEdit(id){
             this.selectedEditPolling = id
             this.showEdit = true
         },
         closeEditModal(){
             this.showEdit = false
             this.getPolling()
         }
     }
 }
 </script>
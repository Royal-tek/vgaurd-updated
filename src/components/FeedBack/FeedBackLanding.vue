    <template>
        <!-- Header -->
        <header class="dashboard_header super_admin_header">
                <div class="dashboard_header_info">
                    <div class="menu-icon" onclick="openSidebar()">
                        <span class="material-icons-outlined ">menu</span>
                    </div>
                
                    <h1>Feedback</h1>
                    <small>Here you can see a list of all the feedbacks received</small>
                </div>
        
                
            </header>
            <!-- <AddLgaAdmin v-on:close-modal="closeModal" v-if="showAddLga"/>
            <DeleteLgaAdmin v-on:close-modal="closeDeleteModal" v-if="showDelete" :lgaAdmin="selectedlgaAdmin"/>
            <EditLgaAdmin v-if="showEdit" v-on:close-modal="closeEditModal" :lgaAdmin="selectedEditLgaAdmin"/>
            <LgaProfile v-if="showProfileModal" :lgaAdmin="lgaProfile" v-on:close-modal="closeProfileModal"/> -->
            <!-- End of Header -->
            <main class="main-container">
                <!-- Dashboard Card Section -->
            
            
    
                <!-- Search Section Starts Here -->
                <section class="search_section super_admin_search">
                    <div class="search_form"> 
                        <div class="search_input">
                            <img src="/assets/images/search-icon.svg" />
                            <input placeholder="Polling Unit,LGA,Name,Ward" />
                        </div>
                        <!-- <button @click="addLga">
                            Add Admin
                            <img src="/assets/images/add.svg">
                        </button> -->
                        
                    </div>
                    
                </section>
                <!-- Search Section Ends Here -->
                
                <!-- Table Starts Here  -->
                <div class="table-responsive-md table_wrapper">
                    <table class="table">   
                        <thead class="table__head">
                            <tr>
                                <th>Polling Unit</th>
                                <th>Ward</th>
                                <th>LGA</th>
                                <th>Polling Unit Agent</th>
                                <th>Status</th>
                                <th>View Feedback</th>
                            
                            </tr>
                        </thead>
                        <tbody class="table__body">
                            <tr v-for="(feedback, index) in feedbacks" :key="index" >
    
                                <th scope="row" class="row__title" @click="showProfile(feedback.id)" style="cursor:pointer">{{ feedback.pollingUnit }}</th>
                                <td>{{feedback.ward}}</td>
                                <td>{{feedback.lga}}</td>
                                <td>{{ feedback.pollingUnitAgent }}</td>
                                <td v-if="feedback.warning" style="background-color: red;">Bad</td>
                                <td v-else ><span style="background-color: rgb(77, 220, 77); padding: 5px;">Good</span></td>
                                <td >
                                    <img style="cursor: pointer;" class="mx-2" src="/assets/images/trash.svg"  @click="triggerDelete(lga.id)"/>
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
    
    //  import AddLgaAdmin from './AddLgaAdmin.vue'

    export default {
        name: 'FeedBack',
        data(){
            return{
                feedbacks: [],
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
            //  AddLgaAdmin
        },
        created(){
            this.getFeedback()
        },
        methods: {
            async getFeedback(){
                try {
                    const feedback = await axios.get('https://v-guard.onrender.com/api/admin/feedback',  {headers : {"Authorization": "Token "+localStorage.getItem('token')}})
                    this.feedbacks = feedback.data.data
                    console.log(feedback);
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
        
        }
    }
    </script>
<template>
    <!-- Popup Wrapper Starts here -->
    <section class="pop_wrapper">
        <!-- PopUp box starts here -->
        <div class="popup_box">
            <header class="popup_header">
                <p>Add Agent</p>

                <a @click="closeModal" href="#"><img src="/assets/images/close-circle.svg"></a>
            </header>
            <div class="popup_form">
                <div class="popup_input basic_input">
                    <label class="basic_input_label"> Name</label>
                    
                    <input type="text" placeholder="Enter Firstname" v-model="firstname">
                </div>
                <div class="popup_input basic_input">
                    <label class="basic_input_label">Last Name</label>
                    
                    <input type="text" placeholder="Enter Lastname" v-model="lastname">
                </div>
                <div class="popup_input basic_input">
                    <label class="basic_input_label">Phone Number</label>
                    
                    <input type="text" placeholder="Enter Phone number" v-model="phone">
                </div>
                <div class="popup_input basic_input">
                    <label class="basic_input_label">Email Address</label>
                    
                    <input type="text" placeholder="Enter Email Address" v-model="email">
                </div>
                <div class="select_input_wrapper">
                    <label class="basic_input_label">LGA</label>
                    <div class="popup_input select_input">
                    
                        <select @change="selectedLga=$event.target.value">
                            <option class="option" value="">LGA</option>
                            <option class="option"  v-for="(l, index) in lga" :key="index" :value="l">{{ l }}</option>
                        </select>
                        <span class="custom_arrow">
                            <img src="/assets/images/arrow-bottom.svg">
                        </span>
                    </div>
                </div>
        
        
                <div class="popup_input basic_input">
                    <label class="basic_input_label">Password</label>
                    
                    <input type="password" placeholder="Enter Password" v-model="password">
                </div>
                
                <footer class="form_action">
                    <button @click="closeModal" class="btn_neutral">Cancel</button>
                    <button class="btn_green" @click="createLga">Submit</button>
                </footer>     

            </div>
            
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name : 'AddLga',
    data(){
        return{
            firstname : '',
            lastname : '',
            phone : '',
            email : '',
            password : '',
            selectedLga : '',
            lga : [],
            
            
            
        }
    },

    created(){
            this.getLga()
        },

        

    methods : {
        async createLga(){
            const fd = {
                firstName : this.firstname,
                lastName : this.lastname,
                phoneNumber : this.phone,
                email : this.email,
                lga : this.selectedLga,
                password : this.password
            }
            try {
                const createLga = await axios.post('https://v-guard.onrender.com/api/lgaAdmin/create', fd, {headers : {"Authorization": "Token "+localStorage.getItem('token')}})
                this.$swal({
                    icon:'success',
                    title: 'Success',
                    text:'AGENT CREATED SUCCESSFULLY',
                    })
                this.closeModal()
                console.log(createLga);
            } catch (error) {
                this.$swal({
                    icon:'error',
                    title: 'Failed',
                    })
                console.log(error);
            }
        },
        closeModal(){
            this.$emit('close-modal')
        },
        
        async getLga(){
            try {
                const lga = await axios.get('https://v-guard.onrender.com/api/admin/lga')
                this.lga = lga.data.data
                console.log(lga.data.data);
            } catch (error) {
                console.log(error);
            }
        },
        
        
    }
}
</script>
<template>
    <div class="pop_wrapper">
            <div class="display_box">
                <div class="displaybox_header">
                    <div class="display_header_left">
                        <div class="admin_img">
                            <img src="/assets/images/babe.jpg" />
                        </div>
                        <div class="admin_topic">
                            <p>Admin Profile</p>
                        </div>
                    </div>
                    <div class="display_header_right">
                        <img @click="closeModal" src="/assets/images/close-circle.svg" />
                    </div>
                    
                </div>
                <div class="displaybox_body">
                    <div class="display_container">
                        <div class="display_content">
                            <p class="p-bold">Name</p>
                            <p class="p_gray">{{ profile.firstName }} {{ profile.lastName }}</p>
                        </div>
                        <div class="display_content">
                            <p class="p-bold">Email</p>
                            <p class="p_gray">{{ profile.email }}</p>
                        </div>
                        <div class="display_content">
                            <p class="p-bold">Phone number</p>
                            <p class="p_gray">{{ profile.phoneNumber }}</p>
                        </div>
                        <div class="display_content">
                            <p class="p-bold">LGA</p>
                            <p class="p_gray">{{ profile.lga }}</p>
                        </div>
                        <div class="display_content">
                            <p class="p-bold">Total number of Wards</p>
                            <p class="p_gray">20</p>
                        </div>
                        <div class="display_content">
                            <p class="p-bold">Total number of Agents</p>
                            <p class="p_gray">20</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'PollingUnitAgentProfile',
    data(){
        return{
            profile: {}
        }
    },
    props: {
        polling: {
            type : String,
            required: true
        }
    },
    created(){
        this.getProfile()
    },
    methods: {
        closeModal(){
            this.$emit('close-modal')
        },
        async getProfile(){
            try {
                const profile = await axios.get(`https://v-guard.onrender.com/api/lgaAdmin/${this.lgaAdmin}`, {headers : {"Authorization": "Token "+localStorage.getItem('token')}})
                this.profile = profile.data.data
                console.log(profile.data);
            } catch (error) {
                console.log(error);
            }
        }
    }

}
</script>
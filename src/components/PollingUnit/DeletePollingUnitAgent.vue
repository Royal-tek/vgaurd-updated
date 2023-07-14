<template>
    <!-- Popup Wrapper Starts here -->
    <section class="pop_wrapper">
        <!-- PopUp box starts here -->
        <div class="delete_wrapper">
        <!-- Delete Box Starts Here -->
        <div class="delete_box">
            <div class="delete_header">
                <h3>Delete Admin</h3>
                <div class="cancel_icon">
                    <img @click="closeModal" style="cursor: pointer;" src="/assets/images/close-circle.svg" />
                </div>
            </div>

            <div class="delete_body">
                <div class="delete_message">
                    <p>You are about to remove an Agent from the list. Are you sure ?  </p>
                </div>

                <div class="delete_action">
                    <button @click="closeModal" class="btn_neutral">Cancel</button>
                    <button @click="deleteAgent" class="btn_danger">Delete</button>
                </div>
            </div>
        </div>    
    </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name : 'DeletePolling',
    props: {
        polling: {
            type: String,
            required: true
    }
    },
    methods: {
        closeModal(){
            this.$emit('close-modal')
        },
        async deleteAgent(){
            try {
                const deleteAgent = await axios.delete(`https://v-guard.onrender.com/api/admin/unit/agent/${this.polling}/delete`, {headers : {"Authorization": "Token "+localStorage.getItem('token')}})
                this.$swal({
                    icon:'success',
                    title: 'Success',
                    text:'AGENT DELETED SUCCESSFULLY',
                    })
                this.closeModal()
                console.log(deleteAgent);
            } catch (error) {
                console.log(error);
            }

            
        }
    }


}
</script>
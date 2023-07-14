<template>
    <AdminView v-if="!adminShow" />
    <SuperAdminView v-if="adminShow"/>
    
</template>

<script>
import AdminView from '../components/AdminView.vue';
import SuperAdminView from '../components/SuperAdminView.vue';
export default {
  name: 'Home',
  data(){
    return{
      adminShow: null
    }
  },

  created(){
    this.checkRole()
  },

  methods: {
    checkRole(){
      const role = localStorage.getItem('role')
      if(role === 'Admin'){
        this.adminShow = true
      }
      else if(role === 'lgaAdmin'){
        this.adminShow = false
      }
      else{
        this.$store.commit('logout')
      }
    }
  },
  components : {
    AdminView,
    SuperAdminView,
    
  },
}
</script>

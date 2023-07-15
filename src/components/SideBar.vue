<template>
    <!-- Sidebar -->
    <aside class="dashboard_sidebar">
      <div class="sidebar-title">
        <div class="sidebar-brand">
          <h1>V-Guard</h1>
        </div>
        <span class="material-icons-outlined cancel" @click="closeSidebar">close</span>
        <ul class="sidebar-list">
          <li :class="{ 'sidebar-list-item': true, 'active': isActiveRoute('Home') }">
            <router-link :to="{ name: 'Home' }">
              <img src="/assets/images/dashboard.svg" />
              <span>Dashboard</span>
            </router-link>
          </li>
          <li :class="{ 'sidebar-list-item': true, 'dropdown': true, 'active': showSubMenu }">
            <a @click="toggleSubMenu">
              <span class="dropdown_left">
                <img src="/assets/images/dimuser.svg" />
                <span>User</span>
              </span>
              <img class="angel_down" src="/assets/images/angeldown.svg" />
            </a>
            <ul v-show="showSubMenu" class="sub_menu">
              <li><a href="">LGA Admin</a></li>
              <li><a href="">Polling Unit Agent</a></li>
            </ul>
          </li>
          <li :class="{ 'sidebar-list-item': true, 'active': isActiveRoute('FeedBack') }">
            <router-link :to="{ name: 'FeedBack' }">
              <img src="/assets/images/textmessage.svg" />
              <span>Feedback</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="sidebar-logout">
        <ul class="sidebar-list">
          <li class="sidebar-list-item" @click="logout">
            <a style="text-decoration: none; color: inherit;">
              <img src="/assets/images/logout.svg" />
              <span>Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <!-- Sidebar Ends -->
  </template>
  
  <script>
  export default {
    name: 'SideBar',
    data() {
      return {
        showSubMenu: false
      }
    },
    methods: {
      logout() {
        this.$store.commit('logout')
      },
      toggleSubMenu() {
        this.showSubMenu = !this.showSubMenu;
      },
      closeSidebar() {
        // Implement the closeSidebar method if necessary
        // This is based on your code, but make sure it's properly implemented
      },
      isActiveRoute(routeName) {
        return this.$route.name === routeName;
      }
    }
  }
  </script>
  

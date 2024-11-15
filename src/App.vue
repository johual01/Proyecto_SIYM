<template>
  <SidebarMenu />
  <MenuBarUp />

  <div style="margin-left: 5%;">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<script setup>
import SidebarMenu from './components/SidebarMenu.vue';
import MenuBarUp from './components/MenuBarUp.vue';
import { ref, onMounted } from 'vue';
</script>

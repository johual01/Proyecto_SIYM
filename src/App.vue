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
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Knob from 'primevue/knob';
import InputNumber from 'primevue/inputnumber';
import InputGroup from 'primevue/inputgroup';
import Slider from 'primevue/slider';
import ProgressSpinner from 'primevue/progressspinner';
import { state } from "@/socket";

const connected = ref(state.connected);
const cycleCounter = ref(state.cycleCounter);
const cycleResults = ref(state.cycleResults);
const visible = ref(false);
/* Datos iniciales*/
const numagentes = ref(0);
const numinfectados = ref(0);

/* Porcentaje principales*/
const edad_p = ref(0);
const poblacion_t = ref(0);
const poblacion_cs = ref(0);
const poblacion_pa = ref(0);
const poblacion_aa = ref(0);

/* Limites*/
const porcen_c_min = ref(0);
const porcen_c_max = ref(0);
const tiemp_r_max = ref(0);
const tiemp_r_min = ref(0);
const porcen_m_max = ref(0);
const porcen_m_min = ref(0);

/* Peso*/
const peso_ap = ref(0);
const peso_m = ref(0);
const peso_aa = ref(0);
const peso_cs = ref(0);
const peso_pa = ref(0);

</script>

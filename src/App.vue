<template>
  <SidebarMenu />
  <MenuBarUp />
  <div style="margin-left: 5%;">
    <div>
      <h1>Parametros Iniciales</h1>
      <div>
        <Button label="Iniciar Simulacion" severity="success" @click="visible = true" style="margin-right: 1%;"/>
        <Button label="Parámetros ambientales" severity="help" @click="visible = true" />
      </div>
    </div>
    <div class="flex">
      <div class="mar_ini">
        <div class="Card_content">
          <h2>Datos Iniciales</h2>
          <div class="flex cen">
            <div class="card_ini">
              <h4>Número de agentes</h4>
              <InputNumber v-model="numagentes" inputId="minmax-buttons" mode="decimal" showButtons :min="0" fluid />
            </div>
            <div class="card_ini">
              <h4>Número de infectados</h4>
              <InputNumber v-model="numinfectados" inputId="minmax-buttons" mode="decimal" showButtons :min="0" fluid />
            </div>
          </div>
        </div>
        <div class="Card_content">
          <h2>Porcentajes Principales</h2>
          <div>
            <div class="flex cen">
              <div class="card_ini">
                <h4>por agrupación por edad de distribución de población</h4>
                <Knob v-model="edad_p" valueTemplate="{value}%" :strokeWidth="5" text-color="white" />
              </div>
              <div class="card_ini">
                <h4>de distribución de población por tipo de trabajo</h4>
                <Knob v-model="poblacion_t" valueTemplate="{value}%" :strokeWidth="5" text-color="white" />
              </div>

              <div class="card_ini">
                <h4>de distribución de población por condición de salud</h4>
                <Knob v-model="poblacion_cs" valueTemplate="{value}%" :strokeWidth="5" text-color="white" />
              </div>
            </div>
            <div class="flex cen">
              <div class="card_ini">
                <h4>de distribución de población por poder adquisitivo</h4>
                <Knob v-model="poblacion_pa" valueTemplate="{value}%" :strokeWidth="5" text-color="white" />
              </div>
              <div class="card_ini">
                <h4>de distribución de población por atención a la enfermedad</h4>
                <Knob v-model="poblacion_aa" valueTemplate="{value}%" :strokeWidth="5" text-color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mar_ini">
        <div class="Card_content">
          <h2>Limites Ajustables</h2>
          <div class="">
            <div>
              <h4>Porcentaje de contagio</h4>
              <InputGroup>
                <div class="flex cen">
                  <div style="margin-bottom: 5%; margin-right: 5%;">
                    Limite Maximo
                  </div>
                  <InputNumber v-model="porcen_c_max" inputId="minmax-buttons" mode="decimal" showButtons
                    :min="porcen_c_min" :max="100" fluid style="width: 8rem; margin-bottom: 5%; margin-right: 5%;" />
                  <div style="margin-bottom: 5%; margin-right: 5%;">
                    Limite Minimo
                  </div>
                  <InputNumber v-model="porcen_c_min" inputId="minmax-buttons" mode="decimal" showButtons :min="0"
                    :max="porcen_c_max" fluid style="width: 8rem; margin-bottom: 5%; margin-right: 5%;" />
                </div>
              </InputGroup>
            </div>
            <div>
              <h4>Tiempo de recuperación</h4>
              <InputGroup>
                <div class="flex cen">
                  <div style="margin-bottom: 5%; margin-right: 5%;">
                    Cant dias Maximo
                  </div>
                  <InputNumber v-model="tiemp_r_max" inputId="minmax-buttons" mode="decimal" showButtons
                    :min="tiemp_r_min" fluid style="width: 8rem; margin-bottom: 5%; margin-right: 5%; " />
                  <div style="margin-bottom: 5%; margin-right: 5%;">
                    Cant dias Minimo
                  </div>
                  <InputNumber v-model="tiemp_r_min" inputId="minmax-buttons" mode="decimal" showButtons :min="0"
                    :max="tiemp_r_max" fluid style="width: 8rem; margin-bottom: 5%; margin-right: 5%;" />
                </div>
              </InputGroup>
            </div>
            <div>
              <h4>Porcentaje de muerte</h4>
              <InputGroup>
                <div class="flex cen">
                  <div>
                    Limite Maximo
                  </div>
                  <InputNumber v-model="porcen_m_max" inputId="minmax-buttons" mode="decimal" showButtons
                    :min="porcen_m_min" :max="100" fluid style="width: 8rem; margin-bottom: 5%; margin-right: 5%;" />
                  <div>
                    Limite Minimo
                  </div>
                  <InputNumber v-model="porcen_m_min" inputId="minmax-buttons" mode="decimal" showButtons :min="0"
                    :max="porcen_m_max" fluid style="width: 8rem; margin-bottom: 5%; margin-right: 5%;" />
                </div>
              </InputGroup>
            </div>
          </div>
        </div>
        <div class="Card_content">
          <h2>Peso o importancia</h2>
          <div class="flex cen" style="padding: 2%; justify-content: space-evenly;">
            <div>
              <div>
                <h4>de la actividad profesional</h4>
                <InputText
                  :value="peso_ap === 0 ? 'Nada' : peso_ap === 25 ? 'Poco' : peso_ap === 50 ? 'Medio' : peso_ap === 75 ? 'Alto' : peso_ap === 100 ? 'Importante' : ''"
                  disabled />
                <Slider :step="25" v-model="peso_ap" style="margin-bottom: 5%;" />
              </div>
              <div>
                <h4>de la movilidad</h4>
                <InputText
                  :value="peso_m === 0 ? 'Nada' : peso_m === 25 ? 'Poco' : peso_m === 50 ? 'Medio' : peso_m === 75 ? 'Alto' : peso_m === 100 ? 'Importante' : ''"
                  disabled />
                <Slider :step="25" v-model="peso_m" style="margin-bottom: 5%;" />
              </div>
              <div>
                <h4>de la atención a la enfermedad</h4>
                <InputText
                  :value="peso_aa === 0 ? 'Nada' : peso_aa === 25 ? 'Poco' : peso_aa === 50 ? 'Medio' : peso_aa === 75 ? 'Alto' : peso_aa === 100 ? 'Importante' : ''"
                  disabled />
                <Slider :step="25" v-model="peso_aa" style="margin-bottom: 5%;" />
              </div>
            </div>
            <div>
              <div>
                <h4>de la condición de salud</h4>
                <InputText
                  :value="peso_cs === 0 ? 'Nada' : peso_cs === 25 ? 'Poco' : peso_cs === 50 ? 'Medio' : peso_cs === 75 ? 'Alto' : peso_cs === 100 ? 'Importante' : ''"
                  disabled />
                <Slider :step="25" v-model="peso_cs" style="margin-bottom: 5%;" />
              </div>
              <div>
                <h4>del poder adquisitivo</h4>
                <InputText
                  :value="peso_pa === 0 ? 'Nada' : peso_pa === 25 ? 'Poco' : peso_pa === 50 ? 'Medio' : peso_pa === 75 ? 'Alto' : peso_pa === 100 ? 'Importante' : ''"
                  disabled />
                <Slider :step="25" v-model="peso_pa" style="margin-bottom: 5%;" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Dialog v-model:visible="visible" modal :style="{ width: '25rem' }">
    <div class="flex cen">
      <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent" animationDuration=".5s"
        aria-label="Custom ProgressSpinner" />
    </div>
  </Dialog>
</template>

<script setup>
import SidebarMenu from './components/SidebarMenu.vue';
import MenuBarUp from './components/MenuBarUp.vue';
import { ref } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Knob from 'primevue/knob';
import InputNumber from 'primevue/inputnumber';
import InputGroup from 'primevue/inputgroup';
import Slider from 'primevue/slider';
import ProgressSpinner from 'primevue/progressspinner';

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

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}

.flex .cen {
  align-items: center;
}

.Card_content {
  border: 1px solid #2f3664;
  border-radius: 50px;
  background-color: #2f3664;
  padding: 4%;
  box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25),
    10px 10px 70px rgba(0, 0, 0, 0.25),
    inset 5px 5px 20px rgba(255, 255, 255, 0.25),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);
  margin: 2%;
  width: 700px;
}

.card_ini {
  margin: 2%;
}

.card_ini h4 {
  width: 200px;
}

.p-inputtext {
  border-radius: 0 !important;
}

.p-inputgroup{
  justify-content: center;
}

.mar_ini{
  margin-right: 1%;
}

</style>
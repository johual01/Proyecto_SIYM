<template>
  <div>
    <div style="display: flex;">
      <h1 style="margin-right: 1%;">Simulacion de datos</h1>
      <div style="display: flex; align-items: center; justify-content: center;">
        <Button severity="success" style="margin-right: 3%;" icon="pi pi-pause"
          v-tooltip.bottom="'Pausar/Reanudar Simulacion'" @click="pauseAndActiveSimulation" />
        <Button severity="success" style="margin-right:3%;" icon="pi pi-filter"
          v-tooltip.bottom="'Cambiar Parametros Ambientales'" @click="toggle" />
        <Popover ref="op">
          <div>
            <div class="Card_content">
              <h2>Parametros Ambientales</h2>
              <div style="display: flex; align-items: center;">
                <div>
                  <div>
                    <h4>Cuarentena</h4>
                    <InputGroup>
                      <div class="flex cen">
                        <div class="space_right">
                          <Checkbox v-model="apquarentine" binary />
                        </div>
                      </div>
                    </InputGroup>
                  </div>
                  <div>
                    <h4>Uso de máscara</h4>
                    <InputGroup>
                      <div class="flex cen">
                        <div class="space_right">
                          <Checkbox v-model="apmaskUse" binary />
                        </div>
                      </div>
                    </InputGroup>
                  </div>
                  <div>
                    <h4>Distancia social</h4>
                    <InputGroup>
                      <div class="flex cen">
                        <div class="space_right">
                          <Checkbox v-model="apsocialDistance" binary />
                        </div>
                      </div>
                    </InputGroup>
                  </div>
                </div>
                <div style="display: flex; width: 100%; justify-content: center;">
                  <Button label="Guardar Cambios" severity="success" style="margin-right:3%; width: 75%;"
                    icon="pi pi-check" @click="toggle" />
                </div>
              </div>
            </div>

          </div>
        </Popover>
        <Button severity="success" style="margin-right: 3%;" icon="pi pi-sign-in"
          v-tooltip.bottom="'Finalizar Simulacion'" @click="confirm1()" />
        <ConfirmDialog></ConfirmDialog>
      </div>
    </div>
    <div style="display: flex; width: 75%; align-items: center; justify-content: flex-end;">
      agrupar por:
      <SelectButton v-model="value" :options="options" />
    </div>
    <div style="display: flex; width: 100%; text-align: center;">
      <div style="width: 75%; margin-right: 0.5%;">
        <Chart type="line" :data="chartData" :options="chartOptions" class="comple_screen" style="height: 100%" />
        <div style="display: flex;">
        </div>
      </div>
      <div>
        <Card>
          <template #title>{{ istate.cant_sanos }}</template>
          <template #content>
            <p class="m-0">
              Cantidad de Sanos
            </p>
          </template>
        </Card>
        <Card>
          <template #title>{{ istate.cant_infectados }}</template>
          <template #content>
            <p class="m-0">
              Cantidad de Infectados
            </p>
          </template>
        </Card>

        <Card>
          <template #title>{{ istate.cant_recuperados }}</template>
          <template #content>
            <p class="m-0">
              Cantidad de Recuperados
            </p>
          </template>
        </Card>
        <Card>
          <template #title>{{ istate.cant_muertos }}</template>
          <template #content>
            <p class="m-0">
              Cantidad de Muertos
            </p>
          </template>
        </Card>
      </div>
    </div>
  </div>
  <Dialog v-model:visible="visible" modal header="Resultados de la Simulacion"
    :style="{ width: '75rem', height: '46rem' }">
    <div>
      <Card>
        <template #title>{{ istate.cant_sanos }}</template>
        <template #content>
          <p class="m-0">
            Cantidad de Sanos
          </p>
        </template>
      </Card>
      <Card>
        <template #title>{{ istate.cant_infectados }}</template>
        <template #content>
          <p class="m-0">
            Cantidad de Infectados
          </p>
        </template>
      </Card>

      <Card>
        <template #title>{{ istate.cant_recuperados }}</template>
        <template #content>
          <p class="m-0">
            Cantidad de Recuperados
          </p>
        </template>
      </Card>
      <Card>
        <template #title>{{ istate.cant_muertos }}</template>
        <template #content>
          <p class="m-0">
            Cantidad de Muertos
          </p>
        </template>
      </Card>
    </div>
    <div style="display: flex; justify-content: flex-end;">
      <Button type="button" label="Descargar Excel" severity="secondary" :onclick="printExcel"></Button>
      <Button type="button" label="Save"><router-link to="/">Finalizar</router-link></Button>
    </div>
  </Dialog>
</template>

<script>
export default {
  name: 'Simulacion'
}
</script>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Button from 'primevue/button';
import InputGroup from 'primevue/inputgroup';
import Chart from 'primevue/chart';
import Checkbox from 'primevue/checkbox';
import Card from 'primevue/card';
import Popover from 'primevue/popover';
import ConfirmDialog from 'primevue/confirmdialog';
import SelectButton from 'primevue/selectbutton';
import Dialog from 'primevue/dialog';
import { useConfirm } from "primevue/useconfirm";
import { state } from "@/socket";
import * as XLSX from 'xlsx';

const confirm = useConfirm();
const istate = ref(state);

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const visible = ref(false);

const confirm1 = () => {
  confirm.require({
    message: 'Esta seguro que quiere finalizar la simulacion?',
    header: 'Confirmacion',
    icon: 'pi pi-exclamation-triangle',
    rejectProps: {
      label: 'Cancelar',
      severity: 'secondary',
      outlined: true
    },
    acceptProps: {
      label: 'Finalizar'
    },
    accept: () => {
      visible.value = true
    },
    reject: () => {

    }
  });
};

const apquarentine = ref(false);
const apmaskUse = ref(false);
const apsocialDistance = ref(false);
const value = ref('Dias');
const options = ref(['Dias', 'Mes', 'Año']);
const op = ref();
const toggle = (event) => {
  op.value.toggle(event);
}
const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: state.labels,
    datasets: [
      {
        label: 'Cantidad de sanos',
        data: state.array_sanos,
        fill: false,
        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
        tension: 0.4
      },
      {
        label: 'Cantidad de infectados',
        data: state.array_infectados,
        fill: false,
        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
        tension: 0.4
      },
      {
        label: 'Cantidad de recuperados',
        data: state.array_recuperados,
        fill: false,
        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
        tension: 0.4
      },
      {
        label: 'Cantidad de muertos',
        data: state.array_muertos,
        fill: false,
        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
        tension: 0.4
      }
    ]
  };
};
const printExcel = () => {
  const wb = XLSX.utils.book_new();
  const wsData = [
    ['Día', 'Cantidad de Sanos', 'Cantidad de Infectados', 'Cantidad de Recuperados', 'Cantidad de Muertos'],
    ...state.labels.map((label, index) => [
      label,
      state.array_sanos[index],
      state.array_infectados[index],
      state.array_recuperados[index],
      state.array_muertos[index]
    ])
  ];

  const ws = XLSX.utils.aoa_to_sheet(wsData);
  XLSX.utils.book_append_sheet(wb, ws, 'Simulación');

  const wsSummaryData = [
    ['Total Sanos', 'Total Infectados', 'Total Recuperados', 'Total Muertos'],
    [
      state.array_sanos.reduce((a, b) => a + b, 0),
      state.array_infectados.reduce((a, b) => a + b, 0),
      state.array_recuperados.reduce((a, b) => a + b, 0),
      state.array_muertos.reduce((a, b) => a + b, 0)
    ]
  ];

  const wsSummary = XLSX.utils.aoa_to_sheet(wsSummaryData);
  XLSX.utils.book_append_sheet(wb, wsSummary, 'Resumen');

  XLSX.writeFile(wb, 'Simulacion.xlsx');
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--p-text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
  const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      },
      y: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      }
    }
  };
}

const pauseAndActiveSimulation = () => {
  console.log('Pausar/Reanudar Simulacion');
  // code here
  let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/pandemia/pause',
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
}

</script>

<style>
a {
  color: white;
}

.p-chart.comple_screen {
  background: white;
}

.p-card {
  margin: 2%;
}

.p-togglebutton.p-togglebutton-checked {
  background-color: #2f3664 !important;
}
</style>
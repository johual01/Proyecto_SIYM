import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  count: 0,
  array_sanos: [],
  array_infectados: [],
  array_recuperados: [],
  array_muertos: [],
  cant_sanos: 0,
  cant_infectados: 0,
  cant_recuperados: 0,
  cant_muertos: 0,
  labels: []
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = "http://localhost:3000";

export const socket = io(URL);

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

socket.on("newCycleFront", (result) => {
  console.log('New cycle!')
  console.log(result)
  count += 1;
  state.labels.push(count);
  state.array_infectados.push(result.sick)
  state.cant_infectados = result.sick
  state.array_sanos.push(result.healthy)
  state.cant_sanos = result.healthy
  state.array_recuperados.push(result.recovered)
  state.cant_recuperados = result.recovered
  state.array_muertos.push(result.dead)
  state.cant_muertos = result.dead
});
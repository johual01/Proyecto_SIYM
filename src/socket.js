import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  cycleCounter: 0,
  cycleResults: []
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
  state.cycleCounter += 1;
  state.cycleResults.push(result);
});
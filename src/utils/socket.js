// src/utils/socket.js
import { io } from "socket.io-client";

// Setup connection
const socket = io("http://localhost:7000", {
  withCredentials: true,
});

export { socket };

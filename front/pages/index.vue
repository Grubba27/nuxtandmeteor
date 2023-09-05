<template>
  <h1>Hello world! and open your terminal</h1>
  <button @click="hello">Say hello</button>
  <button @click="clickForPong">Say pong</button>
  <button @click="clickForAoba">Say aoba!</button>

</template>

<script setup>
import { onMounted } from 'vue';
import MeteorSDK from "meteor-sdk";
import ws from 'isomorphic-ws';

const server = new MeteorSDK({ // this should be in a global file
  endpoint: "ws://localhost:4000/websocket", // localhost:4000 is the default for this project
  SocketConstructor: ws,
  reconnectInterval: 5000
})

server.on('connected', () => {
  console.log('Connected to Meteor server!')
})

function hello() {
  console.log('Hello world!')
}

async function clickForPong() {
  const pong = await server.call('Example.ping')
  console.log(pong)
}
async function clickForAoba() {
  const pong = await server.call('Books.aoba')
  console.log(pong)
}
onMounted(() => {
  console.log('Connecting to Meteor server!')
})
</script>

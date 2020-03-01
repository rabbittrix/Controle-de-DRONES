const readline = require('readline')
const {createSocket} = require('dgram')
const CommanderParse = require('./CommanderParse')
const Commander = require('./Commander')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const TELLO_CMD_PORT = 8889
const TELLO_CMD_HOST = '192.168.10.1'

const getSocket = ()=>{
  const socket = createSocket('udp4')
  socket.bind(TELLO_CMD_PORT)
  return socket
}
(async function start(){
  const socket = getSocket()
  const cmder = new Commander(socket, TELLO_CMD_HOST, TELLO_CMD_PORT)
  await cmder.sendInitCommend()
  const cmdp = new CommanderParse({
    onTakeoff: async () => {await cmder.sendTakeOff()},
    onLand: async () => {await cmder.sendLand()},
    onForward: async (dist) => {await cmder.sendForward(dist)},
    onBack: async (dist) => {await cmder.sendBack(dist)},
    onRight: async (dist) => {await cmder.sendRight(dist)},
    onLeft: async (dist) => {await cmder.sendLeft(dist)},
    onCw: async (dist) => {await cmder.sendCw(dist)},
    onCcw: async (dist) => {await cmder.sendCcw(dist)},
    onFlip: async () => {await cmder.sendFlip()},
    onBattery: async () => {await cmder.getBattery()}
  })
  console.log('Starting !')
  socket.on('message', (msg)=>{
    console.log(`Drone: ${msg.toString()}`)
  })
  socket.on('error', (err)=>{
    console.log(`Drone: ${err}`)
  })
  socket.on('listening', ()=>{
    console.log('Socket is listening...')
  })
  console.log('Enter a commander:')
  rl.on('line', (line)=>{
    if(!cmdp.parseCommand(line)){
      if(line == 'exit'){
        console.log('Bye bye')
        process.exit(0)
      }
      console.log('Not a valid command')
    }
  })
})()
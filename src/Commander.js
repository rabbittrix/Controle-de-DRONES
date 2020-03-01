class Commander{
  constructor(socket, host, port){
    this.socket = socket;
    this.host = host;
    this.port = port;
  }
  // Connection with drone
  sendInitCommend(){
    return new Promise((res, rej)=>{
      this.socket.send('command', 0, 'command'.length, this.port, this.host, (err)=>{
        if(err){
          return rej(err)
        }else{
          return res()
        }
      })
    })
  }
  // Decola o drone
  sendTakeOff(){
    return new Promise((res, rej)=>{
      this.socket.send('takeOff', 0, 'takeOff'.length, this.port, this.host, (err)=>{
        if(err){
          return rej(err)
        }else{
          return res()
        }
      })
    })
  }
  //
  sendLand(){
    return new Promise((res, rej)=>{
      this.socket.send('land', 0, 'land'.length, this.port, this.host, (err)=>{
        if(err){
          return rej(err)
        }else{
          return res()
        }
      })
    })
  }
  // Take forward direction 20 cm
  sendForward(distance=20){
    return new Promise((res, rej)=>{
      this.socket.send(`forward ${distance}`, 0, `forward ${distance}`.length, this.port, this.host, (err)=>{
        if(err){
          return rej(err)
        }else{
          return res()
        }
      })
    })
  }
  // Take back direction 20 cm
  sendBack(distance=20){
    return new Promise((res, rej)=>{
      this.socket.send(`back ${distance}`, 0, `back ${distance}`.length, this.port, this.host, (err)=>{
        if(err){
          return rej(err)
        }else{
          return res()
        }
      })
    })
  }
  // Take right direction 20 cm
  sendRight(distance=20){
    return new Promise((res, rej)=>{
      this.socket.send(`right ${distance}`, 0, `right ${distance}`.length, this.port, this.host, (err)=>{
        if(err){
          return rej(err)
        }else{
          return res()
        }
      })
    })
  }
  // Take left direction 20 cm
  sendLeft(distance=20){
    return new Promise((res, rej)=>{
      this.socket.send(`left ${distance}`, 0, `left ${distance}`.length, this.port, this.host, (err)=>{
        if(err){
          return rej(err)
        }else{
          return res()
        }
      })
    })
  }
  // Rotacionar o drone horario
  sendCw(distance=20){
    return new Promise((res, rej)=>{
      this.socket.send(`cw ${distance}`, 0, `cw ${distance}`.length, this.port, this.host, (err)=>{
        if(err){
          return rej(err)
        }else{
          return res()
        }
      })
    })
  }
  // Rotacionar o drone anti - horario
  sendCcw(distance=20){
    return new Promise((res, rej)=>{
      this.socket.send(`ccw ${distance}`, 0, `ccw ${distance}`.length, this.port, this.host, (err)=>{
        if(err){
          return rej(err)
        }else{
          return res()
        }
      })
    })
  }
  // Take flip direction back
  sendFlip(){
    return new Promise((res, rej)=>{
      this.socket.send(`flip b`, 0, `flip b`.length, this.port, this.host, (err)=>{
        if(err){
          return rej(err)
        }else{
          return res()
        }
      })
    })
  }
  // Take flip direction forward
  sendFlip(){
    return new Promise((res, rej)=>{
      this.socket.send(`flip f`, 0, `flip f`.length, this.port, this.host, (err)=>{
        if(err){
          return rej(err)
        }else{
          return res()
        }
      })
    })
  }
  // Take flip direction left
  sendFlip(){
    return new Promise((res, rej)=>{
      this.socket.send(`flip l`, 0, `flip l`.length, this.port, this.host, (err)=>{
        if(err){
          return rej(err)
        }else{
          return res()
        }
      })
    })
  }
  // Take flip direction right
  sendFlip(){
    return new Promise((res, rej)=>{
      this.socket.send(`flip r`, 0, `flip r`.length, this.port, this.host, (err)=>{
        if(err){
          return rej(err)
        }else{
          return res()
        }
      })
    })
  }
  // Take battery level
  getBattery(){
    return new Promise((res, rej)=>{
      this.socket.send(`battery`, 0, `battery`.length, this.port, this.host, (err)=>{
        if(err){
          return rej(err)
        }else{
          return res()
        }
      })
    })
  }
}
module.exports = Commander
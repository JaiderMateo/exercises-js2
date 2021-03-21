/*

Describe your own laptop as a JavaScript object

Try to think of as many properties as you can!

*/

let laptop = {
  brand: "Lenovo",
  screenSize: 13,
  isTouchscreen: true,
  CPU : {
    brand: "Intel",
    Cores: 4,
    threads: 8,
  },
  camera: "high vision",
  OS : {
    name:"windows",
    version:"10 pro",
  },
  storage: ["HDD", "SDD", "cdrom", "floppy", "pendrive", "microSD"],
  ports:["HDMI", "USB", "ethernet", "usb-c"],
  turnOn: ()=>{
    console.log("peep poop");
  }
};
laptop.turnOn();
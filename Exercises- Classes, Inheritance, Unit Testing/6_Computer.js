'use strict';
function solve() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            // if(new.target === Computer){
            //     throw new Error('Abstract class can not instanciate');
            // }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this._battery = battery;
        }

        get battery() {
            if (!this._battery instanceof Battery) {
                throw new TypeError('battery property is not of type Battery')
            } else {
                return this._battery
            }
        }

        set battery(newBattery) {
            if (!newBattery instanceof Battery) {
                throw new TypeError('battery property is not of type Battery')
            } else {
                this._battery = newBattery;
            }
        }
    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this._keyboard = keyboard;
            this._monitor = monitor;
        }

        get keyboard() {
            if (!this._keyboard instanceof Keyboard) {
                throw new TypeError('keyboard property is not of type Keyboard')
            } else {
                return this._keyboard
            }
        }

        set keyboard(newKeyboard) {
            if (!newKeyboard instanceof Keyboard) {
                throw new TypeError('keyboard property is not of type Keyboard')
            } else {
                this._keyboard = newKeyboard;
            }
        }

        get monitor() {
            if (!this._monitor instanceof Monitor) {
                throw new TypeError('monitor property is not of type Monitor')
            } else {
                return this._monitor
            }
        }

        set monitor(newMonitor) {
            if (!newMonitor instanceof Monitor) {
                throw new TypeError('monitor property is not of type Monitor')
            } else {
                this._monitor = newMonitor;
            }
        }

    }
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
//Test the code
// let classes = solve();
// let Computer = classes.Computer;
// let Laptop = classes.Laptop;
// let Desktop = classes.Desktop;
// let Monitor = classes.Monitor;
// let Battery = classes.Battery;
// let Keyboard = classes.Keyboard;
//
// let keyboard = new Keyboard('Logitech', 70);
// let monitor = new Monitor('Benq', 28, 18);
// let desktop = new Desktop("JAR Computers", 3.3, 8, 1, keyboard, monitor);
//
// console.log(keyboard);
// console.log(desktop);
// console.log(monitor);
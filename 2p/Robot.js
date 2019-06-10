class Robot {
    constructor (name){
	this.name = name;
    };
    speak(){console.log('Hi, Im a Robot hee-hee');};
    makeCoffee(){console.log('Im making a coffee');};
    blinkLight(){console.log('Blink light');};
};
var a = new Robot('aRobot');
a.name
a.speak()

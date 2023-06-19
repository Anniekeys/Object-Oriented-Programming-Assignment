class digitalClock{
    constructor(elementId){
        this.clockElement = document.getElementById(elementId);
        this.intervalId = null;
    }

    updateTime(){
        const now = new Date();
        const currentTime = now.toLocaleTimeString();
        this.clockElement.textContent = currentTime
    }

    start(){
        this.updateTime();
        this.intervalId =setInterval(() =>{
            this.updateTime();
        }, 1000);
    }
}
const clock = new digitalClock("clock");
clock.start();
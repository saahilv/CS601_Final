const {createApp} = Vue

const sourceImg = {
    0:  { 
        src: "Media/Piano.png",
        alt: "Playing the Piano"
    },
    1:  {
        src: "Media/Guitar.png",
        alt: "Playing the Guitar"
    },
    2:  {
        src: "Media/Paddleboard.png",
        alt: "Paddleboarding"
    },
    3:  {
        src: "Media/Travel.png",
        alt: "Traveling"
    }
}

createApp({
    data() {
        return {
            count: 0,
            imageSource: sourceImg[0],
        }
    }, methods: {
        changeImage() {
            this.count = (this.count + 1) % 4;
            this.imageSource = sourceImg[this.count];
        } 
    }
}).mount('#app')
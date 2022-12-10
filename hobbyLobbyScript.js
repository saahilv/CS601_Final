const {createApp} = Vue

const overlayMessages = {
    "guitar": "I have been playing the guitar since 20xx and was in my high school rock band.",
    "piano": "I have been playing the piano.",
    "travel": "I love to travel.",
    "netflix": "My favorite way to relax is by watching TV",
    "gym": "I go to the gym to feel good and sometimes my wife manages to drag me out on a run",
    "paddleboard": "I love to paddleboard after work during the summer",
}

createApp({
    data() {
        return {
            showMessage: false,
            message: ""
        }
    }, methods: {
        changeMessage(image) {
            this.showMessage = true;
            this.message = overlayMessages[image];
        },
        hideMessage() {
            this.showMessage = false;
        }
    }
}).mount('#app')
const {createApp} = Vue

createApp({
    data() {
        return {
            showMessage: false,
            message: ""
        }
    }, methods: {
        showMessage(message) {
            this.showMessage = true;
            this.message = message;
        },
        hideMessage() {
            this.showMessage = false;
        }
    }
}).mount('#app')
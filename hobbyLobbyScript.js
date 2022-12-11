const {createApp} = Vue

const overlayMessages = {
    "amsterdam": "TODO",
    "cliff": "TODO",
    "guitar": "I have been playing the guitar since 20xx and was in my high school rock band.",
    "italy": "TODO",
    "keys": "TODO",
    "luau": "TODO",
    "mailbox": "TODO",
    "maple": "TODO",
    "mexico": "TODO",
    "paddleboarding": "TODO",
    "piano": "I have been playing the piano.",
    "rainier": "TODO",
    "rainier2": "TODO",
    "rattlesnake": "TODO",
    "workingout": "I go to the gym to feel good and sometimes my wife manages to drag me out on a run",
    "yellowstone": "TODO",

}

createApp({
    data() {
        return {
            currentImg: null,
            isShown: false,
            message: ""
        }
    }, methods: {
        changeMessage(imageId) {
            this.currentImg = imageId;
            this.isShown = true;
            this.message = overlayMessages[imageId]
        },
        hideMessage() {
            this.currentImg = null;
            this.isShown = false;
        }
    }
}).mount('#app')
const {createApp} = Vue

const overlayMessages = {
    "amsterdam": "Hanging out with my younger brother in amsterdam",
    "cliff": "Helcopter ride to a cliff in the middle of nowhere in Maui",
    "guitar": "I have been playing the guitar since 2005 and was in my high school rock band.",
    "italy": "Trying to push the leaning tower of Pisa beyond its limits",
    "keys": "Playing the keys for a rock concert in New Delhi",
    "luau": "Enjoying a luau with my wife",
    "mailbox": "12 miles and 4000 ft hike later, we were completely exhausted",
    "maple": "Hiking on maple pass",
    "mexico": "Posing in front of one of the wonders of the world",
    "paddleboarding": "Paddleboarding on Lake Washington close to sunset",
    "piano": "Playing the piano for an audience in Lianoning Province, China",
    "rainier": "Hike to Mt. Rainier",
    "rainier2": "Another hike to Mt. Rainier",
    "rattlesnake": "Hiking up rattlesnake ledge",
    "workingout": "I go to the gym to feel good and sometimes my wife manages to drag me out on a run",
    "yellowstone": "Love visiting national parks, this one is from yellowstone, one of my favorite National Parks in US",

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
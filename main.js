//   import haikuObject from "./assets/haikus.js";
// When I try to import this, I get the error 'cannot use import statement outside a module'. 

const app = Vue.createApp({
    data() {
        return {
            test: "Haiku",
            confucius: "./assets/images/confuciusnightbar.png",
            confuciusBorder: ["red", "blue", "pink", "yellow"],
            confuciusBorderIndex: 0,
            mainHaiku: "",
            searchInput: "",
            localTime: ""
        }
    },
    methods: {
        dealWithInput(event) {
            this.searchInput = event.target.value;
            console.log(this.searchInput)
        },
        dealWithRandomClick(payload) {
            this.mainHaiku = payload.randomHaiku;
        },
        dealWithSearchClick(payload) {
            this.mainHaiku = payload.haikuBody;
        },
        controlImageInterval() {
            var time = this;
            setInterval(() => {
                //this cool logic suggested by chatGPT, gives the remainder of an integer division... 
                //e.g. if the index is 0, it'll be (0+1) /4 gives remainder 1. Next time it'll be 1+1 / 4 gives remainder 2... but 3+1 / 4 gives remainder 0
                this.confuciusBorderIndex = (this.confuciusBorderIndex + 1) % this.confuciusBorder.length;
            }, 3000);
        }
    },
    computed: {
        imageStyle() {
            return {
                border: `3px solid ${this.confuciusBorder[this.confuciusBorderIndex]}`,
                padding: '15px',
            };
        },
    },
    mounted() {
        this.controlImageInterval()
    }
})
//   import haikuObject from "./assets/haikus.js";
// When I try to import this, I get the error 'cannot use import statement outside a module'. 

const app = Vue.createApp({
    data() {
        return {
            test: "Haiku",
            confucius: "./assets/images/confuciusnightbar.png",
            mainHaiku: "",
            searchInput: ""
        }
    },
    methods: {
        dealWithInput(event) {
                this.searchInput = event.target.value;
                console.log(this.searchInput)
        },
        dealWithRandomClick() {
            const ranNumber = Math.floor(Math.random() * 3)
            this.mainHaiku = haikus[ranNumber];
        },
        dealWithSearchClick(payload) {
            this.mainHaiku = payload.haikuBody 
            console.log(this.mainHaiku)
        }
    },
})
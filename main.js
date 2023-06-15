const haikus = [
    "haikuone",
    "haikutwo",
    "haikuthree"
]

const app = Vue.createApp({
    data() {
        return {
            test: "Haiku",
            confucius: "./assets/images/confuciusnightbar.png",
            searchInput: "Hello World",
            ourHaiku: "",
            haikuCounter: 0
        }
    },
    methods: {
        dealWithInput(event) {
            this.searchInput = event.target.value;
            console.log(this.searchInput)
        },
        dealWithClick(){
            const ranNumber = Math.floor(Math.random()*3)
            this.ourHaiku = haikus[ranNumber];
        }
    },
})
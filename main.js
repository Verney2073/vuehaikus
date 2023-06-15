const app = Vue.createApp({
    data() {
        return {
            test: "Haiku",
            confucius: "./assets/images/confuciusnightbar.png",
            searchInput: "Hello World"
        }
    },
    methods: {
        dealWithInput(event) {
            this.searchInput = event.target.value;
            console.log(this.searchInput)
        },
        dealWithClick(){
            console.log("I was clicked!")
        }
    },
})
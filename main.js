//   import haikuObject from "./assets/haikus.js";
// When I try to import this, I get the error 'cannot use import statement outside a module'. 

const haikus = [
    "haikuone",
    "haikutwo",
    "haikuthree"
]

const haikuObject = [
    {
        title: "Autumn",
        body: "Autumn is great,\nSitting and napping,\nAll day long",
        author: "James Tribe"
    },
    {
        title: "Whispering Wind",
        body: "Gentle breeze whispers,\nCarrying secrets of life,\nNature's lullaby",
        author: "Sakura Nakamura"
    },
    {
        title: "Moonlit Night",
        body: "Moon shines in the night sky,\nGuiding wanderers below,\nSilver luminescence",
        author: "Ethan Johnson"
    },
    {
        title: "Cherry Blossoms",
        body: "Pink petals dancing,\nFragrant embrace fills the air,\nSpring's fleeting beauty",
        author: "Aria Lee"
    },
    {
        title: "Mountain Serenity",
        body: "Peaceful mountain view,\nSilent majesty unfolds,\nNature's sanctuary",
        author: "Kai Chen"
    }
];

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
        dealWithClick() {
            const ranNumber = Math.floor(Math.random() * 3)
            this.ourHaiku = haikus[ranNumber];
        },
        dealWithSearchClick() {
            ourSearch = this.searchInput.toLowerCase();
            for (let i = 0; i < haikuObject.length; i++) {
                lowerCaseHaiku = haikuObject[i].body.toLowerCase()
                if (lowerCaseHaiku.includes(ourSearch)) {
                    this.ourHaiku = haikuObject[i].body
                    break;
                }
            }
        }
    },
})
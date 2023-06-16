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

app.component('main-search-bar', {
  props: {
    haikuBody: {
      type: String
    }
  },
  template:
    `<div> 
    <input v-on:input="searchBarInput"></input>
    <button class="submit-button" @:click="dealWithSearchClick">Search Haiku</button>
    <button class="submit-button" @:click="dealWithClick">Get me a Random Haiku</button>
    </div>`,
  data() {
    return {
      test: "Haiku",
      confucius: "./assets/images/confuciusnightbar.png",
      ourHaiku: "",
      haikuCounter: 0,
      searchInput: ""
    }
  },
  methods: {
    searchBarInput(event) {
      this.searchInput = event.target.value;
      console.log(this.searchInput)
    },
    dealWithClick() {
      const ranNumber = Math.floor(Math.random() * 3)
      this.ourHaiku = haikus[ranNumber];
    },
    dealWithSearchClick() {
      if(this.searchInput !== ""){
      ourSearch = this.searchInput.toLowerCase();
      for (let i = 0; i < haikuObject.length; i++) {
        lowerCaseHaiku = haikuObject[i].body.toLowerCase()
        if (lowerCaseHaiku.includes(ourSearch)) {
          this.ourHaiku = haikuObject[i].body
          this.$emit('deal-with-search-click',{ haikuBody: this.ourHaiku })
          break;
        }
      }
    };
  }
  },
}) 
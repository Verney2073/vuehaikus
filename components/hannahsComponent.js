app.component("hannahs-component", {
  template: `<div id=hannahsDiv>  
  <ul id=hannahsHaikuList>
        <li v-for="haiku in haikus" :key="haiku.id" >
          <h2 >{{ haiku.name }}</h2>

            <p> {{ haiku.content }}</p>
            <button @click="likeHaiku(haiku.id)" :style="{borderColor: haiku.haikuLiked ? 'red' : 'blue'}">
            {{haiku.haikuLiked ? 'Dislike' : 'Like'}}
          </button>
        </li>
      </ul> 
      </div>`,

  data() {
    return {
      haikus: [
        {
          id: 1,
          name: "The Old Pond",
          content:
            "An old silent pond, A frog jumps into the pond, Splash! Silence again.",
          haikuLiked: false,
        },
        {
          id: 2,
          name: "Over The Wintry",
          content:
            "Over the wintry, Forest, winds howl in rage, With no leaves to blow.",
          haikuLiked: false,
        },
      ],
    };
  },
  methods: {
    likeHaiku(id) {
      console.log("Haiku liked");
      this.haikus[id - 1].haikuLiked = !this.haikus[id - 1].haikuLiked;
    },
  },
});

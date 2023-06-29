app.component("display-haiku", {
  template: `<div> 
              <h2 >{{ haikuName }}</h2>
                <p> {{ haikuContent }}</p>
                      <button id=hannahsButton @click="likeHaiku(haikuId)" :style="{borderColor: haikuLiked ? 'red' : 'blue'}">
            {{haikuLiked ? 'Dislike' : 'Like'}}
                      </button>
             </div>`,
  props: ["haikuId", "haikuName", "haikuContent"],
  data() {
    return {
      haikuLiked: false,
    };
  },
  methods: {
    likeHaiku(id) {
      console.log("Haiku liked");
      this.haikuLiked = !this.haikuLiked;
    },
  },
});

app.component('haiku-render-box', {
    props: {
        haikuBody: {
            type: String
        }
    },
    template:
        `<div class="haiku-box"> 
          <p class="poem-styling" v-html="formatAsPoem(haikuBody)">  </p> 
          </div>`,
    data() {
        return {
        }
    },
    methods: {
        // this still doesn't successfully create line-breaks. It should be possible to create line-breaks without adjusting the haikuBody directly
        formatAsPoem(haikuBody) {
            return haikuBody.replace(/\n/g, '<br></br>');
        }
    },
}) 
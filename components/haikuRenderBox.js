app.component('haiku-render-box', {
    props: {
        haikuBody: String
    },
    template:
        `<div class="haiku-box"> 
          <p class="poem-styling" >{{ haikuBody }} </p> 
          </div>`,
    data() {
        return {
            formattedHaikuBody: ''
        }
    },
    watch: {
        mainHaiku: {
            immediate: true,
            handler(newHaikuBody) {
                this.formattedHaikuBody = this.formatAsPoem(newHaikuBody);
            }
        }
    },
    methods: {
        // this still doesn't successfully create line-breaks. It should be possible to create line-breaks without adjusting the haikuBody directly
        formatAsPoem(haikuBody) {
            if (haikuBody == undefined) {
                console.log("haikuBody is undefined")
            } else { console.log(haikuBody) }
            // return haikuBody.replace(/\n/g, '<br></br>');
        }
    },
}) 
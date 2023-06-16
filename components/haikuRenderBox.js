app.component('haiku-render-box', {
        props: {
            haikuBody: {
                type: String
            } 
        },
        template: 
        `<div class="haiku-box"> 
          <p v-show="haikuBody !== ''"> {{haikuBody}}  </p> 
          </div>`, 
          data() {
            return {
            }
        },
        methods: {
            
        },
    }) 
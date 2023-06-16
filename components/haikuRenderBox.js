app.component('haiku-render-box', {
        props: {
            haikuBody: {
                type: String
            } 
        },
        template: 
        `<div class="haiku-box"> 
          <p > {{haikuBody}}  </p> 
          </div>`, 
          data() {
            return {
            }
        },
        methods: {
            
        },
    }) 
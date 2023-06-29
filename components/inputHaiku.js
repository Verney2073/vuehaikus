app.component("input-haiku", {
  template: `<div id=hannahsDiv> 
  <h1>Enter a haiku</h1>
  <label for="Name">Name:</label> 
  <input label="Name" type="text" v-model="enteredHaikuName">
  <br></br>
  <textarea rows=3 v-model="enteredHaikuContent"></textarea>
  <br></br>
  <button @click="addHaiku">Submit</button> 
   </div>`,

  data() {
    return {
      enteredHaikuName: "",
      enteredHaikuContent: "",
    };
  },
  methods: {
    addHaiku() {
      this.$emit("new-haiku-added", {
        name: this.enteredHaikuName,
        content: this.enteredHaikuContent,
      });
      this.enteredHaikuName = "";
      this.enteredHaikuContent = "";
    },
  },
});

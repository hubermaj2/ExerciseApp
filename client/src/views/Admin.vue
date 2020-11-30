
<script src="..\..\..\server\models\admin.js"></script>
<template>
  <div id="submit" class="admin">
    <h1>Admin Tools</h1>

    <h1 class="title">
        Edit exercises
      </h1>
      <div><br>Add an Exercise:</div>
        <input v-model="exercisename" type="text" ref="my_input">
        <button v-on:click="submit">Submit</button>
  </div>
</template>

<script>

import admin from "../../../server/models/admin.js"
import axios from "axios"
import submitbackend from "../../../server/models/admin.js"
// @ is an alias to /src
// document.getElementById('textbox').value
export default {
  name: 'Admin',
  data: {
    exercisename: ''
  },
  components: {

  },
  methods:{
      submit: function (event){
        //submitbackend(this.exercisename);
        axios.post('https://damp-chamber-63928.herokuapp.com/admin/submit',
    {
      exercisename: this.exercisename
    }
    )
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
      }
  }
}
</script>

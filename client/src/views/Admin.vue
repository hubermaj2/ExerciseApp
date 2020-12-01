<template>
  <div id="submit" class="admin">
    <br>
    <h1>Admin Tools</h1>

    <h1 class="title">
        Add an exercise
      </h1>
      <div>Exercise Name:</div>
        <input v-model="exercisename" type="text" ref="my_input">
        <div><br>Type:</div>
        <div class="select is-multiple">
          <select v-model="type" multiple size="3">
            <option value="Cardio">Cardio</option>
            <option value="Resistance">Resistance</option>
            <option value="Stretch">Stretch</option>
          </select>
        </div>
        <div><br>Muscle Group:</div>
        <div class="select is-multiple">
          <select v-model="musclegroup" multiple size="4">
            <option value="Legs">Legs</option>
            <option value="Arms">Arms</option>
            <option value="Back">Back</option>
            <option value="Core">Core</option>
          </select>
        </div>
        <br>
        <button v-on:click="submit">Submit</button>
        
  </div>
</template>

<script>

import axios from "axios"
import session from "@/models/session"
// @ is an alias to /src
// document.getElementById('textbox').value
export default {
  name: 'Admin',
  data: {
    exercisename: '',
    type: '',
    musclegroup: ''
  },
  components: {

  },
  methods:{
      submit: function (event){
        axios.post('https://damp-chamber-63928.herokuapp.com/admin',
    {
      exercisename: this.exercisename,
      type: this.type,
      musclegroup: this.musclegroup
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

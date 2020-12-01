<template>
<div>
  <br>
    List of exercises:
    <br>
<!--<div class="dropdown is-active">
  <div class="dropdown-trigger">
    <button class="button">

      <span>Exercise Types</span>
      <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
      <a href="#" onmousedown="javascript:document.getElementById('list').innerHTML += 'Walking <br>'" class="dropdown-item">
        Walking
      </a>
      <a href="#" onmousedown="javascript:document.getElementById('list').innerHTML += 'Running <br>'" class="dropdown-item">
        Running
      </a>
      <a href="#" onmousedown="javascript:document.getElementById('list').innerHTML += 'Swimming <br>'" class="dropdown-item">
        Swimming
      </a>
      <a href="#" onmousedown="javascript:document.getElementById('list').innerHTML += 'Cycling <br>'" class="dropdown-item">
        Cycling
      </a>
      <a href="#" onmousedown="javascript:document.getElementById('list').innerHTML += 'Weight lifting <br>'" class="dropdown-item">
        Weight lifting
      </a>
      <a href="#" onmousedown="javascript:document.getElementById('list').innerHTML += 'Push-ups <br>'" class="dropdown-item">
        Push-ups
      </a>
      <a href="#" onmousedown="javascript:document.getElementById('list').innerHTML += 'Tennis <br>'" class="dropdown-item">
        Tennis
      </a>
      <a href="#" onmousedown="javascript:document.getElementById('list').innerHTML += 'Soccer <br>'" class="dropdown-item">
        Soccer
      </a>
    </div>
  </div>
</div> -->
<br>
{{"Name, Type, Muscle Group"}}
<br>
<ul id="example-1">
  <li v-for="item in exercises" :key="item.Name">
    {{ item.Name }}, {{ item.Type }}, {{ item.Muscle_Group }}
  </li>
</ul>

<!-- <div id="list"> Today's Exercises: <br> </div>-->
<br>
<h1 class="title">If there is an exercise you would like to see added to the list, 
  ask a site administrator to add it to the database for you.</h1>

</div>

</template>

<script>
import Sidebar from "@/components/Sidebar";
import Post from "@/components/Post";
import { posts } from "@/models/feed";
import session from "@/models/session";
import axios from "axios";
export default {
    data: function(){
        return {
            exercises: []
        }
    },
    components: {
        
    },
    methods: {
        getExercises: function() {

        var app = this;

         axios.get('https://damp-chamber-63928.herokuapp.com/users/exercises')
            .then(function (response) {
            app.exercises = response.data;
        })
        .catch(function (error) {
            console.log(error.message);
        });

      }
    },
    created() {
      this.getExercises();
    }
}

</script>

<style>
    .card {
        margin-bottom: 30px ;
    }
</style>
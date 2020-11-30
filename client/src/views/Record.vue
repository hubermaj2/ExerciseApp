<template>

  <!-- <div class="page">
      <h2 class="title is-2">Feed Page</h2>

        <div class="columns">
            <div class="column is-two-thirds">
                <Post v-for=" (x, i) in posts " 
                      :key="i"
                      :i="i"
                      :post="x" /> 
            </div>
            <div class="column is-one-third" @mouseenter="error">
                <Sidebar />
            </div>
        </div>
  </div> 
  
onclick="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" 
onblur="javascript:document.querySelector('.dropdown').classList.toggle('is-active')" aria-haspopup="true" aria-controls="dropdown-menu">
  -->
<div>
  <br>
    Select exercises from the list:
<div class="dropdown is-active">
  <div class="dropdown-trigger">
    <button class="button"


>
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
</div>
{{exercises}}
<div id="list"> Today's Exercises: <br> </div>

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
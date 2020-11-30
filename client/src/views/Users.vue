<template>
  <div class="page">
      <h2 class="title is-2">Users Page</h2>

        <table class="table is-narrow is-hoverable is-fullwidth">
            <thead><tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>E-Mail</th>
                <th>Password</th>
                <th>DOB</th>
                <th>Type</th>
            </tr></thead>
            <tbody>
                <tr v-for="user in users" :key="user.id"> 
                    <th>{{user.id}}</th>
                    <td>{{user.FirstName}}</td>
                    <td>{{user.LastName}}</td>
                    <td>{{user.email}}
                    <td>{{user.Password}}</td>
                    <td>{{user.DOB}}</td>
                    <td>{{user.User_Type}}</td>
                </tr>
            </tbody>
        </table>

  </div>
</template>

<script>

//import { getList } from "@/models/users";
//import users from "../../../server/models/users.js"
import session from "@/models/session";
import axios from "axios"
export default {
    data(){
        return {
            list: []
        }
    },
    //async created(){
        //this.list = await getList(); 
    //},
    components: {
        
    },
    methods: {
        getUsers(){
            axios.get('https://damp-chamber-63928.herokuapp.com/users')
        .then(response => (this.users = response.data))
    .catch(error => {
      console.log(error.message);
    });
        }
    },
     mounted() {
    axios
      .get("https://damp-chamber-63928.herokuapp.com/users/")
      .then(response => {
        this.results = response.data[1];
        console.log(this.results);
      })
      .catch(err => {
        throw err;
      });
  }
}
</script>

<style>

</style>
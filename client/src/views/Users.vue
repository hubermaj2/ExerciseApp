<template>
  <div class="page">
      <br>
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
                <tr v-for=" (x, i) in users " 
                      :key="i"
                      :i="i"
                      :post="x">
                    <th>{{x.id}}</th>
                    <td>{{x.FirstName}}</td>
                    <td>{{x.LastName}}</td>
                    <td>{{x.email}}</td>
                    <td>{{x.Password}}</td>
                    <td>{{x.DOB}}</td>
                    <td>{{x.User_Type}}</td>
                </tr>
            </tbody>
        </table>
        <br><br>
        <h1 class=title>Add a user:</h1>
         <div>First Name:</div>
        <input v-model="firstname" type="text" ref="my_input"><br>
        <div>Last Name:</div>
        <input v-model="lastname" type="text" ref="my_input"><br>
        <div>E-mail address:</div>
        <input v-model="email" type="text" ref="my_input"><br>
        <div>Password:</div>
        <input v-model="password" type="text" ref="my_input"><br>
        <button v-on:click="addUser">Submit</button>
  </div>
  
</template>

<script>

import { getList } from "@/models/users";
import session from "@/models/session";
import axios from "axios";
export default {
    data: function(){
        return {
            users: [],
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }
    },
    //async created(){
    //    this.list = await getList(); 
    //},
    components: {
        
    },
    methods: {
        getUsers: function() {

        var app = this;

         axios.get('https://damp-chamber-63928.herokuapp.com/users')
            .then(function (response) {
            app.users = response.data;
        })
        .catch(function (error) {
            console.log(error.message);
        });

      },
      addUser: function(event){
        axios.post('https://damp-chamber-63928.herokuapp.com/users',
    {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password
    }
    )
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
      }
    },
    created() {
      this.getUsers();
    }
}
</script>

<style>

</style>
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

  </div>
</template>

<script>

import { getList } from "@/models/users";
import session from "@/models/session";
import axios from "axios";
export default {
    data: function(){
        return {
            users: []
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

      }
    },
    created() {
      this.getUsers();
    }
}
</script>

<style>

</style>
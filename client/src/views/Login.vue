<template>

<div class="level section">

<div class="level-item">


    <!--<form>-->
        <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input v-model="email" class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <input v-model="password" class="input" type="password" placeholder="Password">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-success" v-on:click="login">
            Login
            </button>
            <button class="button is-primary" @click.prevent="fbLogin">
            FB Login
            </button>
        </p>
        </div>
    <!-- </form> -->
    </div>
</div>
</template>

<script>
import session from "@/models/session";
import Cookie from "universal-cookie";
import axios from "axios";
let auth2 = null;

export default {
    data:{
        email: '',
        password: ''
    },
    methods: {

        login: function(event){
            if (this.email == "admin@email.com" && password == "1234"){
                session.user = {
                    name: 'Admin',
                    handle: 'admin'
                }
                return;
            }
            axios.post('https://damp-chamber-63928.herokuapp.com/users/login',
            {
                email : this.email,
                password : this.password
        }
    )
            .then(response =>{
            console.log(response);
            verification = response.data;
            console.log(verification);
        })
        .catch(function (error) {
            console.log(error);
        });
        console.log(verification)
           /* session.user = {
                name: 'Rabbi Moshe Plotkin',
                handle: 'jewpaltz',
                profile: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/120552651_10102367831029710_8523278423201553541_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=Jnr3FRfM4FIAX8F5rC9&_nc_ht=scontent-lga3-1.xx&oh=14a477b3f03186158eccf30fe3a03bda&oe=5FA552C2'
            }
            session.addNotification('Yay! You logged in', 'success')
            const cookies = new Cookies();
            cookies.set('auth', "hi", {path: '/'});
            this.$router.push('feed')*/
        },
        fbLogin(){
            FB.login( authInfo =>{
                console.log(authInfo);
                FB.api("me?fields=id,name,email,picture", x=>{
                    session.user = {
                        name: x.name,
                        handle: x.email,
                        profile: x.picture.data.url
                    }
                    session.addNotification('Yay! You logged in', 'success')
                    this.$router.push('feed')
                    console.log(x)
                }  )
            }, { scope: 'public_profile,email,user_photos'})
        },
    }
}

///////////////////////////////////
//  Load facebook scripts
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '5373206126038310',
      cookie     : true,
      xfbml      : true,
      version    : 'v9.0'
    });
      
    FB.AppEvents.logPageView();   
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


</script>


<style>
    .button {
        margin: 3px;
    }
    figure.image {
        display: inline-block;
        box-sizing: border-box;
        padding: 5px;
        border: solid blue 1px;
        margin: 3px;
        border-radius: 5px;
        cursor: pointer;
    }
    figure.image:hover {
        padding: 0;
    }
</style>
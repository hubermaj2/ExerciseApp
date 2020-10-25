<template>

<div class="level section">
(type anything for now)
<div class="level-item">


    <form>
        <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input v-model="input.useremail" class="input" type="email" placeholder="Email">
            
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        <p>email is: {{ input.useremail }}</p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <input v-model="input.userpassword" class="input" type="password" placeholder="Password">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-success" @click.prevent="login">
            Login
            </button>
        </p>
        </div>
    </form>
    </div>
</div>
</template>

<script>
import session from "@/models/session";

export default {
    name: 'Login',
        data() {
            return {
                input: {
                    useremail: "",
                    userpassword: ""
                }
            }
        },
    methods: {
        login(){
            if (this.input.useremail == "admin@email.com" && this.input.userpassword == "1234"){
            session.user = {
                name: 'Admin',
                handle: 'admin',
                profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png'
            }
            session.addNotification("Welcome, " + this.input.useremail, 'success')
            }
            if (this.input.useremail == "exerciseguy@email.com" && this.input.userpassword == "1234"){
            session.user = {
                name: 'Exerciseguy',
                handle: 'exerciseguy',
                profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png'
            }
            session.addNotification("Welcome, " + this.input.useremail, 'success')
            }
            if (this.input.useremail == "admin@email.com" && this.input.userpassword == "1234"){
            session.user = {
                name: 'Exercisegal',
                handle: 'exercisegal',
                profile: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png'
            }
            session.addNotification("Welcome, " + this.input.useremail, 'success')
            }
            
            this.$router.push('record')
        }
    }
}
</script>

<style>
    
</style>
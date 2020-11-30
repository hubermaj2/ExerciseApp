
<script src="..\..\..\server\models\admin.js" type="text/javascript"></script>
<template>
  <div class="admin">
    <h1>Admin Tools</h1>

    <h1 class="title">
        This is the Admin Tools module. When the server side is implemented, Admins will be able to add, edit, and delete users, as well as view their exercise activity.
      </h1>
      <div><br>Add an Exercise:</div>
      <form action = ''  onsubmit="return submit(document.getElementById('textbox').value);">
        <input id=textbox class="input" type="text" placeholder="Text input">
        <input class="input" type="submit" value="Submit">
      </form>
  </div>
</template>

<script>
//import admin from "..\..\..\server\models\admin.js"
// @ is an alias to /src
// document.getElementById('textbox').value
export default {
  name: 'Admin',
  components: {
    
  },
  methods:{
  }
}
</script>

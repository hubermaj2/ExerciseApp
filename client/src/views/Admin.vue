<template>
  <div class="admin">
    <h1>Admin Tools</h1>

    <h1 class="title">
        This is the Admin Tools module. When the server side is implemented, Admins will be able to add, edit, and delete users, as well as view their exercise activity.
      </h1>
      <div><br>Add an Exercise:</div>
      <form action = ''  onsubmit="return confirm('Are you sure you want to add ' + document.getElementById('textbox').value + ' to the list of exercise types?');">
      <input id=textbox class="input" type="text" placeholder="Text input">
      <input class="input" type="submit" value="Submit">
      </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Admin',
  components: {
    
  }
}
</script>

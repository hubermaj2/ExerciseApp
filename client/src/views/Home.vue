<template>
  <div class="home">
    <h1>Welcome to ExerciseApp!</h1>

    <h1 class="title">
      </h1>
      <p v-if="session.user" class="subtitle">
        Click "Record" above to begin tracking your exercise!
      </p>
      <p v-else class="subtitle">
        Sign up or log in to begin!
      </p>
      
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>

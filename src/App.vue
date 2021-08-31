<template>
  <Lesson />
</template>

<script>
import Lesson from './components/Lesson.vue'

export default {
  name: 'App',
  components: {
    Lesson,
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

.bold {
  font-weight: bold;
}

.red {
  color: #f44336;
}

.brown {
  color: #c18425;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

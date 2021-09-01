<template>
  <Breadcrumb />
  <router-view />
</template>

<script>
import Breadcrumb from './components/Breadcrumb.vue'

export default {
  name: 'App',
  components: {
    Breadcrumb,
  },
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

.purple {
  color: #9a6dff;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.inline-flex-center {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <div class="back-button flex-center bold"
    v-on:click="goBack"
  >
    ＜
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
  },

  methods: {
    goBack() {
      if (this.$route.path !== '/') {
        this.$router.back();
      }
    },
  },
})
</script>

<style lang="scss">
.back-button {
  background-color: #9a6dff;
  color: #ffffff;
  width: 24px;
  height: 48px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  position: fixed;
  top: 45%;
  cursor: pointer;
}
</style>

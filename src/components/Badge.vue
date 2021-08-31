<template>
  <div class="badge inline-flex-center"
    :style="{
      backgroundColor: color,
    }">
    <span>{{ title }}</span>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
  },

  props: {
    title: [String, Number],
    color: String,
  },
})
</script>

<style lang="scss">
.badge {
  border-radius: 4px;
  height: 18px;
  line-height: 1.265rem;
  background-color: cyan;
  color: #ffffff;
  padding: 0 0.4rem;
  font-size: 0.8rem;

  span {
    height: 18px;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
  }
}
</style>

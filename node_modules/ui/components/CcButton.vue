<script setup lang="ts">
defineProps({
  label: String
})
</script>

<template>
<button class="cc-button">{{ label }}</button>
</template>

<style lang="css">
.cc-button {
  padding: 8px 16px;

  color: #eff6ff;
  background-color: #1e40af;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}

.cc-button:hover {
  background-color: #1e3a8a;
}
</style>

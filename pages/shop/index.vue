<script setup lang="ts">
import CcButton from 'ui/components/CcButton.vue'

defineOptions({
  name: 'ShopPage'
})
</script>

<template>
  <div>
    <div class="cc-main">Is test Shop!</div>
    <cc-button label="is main"/>
    <cc-test/>
    <ui-cc-test/>
  </div>
</template>

<style scoped>
.cc-main {
  color: #172554;
}
</style>

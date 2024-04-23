<script setup lang="ts">
defineProps();
const value = defineModel<boolean>()
</script>

<template>
  <label class="flex items-center justify-center w-full cursor-pointer h-full">
    <input class="hidden" v-model="value" type="checkbox" />
    <IconMoon v-if="value"/>
    <IconSun v-if="!value"/>
  </label>

</template>
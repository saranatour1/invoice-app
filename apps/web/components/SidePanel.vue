<script setup lang="ts">
import { computed } from 'vue'
import { useColorMode } from '@vueuse/core'
const color = useColorMode();
const isDark = computed<boolean>({
  get() {
    if (color.preference === 'system') {
      return color.value === 'dark'
    }
    return color.preference === 'dark'
  },
  set(value) {
    if (value) {
      color.preference = 'dark'
    } else {
      color.preference = 'light';
    }
  }
})
</script>

<template>
  <aside class="w-full h-full max-w-[6.4375rem] min-h-screen bg-13 rounded-tr-n rounded-br-n flex flex-col items-start justify-between dark:bg-03 transition-colors">
    <div class="w-full h-full max-w-[6.4375rem] min-h-[6.4375rem] bg-01 grid place-content-center rounded-tr-n rounded-br-n relative overflow-hidden">
      <IconLogo class="w-[40px] h-[37.5px] relative z-10 "/>
      <div class="w-full h-full max-w-[6.4375rem] min-h-[6.4375rem] absolute translate-y-1/2 bg-02 z-0 rounded-tl-n rounded-bl-n "/>
    </div>

    <div class="w-full flex flex-col items-center justify-normal pb-6 gap-y-6">
        <ThemeBtn v-model="isDark"/>
        <hr class="w-full text-14 h-[1px]"/>
        <Avatar class=" w-10 h-10 rounded-full"/>
    </div>
  </aside>
</template>
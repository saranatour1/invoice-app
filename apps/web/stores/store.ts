// stores/counter.js
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => {
    return { isDark: false }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    toggle() {
      this.isDark = !this.isDark;
    },
    setIsDark(val:boolean){
      this.isDark = val;
    }
  },
})
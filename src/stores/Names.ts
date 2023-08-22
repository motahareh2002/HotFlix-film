import { ref } from 'vue'
import type {Ref} from 'vue'
import { defineStore } from 'pinia'

export const UseName = defineStore('firstName', () => {
  const firstName:Ref<string > = ref('Motahareh')
  const lastName:Ref<string > = ref('Jafarian')
  return {firstName , lastName}
})

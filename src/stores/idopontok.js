import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFoglalasStore = defineStore('foglalasok', () => {
  const foglalasok = ref([])
  const loadAll = () =>{
    fetch("http://localhost:3000/foglalasok")
    .then(resp => resp.json())
    .then(data => foglalasok.value = data)
  }

  return{foglalasok, loadAll}
})

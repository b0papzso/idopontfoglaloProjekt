import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFoglalasStore = defineStore('foglalasok', () => {
  const foglalasok = ref([])
  const loadAll = () =>{
    fetch("http://localhost:3000/foglalasok")
    .then(resp => resp.json())
    .then(data => foglalasok.value = data)
  }
  const ujFoglalas = (day, hour, name, number) => {
    fetch("http://localhost:3000/foglalasok", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({day, hour, name, number})
    })
    .then(() => loadAll())
  }
  return{foglalasok, loadAll, ujFoglalas}
})

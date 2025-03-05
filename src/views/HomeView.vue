<template>
  <div class="container">
  <h1>Időpont foglalás műszaki vizsgára</h1>
  <label for="napSelect"><h3>Nap választása</h3></label>
  <select name="napSelect" id="napSelect" v-model="day" class="form-select">
    <option value="Hetfo">Hétfő</option>
    <option value="Kedd">Kedd</option>
    <option value="Szerda">Szerda</option>
    <option value="Csutortok">Csütörtök</option>
    <option value="Pentek">Péntek</option>
  </select>
  <div class="table mt-3" >
    <label for="allHours"><h3>Lehetséges időpontok</h3></label>
    <select name="allHours" class="form-select" >
      <option v-for="hour in options" :value="hour">{{ hour }}</option>
    </select>
  </div>
  <button class="btn btn-primary btn-outline-warning">Foglalás</button>
  </div>
</template>

<script setup>
import { useFoglalasStore } from '@/stores/idopontok';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const foglalasokStore = useFoglalasStore()
const options = ref([8, 9, 10, 11, 12, 13, 14, 15, 16])
var day = ref()
var showHours = false;
if(day.value != null)
{
  showHours = true
}
console.log(day.value)
</script>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
var day = ref()
var showHours = false;
if(day.value != null)
{
  showHours = true
}
</script>

<template>
  <div class="container">
  <h1>Időpont foglalás műszaki vizsgára</h1>
  <label for="napSelect">Nap választása</label>
  <select name="napSelect" id="napSelect" v-model="day" class="form-select">
    <option value="Hetfo">Hétfő</option>
    <option value="Kedd">Kedd</option>
    <option value="Szerda">Szerda</option>
    <option value="Csutortok">Csütörtök</option>
    <option value="Pentek">Péntek</option>
  </select>
  <div class="table" v-if="showHours">Krumplibogár</div>
  </div>
</template>

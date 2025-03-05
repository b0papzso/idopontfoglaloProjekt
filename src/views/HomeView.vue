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
  <div class="table mt-3" v-if="showHours">
    <label for="allHours"><h3>Szabad időpontok</h3></label>
    <select name="allHours" class="form-select" v-model="hourValue">
      <option v-for="hour in options" :value="hour" >{{ hour }}</option>
    </select>
  </div>
  <button class="btn btn-primary btn-outline-warning" :disabled="!showHours">Foglalás</button>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import { useFoglalasStore } from '@/stores/idopontok';
import { useRouter } from 'vue-router';

const router = useRouter();
const foglalasokStore = useFoglalasStore();
const options = ref([8, 9, 10, 11, 12, 13, 14, 15, 16]);
const day = ref(null);
const hourValue = ref(null);
const showHours = ref(false); 

// Figyeli a day változást, és ha van értéke, beállítja showHours-t
watch(day, (newVal) => {
  console.log("Selected day:", newVal);
  showHours.value = newVal !== null;
  options.value = ([8, 9, 10, 11, 12, 13, 14, 15, 16]);
  showAllHours()
  
});

const showAllHours = () =>{
  
  foglalasokStore.foglalasok.forEach(foglalas =>{
    if(foglalas.day == day.value)
    {
      options.value.find(p => p == foglalas.hour)
    }
  })
  
}

onMounted(() => {
  foglalasokStore.loadAll()
})
</script>



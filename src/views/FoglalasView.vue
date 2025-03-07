<template>
  <div class="container">
    <h1>Időpont foglalása</h1>
    <label for="nevInput">Név</label>
    <input type="text" v-model="nev" class="form-control" placeholder="Neve" id="nev">
    <label for="tInput">Telefonszám</label>
    <input type="text" class="form-control" placeholder="Telefonszáma" v-model="tSzam" id="tSzam">
    <button class="btn btn-success btn-outline-warning" @click="foglalas()" id="button">Foglalás</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Toast, { useToast } from "vue-toastification";
import { useFoglalasStore } from '@/stores/idopontok';

const toast = useToast();
const route = useRoute();
const router = useRouter();
const foglalasokStore = useFoglalasStore();
const day = ref()
const hourValue = ref()
if(route)
{
  day.value = route.query.day;
  hourValue.value = route.query.hour;
}

const nev = ref("");
const tSzam = ref("");

const foglalas = () => {
  if (nev.value === "" || tSzam.value === "") {
    toast.error("Kérem töltse ki a mezőket!");
    return;
  } else {
    toast.success("Sikeres foglalás!");
    foglalasokStore.ujFoglalas(day.value, hourValue.value, nev.value, tSzam.value);
    if(router)
    {
      router.push('/');
    }
    
  }
};
</script>
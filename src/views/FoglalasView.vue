<template>
  <div class="container">
    <h1>Időpont foglalása</h1>
    <label for="nevInput">Név</label>
    <input type="text" v-model="nev" class="form-control" placeholder="Neve">
    <label for="tInput">Telefonszám</label>
    <input type="text" class="form-control" placeholder="Telefonszáma" v-model="tSzam">
    <button class="btn btn-success btn-outline-warning" @click="foglalas">Foglalás</button>
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

const day = ref(route.query.day);
const hourValue = ref(route.query.hour);
const nev = ref("");
const tSzam = ref("");

const foglalas = () => {
  if (nev.value === "" || tSzam.value === "") {
    toast.error("Kérem töltse ki a mezőket!");
    return;
  } else {
    toast.success("Sikeres foglalás!");
    foglalasokStore.ujFoglalas(day.value, hourValue.value, nev.value, tSzam.value);
    router.push('/');
  }
};
</script>
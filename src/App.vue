<script setup>
import { ref } from 'vue';

const data = ref({
  id: '',
  nombre: '',
  apellido: '',
  email: ''
});

const detalles = ref([
  { id: '1', nombre: 'Juan', apellido: 'Perez', email: 'juan@example.com' },
  { id: '2', nombre: 'Ana', apellido: 'Gomez', email: 'ana@example.com' }
]);

function seleccionarDetalle(detalle) {
  data.value = detalle;
}
</script>

<template>
  <div>
    <router-link to="/detalle">Detalle</router-link>
    <router-link to="/receptor">Receptor</router-link>
    <router-view :data="data" :detalles="detalles" @seleccionar-detalle="seleccionarDetalle"/>
  </div>
</template>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
}
</style>
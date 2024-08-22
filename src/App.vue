<script setup>
import { ref } from 'vue';
import Receptor from './components/Receptor.vue';
import Detalle from './components/Detalle.vue';

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
  <div class="column" id="Detalle">
    <Detalle :detalles="detalles" @seleccionar-detalle="seleccionarDetalle"/>
  </div>
  <div class="column" id="Receptor">
    <Receptor :data="data"/>
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
<script setup>
import { ref } from 'vue';
import Modal from './components/Modal.vue';

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

const showModal = ref(false);

function seleccionarDetalle(detalle) {
  data.value = detalle;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>

<template>
  <div>
    <router-view :data="data" :detalles="detalles" @seleccionar-detalle="seleccionarDetalle"/>
    
    <Modal v-if="showModal" @close="closeModal">
      <h1>Zona de Detalle</h1>
      <p><strong>ID:</strong> {{ data.id }}</p>
      <p><strong>Nombre:</strong> {{ data.nombre }}</p>
      <p><strong>Apellido:</strong> {{ data.apellido }}</p>
      <p><strong>Email:</strong> {{ data.email }}</p>
    </Modal>
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
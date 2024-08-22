<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div>
        <h1>Zona de Detalle</h1>
        <p><strong>ID:</strong> {{ data.id }}</p>
        <p><strong>Nombre:</strong> {{ data.nombre }}</p>
        <p><strong>Apellido:</strong> {{ data.apellido }}</p>
        <p><strong>Email:</strong> {{ data.email }}</p>
    </div>
</template>

<style scoped>
/* Estilos para los datos seleccionados */
p {
  margin: 5px 0;
}
</style>
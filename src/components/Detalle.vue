<script>
export default {
    props: {
        detalles: {
            type: Array,
            required: true
        }
    },
    methods: {
        seleccionarDetalle(detalle) {
            this.$emit('seleccionar-detalle', detalle);
        }
    }
}
</script>

<template>
    <div>
        <h1>Tabla</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="detalle in detalles" :key="detalle.id" @click="seleccionarDetalle(detalle)">
                    <td>{{ detalle.id }}</td>
                    <td>{{ detalle.nombre }}</td>
                    <td>{{ detalle.apellido }}</td>
                    <td>{{ detalle.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
/* Estilos para la tabla */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

tr:hover {
  background-color: #f5f5f5;
  cursor: pointer;
}
</style>
<script lang="ts">
export default {
    data() {
        return {
            test: "Vue running",
            counter: 0,
        };
    },
};
</script>

<template>
    <h1>Vue 3 + Vuetify + Vite Application Test 2</h1>
    {{ test }}
    <h3>{{ counter }}</h3>

    <v-btn color="success" class="mr-2" @click="counter++" icon="mdi-plus-circle"></v-btn>
    <v-btn color="error" @click="counter--" icon="mdi-minus-circle"></v-btn>

    <v-list-group value="Test">
        <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Test"></v-list-item>
        </template>

        <v-list-item router link :to="{ name: 'Test' }" title="Test"></v-list-item>


    </v-list-group>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>

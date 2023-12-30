<template>
    <div>

        <v-app-bar density="compact" color="light-blue-darken-4" flat>


            <v-list-item router link :to="{ name: 'Home' }" title="Home"></v-list-item>

            <v-list-item router link :to="{ name: 'DatePicker' }" title="Date Picker"></v-list-item>

            <v-spacer></v-spacer>
            <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" router link>
                        Test
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item link router :to="{ name: 'Test' }" title="Test"></v-list-item>
                    <v-list-item link router :to="{ name: 'Test2' }" title="Test 2"></v-list-item>
                </v-list>
            </v-menu>



        </v-app-bar>


    </div>
</template>

<script>

export default {
    data() {
        return {
            drawer: true,
        }
    }
}

</script>
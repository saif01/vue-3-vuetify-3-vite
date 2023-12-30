<template>
    <v-card>
        <v-card-title>Date Picker In Input Text Field</v-card-title>
        <v-card-text>
            <hr />
            <hr />
            Selected: {{ selectedDate }} <br /> Format: {{ dbFormatDate }}
            <hr />
            <hr />
            <v-menu v-model="isMenuOpen" :close-on-content-click="false">
                <template v-slot:activator="{ props }">
                    <v-text-field label="Selected date" :model-value="selectedDate2" readonly v-bind="props"></v-text-field>
                </template>
                <v-date-picker hide-header position="sticky" v-model="selectedDate"
                    @update:modelValue="(isMenuOpen = false)"></v-date-picker>

            </v-menu>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: null,
            selectedDate: null,
            dbFormatDate: null,
        }
    },

    computed: {
        selectedDate2() {
            if (this.selectedDate) {
                return this.frmtInsideDate(this.selectedDate)
            }
        },
    },



    methods: {
        frmtInsideDate(date) {
            if (!date) return ''
            // Convert the input string to a Date object
            const inputDate = new Date(date)

            // Extract day, month, and year components
            const dday = inputDate.getDate()
            const mmonth = inputDate.getMonth() + 1 // Note: Months are zero-indexed, so we add 1
            const YYYY = inputDate.getFullYear()

            const DD = dday.toString().padStart(2, '0')
            const MM = mmonth.toString().padStart(2, '0')

            // DD/MM/YYYY
            const formattedDate = `${DD}/${MM}/${YYYY}`
            // YYYY-MM-DD
            this.dbFormatDate = `${YYYY}-${MM}-${DD}`

            //console.log(formattedDate) // Output: "28/12/2023"

            return formattedDate
        },
    },
}
</script>

<style>
.v-picker__actions {
    display: none;
}
</style>

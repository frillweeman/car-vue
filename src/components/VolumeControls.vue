<template>
    <v-col md="6">
        <v-card>
            <v-card-title>Volume</v-card-title>
            <v-card-text>
                <v-slider @end="updateVolume('mainVolume', $event)" class="my-4" persistent-hint hint="Main" prepend-icon="mdi-speaker" :append-icon="'mdi-volume-' + (mainVolume >= 50 ? 'high' : mainVolume > 5 ? 'medium' : mainVolume > 0 ? 'low' : 'off')" />
                <v-slider @end="updateVolume('bluetoothAudio', $event)" class="my-4" persistent-hint hint="Bluetooth Audio" prepend-icon="mdi-bluetooth" :append-icon="'mdi-volume-' + (bluetoothAudio >= 50 ? 'high' : bluetoothAudio > 5 ? 'medium' : bluetoothAudio > 0 ? 'low' : 'off')" />
                <v-slider @end="updateVolume('scanner', $event)" class="my-4" persistent-hint hint="Scanner" prepend-icon="mdi-police-badge" :append-icon="'mdi-volume-' + (scanner >= 50 ? 'high' : scanner > 5 ? 'medium' : scanner > 0 ? 'low' : 'off')" />
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: "VolumeControls",
    data: () => ({
        mainVolume: 0,
        bluetoothAudio: 0,
        scanner: 0
    }),
    methods: {
        updateVolume(id, value) {
            this[id] = value;
        }
    }
}
</script>
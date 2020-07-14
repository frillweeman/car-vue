<template>
    <div>
        <h1 class="text-h6 text-center">Audio Controls</h1>
        <v-container fluid >
            <v-row>
                <VolumeControls />
            </v-row>
        </v-container>
    </div>
</template>

<script>
import VolumeControls from "@/components/VolumeControls";

export default {
    name: "Audio",
    components: {
        VolumeControls
    }
}
</script>
<template>
    <v-bottom-navigation class="hidden-md-and-up" 
        app
    >
    <v-list nav>
        <v-btn v-for="item in navItems" link :to="item.to" :key="item.title">
            {{item.title}}
            <v-icon>mdi-{{item.icon}}</v-icon>
        </v-btn>
    </v-list>
</v-bottom-navigation>
</template>

<script>
export default {
    name: "BottomNav",
    props: ["navItems"]
}
</script>
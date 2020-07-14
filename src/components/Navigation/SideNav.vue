<template>
    <v-navigation-drawer 
        class="nav-drawer"
        permanent
        color="primary"
        dark
        :mini-variant="$vuetify.breakpoint.mdAndDown"
        mini-variant-width="80"
        app
    >
        <v-list nav>
            <v-tooltip :disabled="$vuetify.breakpoint.lgAndUp" right v-for="item in navItems" :key="item.title">
                <template v-slot:activator="{ on, attrs }">
                    <v-list-item v-bind="attrs" v-on="on" link :to="item.to">
                        <v-list-item-icon>
                            <v-icon large="">mdi-{{item.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content hidden>{{item.title}}</v-list-item-content>
                    </v-list-item>
                </template>
                <span >{{item.title}}</span>
            </v-tooltip>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "SideNav",
    props: ["navItems"]
}
</script>

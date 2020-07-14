<template>
    <BottomNav v-if="this.$vuetify.breakpoint.smAndDown" :navItems="items" />
    <SideNav v-else :navItems="items" />
</template>

<script>    
import SideNav from "./SideNav";
import BottomNav from "./BottomNav";

export default {
    name: "Navigation",
    props: ["open"],
    methods: {
        log(text) {
            console.log(text)
        }
    },
    components: {
        SideNav,
        BottomNav
    },
    data: () => ({
        items: [
            {
                title: "Dashboard",
                icon: "view-dashboard",
                to: "/"
            },
            {
                title: "Audio",
                icon: "speaker",
                to: "/audio"
            },
            {
                title: "SSH",
                icon: "console",
                to: "/ssh"
            },
            {
                title: "Settings",
                icon: "cog",
                to: "/settings"
            }
        ]
    })
}
</script>
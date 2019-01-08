<template>
    <div class="home">
        <HelloWorld :msgSon="msgFahter"/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld";

export default {
    name: "home",
    components: {
        HelloWorld
    },
    data() {
        return {
            msgFahter: "Welcome to Vue-cli3"
        };
    }
};
</script>

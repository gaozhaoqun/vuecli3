<template>
    <div class="hello">
        <h1>{{ msgSon }}</h1>
        <div>
            <input type="text" v-model="newName">
            <button @click="changeName">change name</button>
        </div>
        <test></test>
    </div>
</template>

<script>
import test from "./test.vue";
export default {
    name: "HelloWorld",
    data() {
        return {
            newName: ''
        }
    },
    components: {
        test
    },
    props: {
        msgSon: String
    },
    methods: {
        changeName() {
            this.$store.state.name = this.newName;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>

<template>
    <div class="about">
        <h1>{{ title }}</h1>
        <input type="text" v-model="username">
        <button @click="handleClick">emit</button>
    </div>
</template>
<script>
export default {
    name: 'about',
    props: {
        title: String
    },
    data() {
        return {
            username: ""
        }
    },
    methods: {
        handleClick() {
            let self = this
            self.$emit('tofather', self.username)
        }
    }
};
</script>

<style lang="stylus">
    .about 
        display block
        margin-top 10px
        width 100%
        height 80px
        background-color #ccc
        overflow hidden
</style>



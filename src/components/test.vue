<template>
    <div>
        <span>{{ showName }}</span>
    </div>
</template>
<script>
export default {
    name: 'test',
    computed: {
        showName() {
            return this.$store.state.name
        }
    }
}
</script>
<style lang="stylus" scoped>

</style>

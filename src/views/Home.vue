<template>
    <div class="home">
        <HelloWorld :msgSon="msgFahter"/>
        <div class="test">
            {{ sonToFather }}
            <p>$emit子组件传值给父组件, 如果是通过路由后展示,  "router-view"标签会只显示一个组件, 就不能触发$emit事件了 </p>
            <p>意思就是 点击上面的 about进去, 点emit按钮就传不过来值, 因为用路由了</p>
        </div>
        <About :title="title" @tofather="getNewName"></About>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld";
import About from "@/views/About";

export default {
    name: "home",
    components: {
        HelloWorld,
        About
    },
    data() {
        return {
            msgFahter: "Welcome to Vue-cli3",
            title: "",
            sonToFather: ""
        };
    },
    methods: {
        getNewName(value) {
            console.log(value)
            let self = this
            self.sonToFather = value;
        }
    }
};
</script>

<style lang="stylus">
    .test 
        width 100%
        height 100px
        background #eee

</style>


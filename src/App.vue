<template>
    <div id="app">
        <transition name="router-fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition name="router-fade" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
    </div>
</template>
<script>
import Vue from "vue";
import None from "_c/none/none.vue";
Vue.component("None", None);
export default {};
</script>
<style>
.router-fade-enter-active,
.router-fade-leave-active {
    transition: all 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
    opacity: 0;
}
</style>
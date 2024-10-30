<template>
    <div class="menu">
        <div class="header">
            LOGO
        </div>
        <div class="Menuitems">
            <a v-for="item in menuitems.items" :key="item.label" :href="item.link" class="item" v-tooltip="item.label">
                <span class="icon"> <font-awesome-icon :icon="['fa-solid', item.icon]" /></span>
            </a>
        </div>
    </div>
</template>

<script setup>
import menuitems from './menuitems';
</script>

<style scoped>
a {
    color: #666da4;
    text-decoration: none;
    display: block;
}

a:hover svg{
    color: #fd5050;
    box-shadow: -4px -8px 20px rgba(230, 74, 77, 1),
        -5px 5px 20px rgba(230, 74, 77, 1),
        1px 6px 20px rgba(230, 74, 77, 1),
        7px 4px 20px rgba(230, 74, 77, 1),
        6px -7px 20px rgba(230, 74, 77, 1),
        inset 1px -5px 15px rgba(230, 74, 77, 1)
        ;
}

.item {
    display: flex;
    align-items: center;
    padding: 10px;
    margin-top: 90%;
    gap: 10px;
}



.menu {
    background-color: #131736;
    color: white;
    height: 100vh;
    transition: width 0.5s;
    font-family: Arial, Helvetica, sans-serif;
    position: fixed;
    left: 0;
    top: 0;
    width: 50px;
    border-right: 1px solid #2f3664;
    box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25),
        10px 10px 70px rgba(0, 0, 0, 0.25),
        inset -5px -5px 15px rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    height: 50px;
    border-bottom: 1px solid #2f3664;
    box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25),
    10px 10px 70px rgba(0, 0, 0, 0.25),
    inset 5px 5px 20px rgba(255, 255, 255, 0.25),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);
}

.Menuitems {
    width: 35px;
    margin: 5%;

}

.p-tooltip-text {
    background: #2ab408 !important;
    background-color: #25f30a !important;
}
</style>
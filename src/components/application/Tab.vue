<script setup>
    defineProps({
        label: String,
        active: Boolean

    })
</script>

<template>
    <li class="cursor-pointer list-none py-2 px-4 overflow-clip rounded-md xs-mobile:font-normal xs-mobile:text-xs" :class="[active ? 'animate__animated animate__fadeIn animate__fastest _tab_active' : '']">
        {{ label }} 
    </li>    
</template>
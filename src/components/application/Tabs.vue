<script setup>
import Tab from './Tab.vue'

defineProps({
    tabs: Array,
})
</script>

<template>
    <ul class="flex rounded-md overflow-clip p-1 bg-neutral-100 space-x-1 dark:bg-neutral-800 dark:text-neutral-200">
        <Tab v-for="tab in tabs.options" :label="tab.label" :active="tab.value == tabs.selected" @click.native="$emit('onTabClick', tab)" />
    </ul>
</template>
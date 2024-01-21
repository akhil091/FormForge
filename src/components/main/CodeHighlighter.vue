<script setup>
defineProps({
    code: String,
})
</script>

<template>
    <div class="w-full mx-auto">
        <highlightjs :code="code" />
    </div>
</template>

<style>
.hljs {
    border-radius: 5px !important;
    max-height: 500px;
}
</style>
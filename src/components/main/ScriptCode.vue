<script setup>
import { watch, ref, reactive } from 'vue';
import CodeHighlighter from './CodeHighlighter.vue'
const code = ref(`// please select inputs`)

const props = defineProps({
    formBuilders: Array,
    updateCode: Number,
})

const formObject = ref({})

watch(() => props.updateCode, (newValue, OldValue) => {
    formObject.value = {}
    if (props.formBuilders === null) {
        return
    }

    props.formBuilders.forEach((builder) => {
        builder.forEach((input) => {
            formObject.value[input.name] = ''
        })
    })

    code.value = JSON.stringify(formObject.value, null, 2) // pretty print
}, { immediate: true })

</script>

<template>
    <CodeHighlighter :code="code" />
</template>
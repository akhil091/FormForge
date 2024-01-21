<script setup>
import { ref, watch } from 'vue';
import CodeHighlighter from './CodeHighlighter.vue'
const code = ref(`// please select inputs`)

const props = defineProps({
    formBuilders: Array,
    updateCode: Number,
})

watch(() => props.updateCode, (newValue, OldValue) => {
    code.value = '<form>'
    props.formBuilders.forEach((formBuilder) => {
        code.value += '\n   <div class="builder-row grid grid-cols-2 gap-2 w-full">\n'
        formBuilder.forEach(formElement => {
            code.value +=
                `       <div class="container">
            <label for="${formElement.name}">${formElement.label}</label>
            ${formElement.generatedNode}
       </div>\n`
        })
        code.value += '  </div>'
    })
    code.value += '\n</form>'
}, {
    immediate: true,
})

</script>

<template>
    <CodeHighlighter :code="code" />
</template>
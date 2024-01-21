<script setup>
import FormBuilder from './FormBuilder.vue'
import { watch, reactive, defineEmits, ref, onMounted } from 'vue'
import { useInputGenerator } from './../../composables/useInputGenerator'
const { generateInput } = useInputGenerator()

const emits = defineEmits(['newInput', 'codeUpdated'])

const props = defineProps({
    pushCounter: Number,
    input: Object,
})

const inputCount = ref(props.pushCounter)
watch(() => props.pushCounter, () => pushNewInput(formBuilders.length - 1))
let formBuilders = reactive([[]])
let formBuilderHistory = reactive({ history: {} })

function createNewBuilder(formBuilderIndex) {
    inputCount.value += 1
    let input = generateInput(props.input)
    const inputName = makeInputName(input.type, input.label, 'create')
    input = updateCode(checkIfSameName(inputName), input, formBuilderIndex)
    formBuilderHistory.history[input.name] = input
    formBuilders.splice(formBuilderIndex + 1, 0, [input])
}

function pushFormInput(input, formBuilderIndex) {
    inputCount.value += 1
    input = generateInput(input)
    const inputName = makeInputName(input.type, input.label, 'create')
    input = updateCode(checkIfSameName(inputName), input, formBuilderIndex)
    formBuilderHistory.history[input.name] = input
    formBuilders[formBuilderIndex].push(input)
}

function pushNewInput(formBuilderIndex) {
    const input = props.input == null ? generateInput() : props.input
    pushFormInput(input, formBuilderIndex)
}

function makeInputName(inputType, inputLabel, action = 'create') {
    return action === 'create' ? inputType : inputLabel.replaceAll(' ', '_').toLowerCase()
}

function checkIfSameName(inputName, suffix = -1) {
    let makeSuffix = suffix == -1 ? '' : '_' + suffix

    if (inputName + makeSuffix in formBuilderHistory.history) {
        return checkIfSameName(inputName, suffix + 1)
    }

    return suffix
}

function updateCode(sameElCount, input, formBuilderIndex, action = 'create') {
    input.generatedNode = input.template
    const inputName = makeInputName(input.type, input.label, action)
    const parsedInputName = inputName + (sameElCount !== -1 ? '_' + sameElCount : '')
    input.generatedNode = input.generatedNode.replace('##placeholder##', `'${input.label}'`)
    input.generatedNode = input.generatedNode.replace('##name##', parsedInputName)
    input.generatedNode = input.generatedNode.replace('##vmodel##', parsedInputName)
    input.name = parsedInputName
    setTimeout(() => emits('codeUpdated', { input, formBuilderIndex, action, formBuilders })) // wait for formBuilders to get updated
    return input
}

function labelUpdate({ formInputLabel, formInputIndex }, formBuilderIndex) {
    let formBuilder = formBuilders[formBuilderIndex]
    let input = formBuilder[formInputIndex]
    delete formBuilderHistory.history[input.name]
    input.label = formInputLabel
    const inputName = makeInputName(input.type, formInputLabel, 'update')
    updateCode(checkIfSameName(inputName), input, formBuilderIndex, 'update')
    formBuilderHistory.history[input.name] = input
}
</script>

<template>
    <div class="flex flex-col">
        <FormBuilder v-for="(formBuilder, index) in formBuilders" :key="index" :formInputs="formBuilder"
            :pushCounter="inputCount" @pushNewBuilder="createNewBuilder(index)" @pushNewInput="pushNewInput(index, $event)"
            @onLabelUpdate="labelUpdate($event, index)" />
    </div>
</template>

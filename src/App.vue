<script setup>
import { reactive, ref } from 'vue'
import CodeTabs from './components/main/CodeTabs.vue';
import FormBuilderContainer from './components/main/FormBuilderContainer.vue';
import SupportedInputs from './components/main/SupportedInputs.vue'
import { useObject } from './composables/useObject'
import Toggle from './components/elements/Toggle.vue';
const { cloneObject } = useObject()

const pushNewInput = ref(0)
let newInput = ref(null)

function pushNewInputElement(input) {
    newInput.value = new Object()
    newInput.value = cloneObject(input, newInput.value)
    pushNewInput.value += 1
}

const updateCode = ref(0)
const formBuilders = ref([])
function updatedCode(codeInputMeta) {
    updateCode.value += 1
    formBuilders.value = codeInputMeta.formBuilders
}
</script>

<template>
    <div class="font-fira xs-mobile:max-w-md md:max-w-5xl mx-auto">
        <Toggle />
        <header class="font-roboto h-64 inline-flex flex-col justify-center">
            <h1 class="text-4xl text-neutral-800 font-light mb-4 dark:text-neutral-200">
                FormForge: Effortless Creation, Seamless Integration
            </h1>
            <h3 class="text-sm text-neutral-400 font-lighter dark:text-neutral-400">
                Revolutionize your form creation experience with our dynamic form builder. Craft your forms effortlessly in the builder below, then seamlessly transfer the generated code into your project for a swift integration.
                <br/>
                Built using Vue and Tailwind CSS by <a href="https://akhilchandail.in">Akhil Chandail</a>.
            </h3>
        </header>
        <div class="pb-8 flex w-full xs-mobile:space-y-12 md:space-y-0 xs-mobile:flex-col xs-mobile:divide-y md:flex-row md:divide-y-0">
            <div class="md:w-1/2 md:flex-none md:pr-8 lg:pr-12">
                <CodeTabs :updateCode="updateCode" :formBuilders="formBuilders" />
            </div>
            <div class="md:w-1/2 md:flex-none xs-mobile:py-8 md:py-0 md:pl-8 lg:pl-12">
                <SupportedInputs @onClick="pushNewInputElement" />
                <FormBuilderContainer :pushCounter="pushNewInput" :input="newInput" @codeUpdated="updatedCode" />
            </div>
        </div>
    </div>
</template>

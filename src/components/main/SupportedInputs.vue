<script setup>
import { useInputGenerator } from './../../composables/useInputGenerator'
const { inputs } = useInputGenerator()

let formInputs = inputs()
formInputs = [formInputs.text, formInputs.email, formInputs.password]
</script>

<template>
    <!-- Heading -->
    <h2 class="text-3xl text-neutral-700 xs-mobile:font-light xs-mobile:text-base dark:text-neutral-300">
        Form Inputs
    </h2>
    <!-- Form inputs -->
    <div class="py-5 px-3 supported-inputs">
        <div class="_default_grid mx-3 flex-wrap">
            <button v-for="input in formInputs" :key="input.type" @click="$emit('onClick', input)" type="button"
                class="flex border space-x-1 px-4 py-1 rounded-md mx-1 xs-mobile:my-2.5 sm:my-1 dark:text-neutral-400 dark:bg-neutral-800 dark:border-neutral-800 dark:hover:bg-neutral-900 transition-all dark:hover:border-neutral-900">
                <span class="material-symbols-outlined">{{ input.icon }}</span>
                <span>{{ input.type }}</span>
            </button>
        </div>
    </div>
</template>
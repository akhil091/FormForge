<script setup>
import { ref } from 'vue'
import { useSibling } from './../../composables/useSibling'
const { getSiblingByClass } = useSibling()

defineProps({
    label: String,
})

const emits = defineEmits(['onLabelUpdate'])

const showUpdateInput = function (e) {
    const node = e.target

    const nextSibling = getSiblingByClass(node, 'update-input-holder')

    if (nextSibling === null) {
        return
    }

    nextSibling.classList.remove('hidden')
    nextSibling.classList.add('flex')
}

const newLabel = ref('')
const onceLabelUpdates = function (e) {
    if (newLabel.value.trim() === '') {
        return
    }

    emits('onLabelUpdate', newLabel)

    const updateInputHolder = e.target.closest('.update-input-holder')
    updateInputHolder.classList.remove('flex')
    updateInputHolder.classList.add('hidden')
}
</script>

<template>
    <div class="p-1 space-y-1 w-full label-container">
        <label class="relative dark:text-neutral-400">
            {{ label }}
            <span @click="showUpdateInput"
                class="font-bold cursor-pointer label-edit-icon text-base absolute -translate-y-1/2 top-1/2 right-[-20px] text-indigo-700 material-symbols-outlined animate__animated animate__fadeIn animate__fastest dark:text-gray-700">
                edit
            </span>
            <div class="hidden update-input-holder absolute left-0 top-[-0.3rem] rounded space-x-1">
                <input v-model="newLabel" class="outline-none dark:bg-neutral-950 rounded-lg" type="text">
                <span @click="onceLabelUpdates"
                    class="cursor-pointer material-symbols-outlined items-center text-green-600 text-lg font-bold">
                    done
                </span>
            </div>
        </label>
        <slot></slot>
    </div>
</template>

<style scoped>
.label-container .label-edit-icon {
    display: none;
}

.label-container:hover .label-edit-icon {
    display: block;
}
</style>
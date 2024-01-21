<script setup>
import Tabs from './../application/Tabs.vue'
import ScriptCode from './ScriptCode.vue'
import TemplateCode from './TemplateCode.vue'
import { reactive, watch } from 'vue'

const props = defineProps({
    formBuilders: Array,
    updateCode: Number,
})

const tabs = reactive({
    options: [
        {
            label: 'Template',
            value: 'template',
        }, {
            label: 'Script',
            value: 'script',
        }
    ],
    selected: 'template'
})

function onTabClick(tab) {
    tabs.selected = tab.value
}

</script>

<template>
    
    <div class="flex justify-center">
        <Tabs @onTabClick="onTabClick" :tabs="tabs" class="inline-flex items-center m-3" />
    </div>
    
    <TemplateCode :updateCode="props.updateCode" :formBuilders="props.formBuilders"
        class="animate__animated animate__fadeInUp animate__fastest" v-if="tabs.selected === 'template'" />
    
    <ScriptCode :updateCode="props.updateCode" :formBuilders="props.formBuilders"
        class="animate__animated animate__fadeInUp animate__fastest" v-else />
</template>
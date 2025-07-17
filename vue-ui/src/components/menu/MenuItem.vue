<script setup lang="ts">
defineProps({
    value: String,
})
</script>

<template>
    <t-menu-item :to="value" :value="value">
        <slot></slot>
    </t-menu-item>
</template>

<style scoped>
:deep(.t-menu__item) {
    padding: 1px 13px;
}
</style>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="categories categories-theme">
        <t-list :scroll="{ type: 'virtual', rowHeight: 80, bufferSize: 10, threshold: 10 }">
            <a href="/categories/默认">
                <t-list-item>
                    <t-list-item-meta title="默认" />

                    <template #action>
                        <t-tag size="small">1</t-tag>
                    </template>
                </t-list-item>
            </a>

            <a href="/categories/Java">
                <t-list-item>
                    <t-list-item-meta title="Java" />
                    <template #action>
                        <t-tag size="small">12</t-tag>
                    </template>
                </t-list-item>
            </a>
            <a href="/categories/全栈">
                <t-list-item>
                    <t-list-item-meta title="全栈" />
                    <template #action>
                        <t-tag size="small">30</t-tag>
                    </template>
                </t-list-item>
            </a>

            <a href="/categories/Vue">
                <t-list-item>
                    <t-list-item-meta title="Vue" />
                    <template #action>
                        <t-tag size="small">14</t-tag>
                    </template>
                </t-list-item>
            </a>
        </t-list>
    </div>
</template>

<style scoped>
.categories {
    padding: 20px 0;
    margin-bottom: 15px;
    width: 100%;
    height: fit-content;

    a {
        color: var(--td-text-color-primary);
        text-decoration: underline;
        text-decoration-color: var(--td-text-color-primary);
        text-underline-offset: 5px;
    }

    :deep(.t-list-item) {
        padding: 10px 30px;

        :deep(.t-list-item__meta-title) {
            font-size: 1em;
            margin: 0;
        }
    }
}

.categories.categories-theme {
    background-color: var(--td-bg-color-container);
    box-shadow: var(--td-shadow-1);
    border-radius: var(--td-radius-large);
}
</style>

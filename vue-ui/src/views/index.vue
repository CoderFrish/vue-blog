<script setup lang="ts">
import { computed } from 'vue'
import { useDeviceType, DeviceType } from '@/utils/driver'

const isDesktop = computed(() => useDeviceType() == DeviceType.DESKTOP)
</script>

<template>
    <div class="posts">
        <Post />
        <Post />
        <Post />
        <Post />
    </div>

    <div class="pagination">
        <t-pagination
            v-if="isDesktop"
            :total="300"
            showFirstAndLastPageBtn
            showPageNumber
            :showPageSize="false"
            showPreviousAndNextBtn
            :totalContent="false"
            class="pagination-layout"
        />

        <t-pagination
            v-else
            :total="300"
            showPageNumber
            :showPageSize="false"
            showPreviousAndNextBtn
            :totalContent="false"
            theme="simple"
            class="pagination-layout"
        />
    </div>
</template>

<style scoped lang="scss">
.posts {
    margin-bottom: 15px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
}

.pagination {
    height: fit-content;

    padding: 11px 15px;
    background-color: var(--td-bg-color-container);
    box-shadow: var(--td-shadow-1);
    border-radius: var(--td-radius-large);
}

.pagination-layout {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

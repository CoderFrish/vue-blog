<script setup lang="ts">
import { TimeIcon, FolderIcon } from 'tdesign-icons-vue-next'
</script>

<template>
    <div class="post">
        <div class="post-cover" />
        <div class="post-body">
            <t-space :size="5" style="margin: 10px">
                <t-tag theme="primary">测试</t-tag>
                <t-tag theme="primary">Vue</t-tag>
                <t-tag theme="primary">前端</t-tag>
            </t-space>

            <div class="post-title">
                <h2>我的第一篇文章</h2>
            </div>

            <div class="post-description">
                这是我的第一篇文章. Hello World! 测试代码 print("Hello World!!") 这是我的第一篇文章.
                Hello World! 测试代码 print("Hello World!!")
            </div>

            <t-space
                :size="10"
                style="margin: 0 10px 10px 10px; display: flex; align-items: center"
            >
                <span class="post-time"><TimeIcon />&nbsp;2025-7-17</span>

                <span class="post-category"><FolderIcon />&nbsp;测试</span>
            </t-space>
        </div>
    </div>
</template>

<style scoped>
.post-time,
.post-category {
    display: flex;
    align-items: center;

    font-size: 0.8em;
    color: var(--td-text-color-placeholder);
}

.post-description {
    margin: 0 15px 15px 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: var(--td-text-color-secondary);
}

.post-title {
    h2 {
        margin: 0 10px 10px 10px;
        color: var(--td-text-color-primary);
    }
}

.post-cover {
    height: 210px;
    background-position: center;
    background-image: url(/cover.jpg);
    background-size: cover;
    border-radius: var(--td-radius-large) var(--td-radius-large) 0 0;

    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.post-body {
    height: 195px;

    margin-top: -20px;
    -webkit-backdrop-filter: blur(40px);
    backdrop-filter: blur(40px);
    background-color: var(--td-bg-color-container) alpha(0.9);
    box-shadow: var(--td-shadow-1);
    border-radius: 0 0 var(--td-radius-large) var(--td-radius-large);
}
</style>

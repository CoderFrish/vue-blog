<script setup lang="ts"></script>

<template>
    <div class="info info-theme">
        <div class="info-avatar">
            <t-avatar image="/favicon.jpg" size="85px"></t-avatar>
        </div>

        <div class="info-nickname">
            <span>Frish2021</span>
        </div>

        <div class="info-address">
            <span>广东省 · 清远市</span>
        </div>
    </div>
</template>

<style scoped>
.info {
    margin-bottom: 15px;
    padding: 40px 0;
    width: 100%;
    height: fit-content;
}

.info-address,
.info-nickname,
.info-about {
    width: 100%;
    height: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;
}

.info-about {
    margin: 12px 0;
}

.info-address {
    margin: 2px 0;
    color: var(--td-text-color-secondary);
    font-size: 0.75rem;
}

.info-nickname {
    margin: 5px 0;
    color: var(--td-text-color-primary);
    font-size: 1.05rem;
}

.info-avatar {
    width: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: center;
}

.info.info-theme {
    background-color: var(--td-bg-color-container);
    box-shadow: var(--td-shadow-1);
    border-radius: var(--td-radius-large);
}
</style>

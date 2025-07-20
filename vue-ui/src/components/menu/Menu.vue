<script setup lang="ts">
import { useDeviceType, DeviceType } from '@/utils/driver'
import { IndentRightIcon, SunnyIcon, MoonIcon, CloseIcon } from 'tdesign-icons-vue-next'
import { MessagePlugin } from 'tdesign-vue-next'
import { computed, ref } from 'vue'
import { useThemeStore } from '@/store/theme'

const drawer = ref(false)
const model = defineModel()
const isDesktop = computed(() => useDeviceType() == DeviceType.DESKTOP)

const value = ref(useThemeStore().theme)
const changeTheme = (e: string) => {
    MessagePlugin.info(`当前主题配色: ${e}`, 900)
    useThemeStore().theme = e
    document.documentElement.setAttribute('theme-mode', e)
}

const toggleDrawer = () => {
    drawer.value = !drawer.value
}
</script>

<template>
    <div class="menu menu-layout menu-theme">
        <div class="logo-box" v-if="isDesktop">
            <h2 class="logo">Frish2021`s blog</h2>
        </div>

        <div class="not-desktop-tdsign-menu-box" v-if="!isDesktop">
            <IndentRightIcon id="expand" @click="toggleDrawer" />
        </div>

        <t-divider layout="vertical" />

        <div class="tdsign-menu-box" v-if="isDesktop">
            <t-head-menu v-model="model" expand-type="popup" class="tdeisgn-menu">
                <slot></slot>
            </t-head-menu>
        </div>

        <div class="not-desktop-logo-box" v-if="!isDesktop">
            <h2 class="logo">Frish2021`s blog</h2>
        </div>

        <t-divider layout="vertical" />

        <div class="operations">
            <t-switch
                size="large"
                :onChange="changeTheme"
                :customValue="['light', 'dark']"
                v-model="value"
            >
                <template v-slot:label="slotProps">
                    <template v-if="slotProps.value == 'light'">
                        <SunnyIcon />
                    </template>

                    <template v-else>
                        <MoonIcon />
                    </template>
                </template>
            </t-switch>
        </div>
    </div>

    <t-drawer
        v-model:visible="drawer"
        placement="left"
        size="290px"
        :footer="false"
        v-if="!isDesktop"
    >
        <template #header>
            <div class="drawer-header">
                <span>菜单</span>
                <div class="drawer-header-grow"></div>
                <span class="drawer-close-box"><CloseIcon id="close" @click="toggleDrawer" /></span>
            </div>
        </template>

        <Info style="--td-shadow-1: none; padding: 7px 0; margin: 0"></Info>

        <t-menu
            v-model="model"
            expand-type="popup"
            width="100%"
            style="height: fit-content"
            class="drawer-menu"
        >
            <slot></slot>
        </t-menu>
    </t-drawer>
</template>

<style scoped>
#expand:hover,
#close:hover {
    cursor: pointer;
}

.drawer-header {
    width: 100%;
    display: flex;
}

.drawer-header-grow {
    flex-grow: 1;
}

.drawer-close-box {
    font-size: 1.7em;
}

.logo,
.not-desktop-tdsign-menu-box {
    margin-left: var(--td-size-8);
    font-size: large;
    color: var(--td-text-color-primary);
}

.operations {
    margin-right: var(--td-size-8);
}

.tdsign-menu-box,
.not-desktop-logo-box {
    flex-grow: 1;
}

.menu {
    width: 100vw;
    height: 65px;

    :deep(.t-menu) {
        margin: 0;
    }
}

.tdeisgn-menu,
.menu-theme {
    background-color: var(--td-bg-color-container);
}

.menu-theme {
    box-shadow: var(--td-shadow-1);
}

.menu.menu-layout,
.logo-box,
.not-desktop-logo-box,
.not-desktop-tdsign-menu-box {
    display: flex;
    align-items: center;
}

.not-desktop-logo-box {
    justify-content: center;
}

:deep(.t-divider--vertical) {
    height: 2em;
    border-left-width: 2px;
}
</style>

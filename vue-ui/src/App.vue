<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Menu, MenuItem } from '@/components/menu'
import { HomeIcon, CollectionIcon, PinIcon } from 'tdesign-icons-vue-next'
import { Info } from '@/components/info'
import { useDeviceType, DeviceType } from '@/utils/driver'
import { useThemeStore } from './store/theme'
import { Categories } from '@/components/categories'
import { PersonalInformationIcon } from 'tdesign-icons-vue-next'

const active = ref(location.pathname)
const isDesktop = computed(() => useDeviceType() == DeviceType.DESKTOP)

onMounted(() => {
    document.documentElement.setAttribute('theme-mode', useThemeStore().theme)
})
</script>

<template>
    <t-affix>
        <Menu v-model="active">
            <MenuItem value="/"><HomeIcon /> 主页</MenuItem>
            <MenuItem value="/archives"><CollectionIcon /> 归档</MenuItem>
            <MenuItem value="/friends"><PinIcon /> 友链</MenuItem>
            <MenuItem value="/about"><PersonalInformationIcon /> 关于</MenuItem>
        </Menu>
    </t-affix>

    <div class="layout-body">
        <div class="layout-box">
            <div class="layout-aside" v-if="isDesktop">
                <t-affix :offset-top="99">
                    <Info></Info>
                    <Categories></Categories>
                </t-affix>
            </div>

            <div class="layout-content">
                <RouterView></RouterView>

                <t-back-top size="small"></t-back-top>
            </div>
        </div>
    </div>
</template>

<style scoped>
.layout-body {
    height: fit-content;
    padding: 0 10px;
}

.layout-box {
    margin: 28px auto;
    max-width: 79rem;
    display: flex;
}

.layout-aside {
    margin: 10px;
    height: fit-content;
    flex: 0 0 280px;
}

.layout-content {
    flex-grow: 1;
    margin: 10px;
}
</style>

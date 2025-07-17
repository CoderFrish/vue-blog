import { ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

export enum DeviceType {
    DESKTOP,
    MOBILE,
    TABLET,
}

export function useDeviceType() {
    const deviceType = ref<DeviceType>(DeviceType.DESKTOP)
    const driverWidth = width.value

    if (driverWidth < 768) deviceType.value = DeviceType.MOBILE
    else if (driverWidth >= 768 && driverWidth < 1024) deviceType.value = DeviceType.TABLET
    else deviceType.value = DeviceType.DESKTOP

    return deviceType.value
}

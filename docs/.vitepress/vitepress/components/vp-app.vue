<script setup lang="ts">
import { onMounted } from 'vue'
// import { ElMessageBox } from 'element-plus'
import nprogress from 'nprogress'
// import dayjs from 'dayjs'
import { isClient, useEventListener, useToggle } from '@vueuse/core'

// const USER_PREFER_GITHUB_PAGE = 'USER_PREFER_GITHUB_PAGE'
const [isSidebarOpen, toggleSidebar] = useToggle(false)
// const lang = useLang()

// const mirrorUrl = 'element-plus.gitee.io'
// const isMirrorUrl = () => {
//   if (!isClient) return
//   return window.location.hostname === mirrorUrl
// }

useEventListener('keydown', (e) => {
  if (!isClient) return
  if (e.key === 'Escape' && isSidebarOpen.value) {
    toggleSidebar(false)
    document.querySelector<HTMLButtonElement>('.sidebar-button')?.focus()
  }
})

// const userPrefer = useStorage<boolean | string>(USER_PREFER_GITHUB_PAGE, null)

onMounted(async () => {
  if (!isClient) return
  window.addEventListener(
    'click',
    (e) => {
      const link = (e.target as HTMLElement).closest('a')
      if (!link) return

      const { protocol, hostname, pathname, target } = link
      const currentUrl = window.location
      const extMatch = pathname.match(/\.\w+$/)
      // only intercept inbound links
      if (
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.altKey &&
        !e.metaKey &&
        target !== `_blank` &&
        protocol === currentUrl.protocol &&
        hostname === currentUrl.hostname &&
        !(extMatch && extMatch[0] !== '.html')
      ) {
        e.preventDefault()
        if (pathname !== currentUrl.pathname) {
          nprogress.start()
        }
      }
    },
    { capture: true }
  )

  // if (lang.value === 'zh-CN') {
  //   if (isMirrorUrl()) return

  //   if (userPrefer.value) {
  //     // no alert in the next 90 days
  //     if (
  //       dayjs
  //         .unix(Number(userPrefer.value))
  //         .add(90, 'day')
  //         .diff(dayjs(), 'day', true) > 0
  //     )
  //       return
  //   }
  //   try {
  //     await ElMessageBox.confirm(
  //       '建议大陆用户访问部署在国内的站点，是否跳转？',
  //       '提示',
  //       {
  //         confirmButtonText: '跳转',
  //         cancelButtonText: '取消',
  //       }
  //     )
  //     const toLang = '/zh-CN/'
  //     location.href = `https://element-plus.gitee.io${toLang}${location.pathname.slice(
  //       toLang.length
  //     )}`
  //   } catch {
  //     userPrefer.value = String(dayjs().unix())
  //   }
  // }
  // unregister sw
  navigator?.serviceWorker?.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister()
    }
  })
})
</script>

<template>
  <div class="App">1111</div>
</template>

<script setup lang="ts">
const { layoutConfig, layoutState, hideMobileMenu } = useLayout()

const containerClass = computed(() => {
  return {
    'layout-overlay': layoutConfig.menuMode === 'overlay',
    'layout-static': layoutConfig.menuMode === 'static',
    'layout-overlay-active': layoutState.overlayMenuActive,
    'layout-mobile-active': layoutState.mobileMenuActive,
    'layout-static-inactive': layoutState.staticMenuInactive
  }
})
</script>

<template>
  <div class="layout-wrapper" :class="containerClass">
    <LayoutAppTopbar />
    <LayoutAppSidebar />
    <div class="layout-main-container">
      <div class="layout-main">
        <slot />
      </div>
      <LayoutAppFooter />
    </div>
    <div class="layout-mask animate-fadein" @click="hideMobileMenu" />
  </div>
  <Toast />
</template>

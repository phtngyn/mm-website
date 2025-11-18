<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const items = computed(() => [
  {
    label: 'Leistungen',
    to: '#leistungen',
    active: activeHeadings.value.includes('leistungen'),
  },
  {
    label: 'Lösungen',
    to: '#loesungen',
    active: activeHeadings.value.includes('loesungen'),
  },
  {
    label: 'News',
    to: '#news',
    active: activeHeadings.value.includes('news'),
  },
  {
    label: 'Karriere',
    to: '#karriere',
    active: activeHeadings.value.includes('karriere'),
  },
])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#leistungen'),
    document.querySelector('#loesungen'),
    document.querySelector('#news'),
    document.querySelector('#karriere'),
  ].filter(Boolean) as Element[])
})
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink
        to="/"
        class="flex items-center gap-2"
      >
        <AppLogo class="size-10" />
        <span class="font-bold text-xl text-primary tracking-wide">MULTAMEDIO</span>
      </NuxtLink>
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:block"
      />

      <UButton
        variant="subtle"
        to="/builder"
        icon="i-lucide-hammer"
      >
        Builder
      </UButton>

      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>
</template>

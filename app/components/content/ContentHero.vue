<script lang="ts">
import type { ButtonProps, ComponentConfig } from '@nuxt/ui'
import type { AppConfig } from 'vue'
import { page } from '#build/ui'
import theme from '#build/ui/page-hero'
import { tv } from '@nuxt/ui/runtime/utils/tv.js'
import { Primitive } from 'reka-ui'

type PageHero = ComponentConfig<typeof theme, AppConfig, 'pageHero'>

interface PageHeroProps {
  as?: any
  headline?: string | undefined
  title?: string
  description?: string
  links?: ButtonProps[]
  orientation?: PageHero['variants']['orientation']
  reverse?: boolean
  class?: any
  ui?: PageHero['slots']
}

interface PageHeroSlots {
  top: () => any
  headline: () => any
  title: () => any
  description: () => any
  links: () => any
  right: () => any
}
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<PageHeroProps>(), {
  orientation: 'vertical',
})

const slots = defineSlots<PageHeroSlots>()

const ui = computed(() => tv({ extend: tv(theme) })({
  orientation: props.orientation,
  reverse: props.reverse,
  title: !!props.title || !!slots.title,
}))
</script>

<template>
  <Primitive :as="as" :data-orientation="orientation" data-slot="root" :class="ui.root({ class: [props.ui?.root, props.class] })">
    <slot name="top" />

    <UContainer data-slot="container" :class="ui.container({ class: props.ui?.container })">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div v-if="props.headline">
            <UBadge variant="subtle">
              <slot name="headline">
                {{ props.headline }}
              </slot>
            </UBadge>
          </div>

          <h1
            v-if="props.title"
            class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
          >
            <slot name="title">
              {{ props.title }}
            </slot>
          </h1>

          <p
            v-if="props.description"
            class="text-xl text-muted leading-relaxed text-pretty"
          >
            <slot name="description">
              {{ props.description }}
            </slot>
          </p>

          <div v-if="links" class="flex flex-col sm:flex-row gap-4">
            <slot name="links">
              <UButton
                v-for="(link, index) in links"
                :key="index"
                size="xl"
                v-bind="link"
              />
            </slot>
          </div>

          <div class="grid grid-cols-3 gap-8 pt-8 border-t border-default">
            <div>
              <div class="text-3xl font-bold">
                80+
              </div>
              <div class="text-sm text-muted">
                Mitarbeiter
              </div>
            </div>
            <div>
              <div class="text-3xl font-bold">
                25+
              </div>
              <div class="text-sm text-muted">
                Jahre
              </div>
            </div>
            <div>
              <div class="text-3xl font-bold">
                2
              </div>
              <div class="text-sm text-muted">
                Standorte
              </div>
            </div>
          </div>
        </div>

        <slot name="right" />
      </div>
    </UContainer>
  </Primitive>
</template>

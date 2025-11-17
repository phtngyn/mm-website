<script lang="ts">
import type { ButtonProps, ComponentConfig } from '@nuxt/ui'
import type { AppConfig } from 'vue'
import theme from '#build/ui/page-hero'
import { tv } from '@nuxt/ui/runtime/utils/tv.js'
import { Primitive } from 'reka-ui'

type PageHero = ComponentConfig<typeof theme, AppConfig, 'pageHero'>

interface PageHeroProps {
  /**
   * The element or component this component should render as.
   * @defaultValue 'div'
   */
  as?: any
  headline?: string | undefined
  title?: string
  description?: string
  /**
   * Display a list of Button under the description.
   * `{ size: 'xl' }`{lang="ts-type"}
   */
  links?: ButtonProps[]
  /**
   * The orientation of the page hero.
   * @defaultValue 'vertical'
   */
  orientation?: PageHero['variants']['orientation']
  /**
   * Reverse the order of the default slot.
   * @defaultValue false
   */
  reverse?: boolean
  class?: any
  ui?: PageHero['slots']
}

interface PageHeroSlots {
  top: () => any
  header: () => any
  headline: () => any
  title: () => any
  description: () => any
  body: () => any
  footer: () => any
  links: () => any
  default: () => any
  bottom: () => any
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

        <div class="relative">
          <div class="aspect-square rounded-2xl bg-muted overflow-hidden">
            <img src="/images/team.jpg" alt="Team collaboration" class="w-full h-full object-cover">
          </div>
          <div class="absolute -bottom-6 -left-6 bg-default border border-default rounded-xl p-6 shadow-lg">
            <div class="text-sm text-muted mb-1">
              Kundenzufriedenheit
            </div>
            <div class="text-2xl font-bold">
              98%
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </Primitive>
</template>

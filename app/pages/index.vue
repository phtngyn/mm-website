<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('content').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.seo?.title || page.value.title,
  ogTitle: page.value.seo?.title || page.value.title,
  description: page.value.seo?.description || page.value.description,
  ogDescription: page.value.seo?.description || page.value.description,
})
</script>

<template>
  <div
    v-if="page"
    class="relative"
  >
    <Hero
      :headline="page.hero.headline"
      :title="page.title"
      :links="page.hero.links"
      :description="page.description"
    >
      <template #top>
        <HeroBackground />
      </template>

      <template #title>
        <MDC :value="page.title" unwrap="p" />
      </template>

      <template #right>
        <div class="relative">
          <div class="aspect-square rounded-2xl bg-muted overflow-hidden">
            <img
              :src="page.hero.image"
              alt="Team collaboration" class="size-full object-cover"
            >
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
      </template>
    </Hero>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="leistungen"
      :description="page.services.description"
      :features="page.services.services"
      :ui="{
        title: 'text-left @container relative flex',
        description: 'text-left',
      }"
      class="relative overflow-hidden"
    >
      <div class="absolute rounded-full -left-10 top-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]" />
      <div class="absolute rounded-full -right-10 -bottom-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]" />
      <template #title>
        <MDC
          :value="page.services.title"
          class="*:leading-9"
        />
      </template>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="loesungen"
      :description="page.solutions.description"
      class="relative overflow-hidden"
      :ui="{ features: 'lg:grid-cols-2' }"
    >
      <template #title>
        <MDC :value="page.solutions.title" />
      </template>

      <template #features>
        <UPageCard
          v-for="(step, index) in page.solutions.items"
          :key="index"
          class="group"
          :ui="{ container: 'p-4 sm:p-4', title: 'flex items-center gap-1' }"
        >
          <div
            v-if="step.image"
            class="aspect-video overflow-hidden"
          >
            <img
              :src="step.image"
              :alt="step.title"
              class="size-full object-cover group-hover:scale-105 transition-transform duration-300"
            >
          </div>

          <div class="flex flex-col gap-2">
            <div class="size-12 rounded-lg bg-primary/10 flex items-center justify-center ring ring-inset ring-primary/25 text-primary">
              <UIcon :name="step.icon" class="size-5" />
            </div>
            <span class="text-lg font-semibold">
              {{ step.title }}
            </span>
            <span class="text-sm text-muted">
              {{ step.description }}
            </span>

            <div>
              <UButton v-bind="step.link" />
            </div>
          </div>
        </UPageCard>
      </template>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="news"
      :description="page.news.description"
      class="relative overflow-hidden"
    >
      <template #title>
        <MDC :value="page.news.title" />
      </template>

      <template #features>
        <UBlogPost
          v-for="(item, index) in page.news.items"
          :key="index"
          :title="item.title"
          :description="item.description"
          :image="item.image"
          :date="item.date"
          :to="item.link.to"
          :target="item.link.target"
        />
      </template>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageCTA
      v-bind="page.cta"
      id="karriere"
      variant="solid"
      :ui="{ root: 'rounded-none' }"
      orientation="horizontal"
    >
      <template #title>
        <MDC :value="page.cta.title" />
      </template>

      <img
        :src="page.cta.image"
        alt="Illustration"
        class="w-full rounded-lg"
      >

      <template #body>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <UIcon name="i-lucide-map-pin" class="size-5 mt-1" />
            <div>
              <div class="font-medium">
                Berliner Platz 12
              </div>
              <div class="text-background/80">
                97080 Würzburg
              </div>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <UIcon name="i-lucide-phone" class="size-5 mt-1" />
            <a href="tel:+4993178086100" class="hover:underline">
              +49 (0) 931 / 780866-100
            </a>
          </div>
          <div class="flex items-center gap-3">
            <UIcon name="i-lucide-mail" class="size-5 mt-1" />
            <a href="mailto:info@multamedio.de" class="hover:underline">
              info@multamedio.de
            </a>
          </div>
        </div>
      </template>
    </UPageCTA>
  </div>
</template>

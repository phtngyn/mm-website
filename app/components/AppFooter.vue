<script setup lang="ts">
const columns = [
  {
    label: 'Unternehmen',
    children: [
      { label: 'Über uns' },
      { label: 'Standorte' },
      { label: 'Partner' },
    ],
  },
  {
    label: 'Lösungen',
    children: [
      { label: 'Learning Solutions' },
      { label: 'Lottery Solutions' },
      { label: 'Referenzen' },
    ],
  },
  {
    label: 'Rechtliches',
    children: [
      { label: 'Impressum' },
      { label: 'Datenschutz' },
      { label: 'AGB' },
    ],
  },
]
</script>

<template>
  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #left>
            <div class="grid gap-4">
              <div class="flex items-center gap-2">
                <AppLogo class="size-10" />
                <div class="grid">
                  <span class="font-medium text-xl text-primary">MULTAMEDIO</span>
                  <span class="text-sm text-muted">Informationssysteme AG</span>
                </div>
              </div>
            </div>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-sm text-muted">
        © {{ new Date().getFullYear() }} MULTA MEDIO Informationssysteme AG. Alle Rechte vorbehalten.
      </p>
    </template>

    <template #right>
      <UButton
        target="_blank"
        icon="i-simple-icons-facebook"
        color="neutral"
        variant="ghost"
      />
      <UButton
        target="_blank"
        icon="i-simple-icons-instagram"
        color="neutral"
        variant="ghost"
      />
      <UButton
        target="_blank"
        icon="i-simple-icons-linkedin"
        color="neutral"
        variant="ghost"
      />
      <UButton
        target="_blank"
        icon="i-simple-icons-xing"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>

<template>
  <header class="w-full sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
    <UContainer class="flex items-center justify-between py-4">
      <div class="flex items-center cursor-pointer select-none" @click="scrollToSection('#home')">
        <span class="text-2xl font-extrabold tracking-wide text-sky-400">
          My <span class="text-white">Portfolio</span>
        </span>
      </div>

      <nav class="hidden md:flex space-x-4 sm:space-x-6 md:space-8">
        <UButton
          v-for="item in navItems"
          :key="item.to"
          @click="scrollToSection(item.to)"
          :label="item.label"
          variant="ghost"
          color="sky"
          :padded="false"
          class="!text-gray-300 hover:!text-sky-400 transition-all duration-200 cursor-pointer text-base font-medium"
        />
      </nav>
      
      <UButton
        icon="i-heroicons-bars-3-20-solid"
        size="lg"
        color="sky"
        variant="ghost"
        class="md:hidden"
        @click="isOpen = true"
      />
    </UContainer>
  </header>

  <USlideover v-model="isOpen">
    <UCard 
      class="flex flex-col flex-1" 
      :ui="{ 
        body: { base: 'flex-1' }, 
        ring: '', 
        divide: 'divide-y divide-gray-100 dark:divide-gray-800' 
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Navigation
          </h3>
          <UButton 
            icon="i-heroicons-x-mark-20-solid" 
            size="sm" 
            color="gray" 
            variant="ghost" 
            @click="isOpen = false" 
          />
        </div>
      </template>

      <div class="flex flex-col space-y-4 py-4">
        <UButton
          v-for="item in navItems"
          :key="item.to"
          @click="handleMobileNav(item.to)"
          :label="item.label"
          variant="ghost"
          color="sky"
          block
          size="xl"
          class="justify-start !text-lg"
        />
      </div>
    </UCard>
  </USlideover>
</template>

<script setup>
import { ref } from 'vue';

// State untuk mengontrol tampilan Slideover
const isOpen = ref(false); 

const navItems = [
  { label: 'Home', to: '#home' },
  { label: 'About Me', to: '#about' },
  { label: 'Skills', to: '#skills' },
  { label: 'Experience', to: '#experience' },
  { label: 'Project', to: '#project' },
  { label: 'Contact Me', to: '#contact' },
]

// Fungsi scroll halus ke section
const scrollToSection = (hash) => {
  const el = document.querySelector(hash)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

// Fungsi gabungan untuk navigasi mobile
const handleMobileNav = (hash) => {
    scrollToSection(hash); // Scroll
    isOpen.value = false;   // Tutup menu setelah klik
}
</script>
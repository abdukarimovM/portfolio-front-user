<template>
  <div>
    <!-- Biz yaratgan Loading Komponenti -->
    <SystemLoader :isLoading="isLoading" />

    <!-- Sizning mavjud komponentlaringiz -->
    <CustomCursor />
    <div class="relative z-10">
      <Header />
      <Home />
      <About />
      <Services />
      <Education />
      <Projects />
      <Contact />
    </div>
  </div>
</template>

<script setup>
import SystemLoader from '~/components/SystemLoader.vue'
import { ref, onMounted } from 'vue'

const config = useRuntimeConfig()
const isLoading = ref(true)

const fetchData = async () => {
  try {
    isLoading.value = true
    
    // Loader uchun backendning mavjud health endpointini tekshiramiz.
    await $fetch(`${config.public.api}/api/health`)

  } catch (error) {
    console.error("Ulanishda xatolik:", error)
  } finally {
    // API javob bergach 0.4s dan so'ng loader yopiladi
    setTimeout(() => {
      isLoading.value = false
    }, 400)
  }
}

onMounted(() => {
  fetchData()
})
</script>
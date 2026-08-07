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

const isLoading = ref(true)

const fetchData = async () => {
  try {
    isLoading.value = true
    
    // Backend API so'rovingiz
    const response = await fetch('https://portfolio-backend-vn5k.onrender.com/api/data')
    await response.json()

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
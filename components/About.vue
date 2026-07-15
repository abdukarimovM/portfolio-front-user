<template>
  <section id="about" class="bg-[#0f0f16] scroll-mt-[80px] py-16 md:py-24 relative overflow-hidden">
    <!-- Orqa fondagi maxsus neon effekti — aynan matn ortida ajoyib atmosfera beradi -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-[#7562E0]/10 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none"></div>

    <div class="container mx-auto px-6 max-w-7xl relative z-10">

      <div class="flex flex-col items-center text-white">

        <!-- Sarlavha: Kreativ gradient uslubida -->
        <div class="text-center mb-10 md:mb-16">
          <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            About Me
          </h1>
          <p class="text-[#7562E0] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mt-3">
            Who I Am
          </p>
        </div>

        <!-- Matn Bloki: Shishasimon (Glassmorphic) premium panel -->
        <div 
          v-if="about"
          class="w-full max-w-4xl bg-[#161624]/40 border border-white/5 p-6 sm:p-10 md:p-12 rounded-2xl backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:border-[#7562E0]/20 transition-all duration-500 group"
        >
          <!-- Matn: Shrift o'lchamlari (Typography) har xil qurilmalar uchun mukammal moslashtirildi -->
          <p class="text-center text-gray-300 text-base sm:text-lg md:text-xl font-light leading-relaxed sm:leading-loose tracking-wide group-hover:text-white transition-colors duration-300">
            {{ about.description }}
          </p>
        </div>

      </div>

      <!-- Pastki yupqa gradient chiziq -->
      <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-[#7562E0]/40 to-transparent mt-16 md:mt-24"></div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const config = useRuntimeConfig()
const about = ref(null)

const getAbout = async () => {
  try {
    const data = await $fetch(`${config.public.api}/api/abouts`)

    if (Array.isArray(data) && data.length > 0) {
      about.value = data[0]
    }
  } catch (error) {
    console.error('About maʼlumotini olishda xatolik:', error)
  }
}

onMounted(() => {
  getAbout()
})
</script>

<style scoped>
/* Orqa fonga qo'shimcha yumshoqlik berish uchun yengil ichki soya */
div {
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.02);
}
</style>
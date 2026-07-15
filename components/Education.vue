<template>
  <section id="education" class="bg-[#0f0f16] min-h-screen py-20 relative overflow-hidden">
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7562E0]/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div class="container mx-auto px-4 max-w-7xl relative z-10">
      
      <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#7562E0] to-transparent opacity-50"></div>

      <div class="text-center mt-12 mb-16 md:mb-24">
        <h1 class="text-white text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Education
        </h1>
        <p class="text-[#7562E0] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mt-3">
          My Academic Journey
        </p>
      </div>

      <!-- GRID TIZIMI: md: rejimida oxirgi toq element o'rtaga o'tadi, lg: rejimida esa oddiy 3 talik grid bo'ladi -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">

        <div
          v-for="item in educations"
          :key="item.id"
          class="education-card group relative bg-[#161624]/60 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-[420px] md:h-[460px] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#7562E0]/40 hover:shadow-[0_20px_40px_rgba(117,98,224,0.15)] md:last:odd:col-span-2 md:last:odd:mx-auto md:last:odd:w-1/2 lg:last:odd:col-span-1 lg:last:odd:w-full"
        >
          <div>
            <div class="flex items-center justify-between mb-6">
              <span class="text-xs md:text-sm font-medium text-[#7562E0] bg-[#7562E0]/10 px-4 py-1.5 rounded-full border border-[#7562E0]/20">
                {{ item.startYear }} — {{ item.endYear }}
              </span>
              
              <a
                :href="item.link"
                target="_blank"
                class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-[#7562E0] group-hover:border-[#7562E0] transition-all duration-300"
              >
                <i class="bx bx-link-external text-lg"></i>
              </a>
            </div>

            <h3 class="text-white text-xl md:text-2xl font-bold leading-snug group-hover:text-[#7562E0] transition-colors duration-300">
              {{ item.name }}
            </h3>
            
            <p class="text-gray-400 text-sm md:text-base mt-3 font-light leading-relaxed">
              {{ item.direction }}
            </p>
          </div>

          <div class="relative flex justify-end items-end h-24 mt-4 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <img
              :src="`${config.public.api}${item.icon}`"
              class="w-20 h-20 md:w-24 md:h-24 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              alt="Institution logo"
            />
          </div>

          <div class="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#7562E0] to-purple-500 rounded-b-2xl transition-all duration-500 group-hover:w-full"></div>
        </div>

      </div>

      <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#7562E0] to-transparent opacity-50 mt-20 md:mt-32"></div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const educations = ref([])
const config = useRuntimeConfig()

const getEducations = async () => {
  try {
    educations.value = await $fetch(`${config.public.api}/api/education`)
  } catch (error) {
    console.error('Xatolik:', error)
  }
}

onMounted(() => {
  getEducations()
})
</script>

<style scoped>
.education-card {
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.05);
}
</style>
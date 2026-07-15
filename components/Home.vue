<template>
  <section id="home" class="bg-[#0f0f16] scroll-mt-[80px] py-16 md:py-28 relative overflow-hidden">
    <!-- Orqa fondagi zamonaviy neon yorug'liklar (Glow) -->
    <div class="absolute top-1/3 right-1/4 w-80 h-80 sm:w-96 sm:h-96 bg-[#7562E0]/15 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto px-6 max-w-7xl relative z-10">
      
      <!-- Yuqori qismdagi yupqa gradient chiziq -->
      <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-[#7562E0]/40 to-transparent mb-12 lg:mb-16"></div>

      <div class="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-16">

        <!-- TEXT QISMI -->
        <div class="flex flex-col items-center lg:items-start text-center lg:text-left text-white max-w-2xl">
          <h2 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              {{ firstName }}
            </span> 
            <br>
            <span class="text-[#7562E0] drop-shadow-[0_0_25px_rgba(117,98,224,0.3)]">
              {{ lastName }}
            </span>
          </h2>

          <p class="text-lg sm:text-xl text-gray-400 font-light mt-4 tracking-wide">
            {{ about.profession }}
          </p>

          <!-- Buttons -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
            <button
              @click="scrollToSection('about')"
              class="bg-[#7562E0] text-white px-7 py-3.5 rounded-xl font-medium shadow-[0_0_20px_rgba(117,98,224,0.3)] hover:bg-[#7562E0]/90 hover:shadow-[0_0_30px_rgba(117,98,224,0.5)] transition-all flex items-center gap-2.5 active:scale-95 duration-300"
            >
              About me
              <img src="../public/icons/user.svg" alt="User icon" class="w-5 h-5 filter brightness-0 invert" />
            </button>

            <button
              @click="scrollToSection('projects')"
              class="bg-white/5 border border-white/10 text-white px-7 py-3.5 rounded-xl font-medium hover:bg-white/10 hover:border-[#7562E0]/40 transition-all flex items-center gap-2.5 active:scale-95 duration-300"
            >
              Projects
              <i class="bx bxs-rocket text-lg text-[#7562E0]"></i>
            </button>
          </div>
        </div>

        <!-- IMAGE QISMI: Gradient neon halqa va yumshoq soya bilan -->
        <div class="relative flex justify-center items-center">
          <div
            class="relative rounded-full p-2 bg-gradient-to-tr from-[#7562E0] to-purple-500 shadow-[0_0_50px_rgba(117,98,224,0.25)] w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] lg:w-[450px] lg:h-[450px] overflow-hidden flex justify-center items-center"
          >
            <div class="w-full h-full rounded-full overflow-hidden bg-[#0f0f16]">
              <img
                v-if="about.image"
                :src="`${config.public.api}${about.image}`"
                alt="Profile"
                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

      </div>

      <!-- Pastki qismdagi gradient chiziq -->
      <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-[#7562E0]/40 to-transparent mt-16 lg:mt-24"></div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const about = ref({})
const config = useRuntimeConfig()

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

const firstName = computed(() => {
  if (!about.value.fullName) return ''
  return about.value.fullName.split(' ')[0]
})

const lastName = computed(() => {
  if (!about.value.fullName) return ''
  return about.value.fullName.split(' ').slice(1).join(' ')
})

onMounted(() => {
  getAbout()
})

const scrollToSection = (id) => {
  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
/* Maxsus qo'shimcha uslublar talab qilinmaydi, barchasi Tailwind CSS orqali hal qilindi */
</style>
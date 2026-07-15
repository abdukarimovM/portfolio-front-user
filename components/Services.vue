<template>
  <section id="services" class="bg-[#0f0f16] py-20 relative overflow-hidden">
    <!-- Orqa fondagi zamonaviy neon nurlari (Glow) -->
    <div class="absolute top-1/2 left-1/3 w-96 h-96 bg-[#7562E0]/10 rounded-full blur-[130px] pointer-events-none"></div>

    <div class="container mx-auto px-6 max-w-7xl relative z-10">
      
      <!-- Sarlavha -->
      <div class="text-center mb-16">
        <h1 class="text-white text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Skills
        </h1>
        <p class="text-[#7562E0] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mt-3">
          My Technical Expertise
        </p>
      </div>

      <!-- KARUSEL & GRID TIZIMI -->
      <!-- Mobilda/Planshetda silliq suriluvchi karusel, kompyuterda (lg:) odatiy 3 talik static grid -->
      <div 
        ref="scrollContainer"
        @scroll="handleScroll"
        class="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 lg:grid lg:grid-cols-3 lg:gap-8 xl:gap-12 custom-scrollbar scroll-smooth"
      >
        <div
          v-for="(item, index) in skills"
          :key="item.id"
          :data-index="index"
          class="skill-card group flex-shrink-0 w-[85vw] sm:w-[45vw] lg:w-auto snap-center bg-[#161624]/60 border border-white/5 rounded-2xl p-6 md:p-8 h-[360px] md:h-[400px] flex flex-col justify-between backdrop-blur-md relative transition-all duration-500 hover:-translate-y-2 hover:border-[#7562E0]/40 hover:shadow-[0_20px_40px_rgba(117,98,224,0.15)]"
        >
          <!-- Ikonka va Sarlavha -->
          <div>
            <div class="w-16 h-16 md:w-20 md:h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#7562E0]/10 group-hover:border-[#7562E0]/30 transition-all duration-500">
              <i :class="item.icon" class="text-4xl md:text-5xl text-white group-hover:text-[#7562E0] group-hover:scale-110 transition-all duration-500"></i>
            </div>
            
            <h3 class="text-white text-xl md:text-2xl font-bold group-hover:text-[#7562E0] transition-colors duration-300">
              {{ item.name }}
            </h3>
          </div>

          <!-- Tavsif matni -->
          <p class="text-gray-400 text-sm md:text-base font-light leading-relaxed line-clamp-4 md:line-clamp-5">
            {{ item.description }}
          </p>

          <!-- Effekt: Kartochka tagidagi chiziq -->
          <div class="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#7562E0] to-purple-500 rounded-b-2xl transition-all duration-500 group-hover:w-full"></div>
        </div>
      </div>

      <!-- 🎛 MOBIL/PLANSHET PAGINATION (Faqat kichik ekranlarda chiqadi) -->
      <div
        v-if="skills.length > 1"
        class="lg:hidden mt-8 flex justify-center items-center gap-2 select-none"
      >
        <!-- Oldingi (<) -->
        <button
          @click="slidePrev"
          class="pagn-btn pagn-arrow"
          title="Previous"
        >
          <i class="fas fa-chevron-left"></i>
        </button>

        <!-- Raqamlar -->
        <button
          v-for="(_, index) in skills"
          :key="index"
          @click="scrollToIndex(index)"
          :class="currentIndex === index ? 'pagn-btn-active' : 'pagn-btn'"
        >
          {{ index + 1 }}
        </button>

        <!-- Keyingi (>) -->
        <button
          @click="slideNext"
          class="pagn-btn pagn-arrow"
          title="Next"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const config = useRuntimeConfig()
const skills = ref([])
const currentIndex = ref(0)
const scrollContainer = ref(null)

const getSkills = async () => {
  try {
    skills.value = await $fetch(`${config.public.api}/api/skills`)
  } catch (err) {
    console.error('Skills maʼlumotlarini olishda xatolik:', err)
  }
}

// 1. Surish (Scroll) sodir bo'lganda faol kartaning indeksini aniqlash
const handleScroll = () => {
  if (!scrollContainer.value) return
  
  const container = scrollContainer.value
  const cards = container.querySelectorAll('.skill-card')
  let closestIndex = 0
  let closestDistance = Infinity

  cards.forEach((card, index) => {
    const cardRect = card.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    
    // Har bir kartaning markazi konteyner markaziga qanchalik yaqinligini aniqlash
    const cardCenter = cardRect.left + cardRect.width / 2
    const containerCenter = containerRect.left + containerRect.width / 2
    const distance = Math.abs(cardCenter - containerCenter)

    if (distance < closestDistance) {
      closestDistance = distance
      closestIndex = index
    }
  })

  currentIndex.value = closestIndex
}

// 2. Raqam bosilganda o'sha kartaga avtomatik scroll qilish
const scrollToIndex = (index) => {
  if (!scrollContainer.value) return
  const container = scrollContainer.value
  const cards = container.querySelectorAll('.skill-card')
  
  if (cards[index]) {
    const card = cards[index]
    const containerScrollLeft = container.scrollLeft
    const cardRect = card.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()

    // Kartani konteyner o'rtasiga chiroyli tekislab o'tkazish
    const targetScroll = containerScrollLeft + cardRect.left - containerRect.left - (containerRect.width - cardRect.width) / 2
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })
    currentIndex.value = index
  }
}

// 3. Oldingiga o'tkazish (<) - Cheksiz (Infinite) aylanish mantiqi bilan
const slidePrev = () => {
  if (currentIndex.value > 0) {
    scrollToIndex(currentIndex.value - 1)
  } else {
    // Agar birinchisida turganda < bosilsa, eng oxirgisiga sakraydi
    scrollToIndex(skills.value.length - 1)
  }
}

// 4. Keyingiga o'tkazish (>) - Cheksiz (Infinite) aylanish mantiqi bilan
const slideNext = () => {
  if (currentIndex.value < skills.value.length - 1) {
    scrollToIndex(currentIndex.value + 1)
  } else {
    // Agar oxirgisida turganda > bosilsa, eng birinchisiga qaytadi (Infinite)
    scrollToIndex(0)
  }
}

onMounted(() => {
  getSkills()
})
</script>

<style scoped>
/* Mobildagi scroll tasmalarini butunlay yashirish */
.custom-scrollbar::-webkit-scrollbar {
  display: none;
}
.custom-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

div {
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.02);
}

/* 🎨 PAGINATION TUGMALARI */
.pagn-btn {
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(22, 22, 36, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  color: #a1a1aa;
  font-weight: 500;
  font-size: 13px;
  backdrop-filter: blur(8px);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.pagn-btn:hover {
  color: #fff;
  border-color: #7562E0;
  background: rgba(117, 98, 224, 0.1);
  box-shadow: 0 0 15px rgba(117, 98, 224, 0.2);
}

.pagn-btn-active {
  width: 38px;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #7562E0;
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid #7562E0;
  box-shadow: 0 0 15px rgba(117, 98, 224, 0.4);
}

.pagn-arrow {
  font-size: 11px;
}
</style>
<template>
  <!-- Header: bg-[#0f0f16]/70 shaffoflik va kuchliroq backdrop-blur bilan premium glassmorphic effekt beradi -->
  <header
    class="fixed top-0 left-0 w-full z-50 bg-[#0f0f16]/70 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
  >
    <div class="container mx-auto px-6 max-w-7xl">
      <nav class="h-[75px] md:h-[85px] flex justify-between items-center">

        <!-- 🚀 Logo: "Abdukarimov" logotipi sayt foniga 100% singib ketadi -->
<div
  @click="scrollToSection('home')"
  class="flex items-center cursor-pointer select-none py-1 hover:scale-105 duration-300 logo-container"
>
  <img 
    src="/images/logonew.png" 
    alt="Abdukarimov Logo" 
    class="h-[45px] sm:h-[55px] w-auto object-contain mix-blend-screen drop-shadow-[0_0_15px_rgba(117,98,224,0.4)]"
  />
</div>

        <!-- Desktop Menu: Shrift o'lchami biroz kichraytirildi va chiroyli chiziqli animatsiya qo'shildi -->
        <div
          class="hidden lg:flex items-center gap-8 xl:gap-10 text-base font-medium text-gray-300"
        >
          <button
            v-for="item in menuItems"
            :key="item.id"
            @click="scrollToSection(item.id)"
            class="nav-link relative py-2 hover:text-white transition-colors duration-300"
          >
            {{ item.label }}
          </button>
        </div>

        <!-- Mobile Menu Button: Zamonaviyroq ko'rinish uchun fon berildi -->
        <button
          @click="menuOpen = !menuOpen"
          class="lg:hidden w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white text-2xl transition-all active:scale-95"
        >
          <i :class="menuOpen ? 'bx bx-x' : 'bx bx-menu'"></i>
        </button>
      </nav>
    </div>

    <!-- Mobile Menu: To'liq shaffof, neon borderli va ichki paddingli qilib bezatildi -->
    <transition name="menu">
      <div
        v-if="menuOpen"
        class="lg:hidden absolute top-[75px] md:top-[85px] left-0 w-full bg-[#0f0f16]/95 backdrop-blur-2xl border-b border-[#7562E0]/20 shadow-xl overflow-hidden"
      >
        <div class="flex flex-col text-gray-300 text-lg font-medium p-4 gap-2">
          <button
            v-for="item in menuItems"
            :key="item.id"
            @click="navigate(item.id)"
            class="w-full py-3 px-4 text-left rounded-xl hover:bg-[#7562E0]/10 hover:text-white transition-all duration-200"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </transition>

    <!-- Pastki qismdagi neon chiziq: Chekkalari xiralashgan yumshoq ko'rinishda -->
    <div class="h-[2px] w-full bg-gradient-to-r from-transparent via-[#7562E0]/40 to-transparent"></div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

// Menyuda "Skills" bo'limi ham to'g'ri ishlashi uchun id: 'services' ga moslab qo'yilgan
const menuItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'services' },
  { label: 'Education', id: 'education' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' }
]

const scrollToSection = (id) => {
  const section = document.getElementById(id)
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth'
    })
  }
}

const navigate = (id) => {
  menuOpen.value = false
  scrollToSection(id)
}
</script>

<style scoped>
/* Desktop Menyudagi tugmalar ostida chiroyli chiziq paydo bo'lish animatsiyasi */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  /* Standart CSS gradient */
  background: linear-gradient(to right, #7562E0, #a855f7); 
  box-shadow: 0 0 8px #7562E0;
  transition: all 0.3s ease-in-out;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 100%;
}

/* Mobil menyu uchun silliq ochilish va yopilish effekti */
.menu-enter-active,
.menu-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 400px;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

/* ⚡️ Hover bo'lganda logotip orqasidagi neon porlash kuchayadi */
.logo-container:hover img {
  filter: drop-shadow(0 0 16px rgba(117, 98, 224, 0.75)) contrast(1.25);
}
</style>
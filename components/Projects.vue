<template>
  <section id="projects" class="bg-[#0f0f16] min-h-screen py-20 relative overflow-hidden">
    <div class="absolute top-1/3 left-1/4 w-96 h-96 bg-[#7562E0]/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto px-4 max-w-7xl relative z-10">
      
      <div class="text-center mb-16 md:mb-24">
        <h1 class="text-white text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Projects
        </h1>
        <p class="text-[#7562E0] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mt-3">
          My Recent Works
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
        <div
          v-for="item in paginatedProjects"
          :key="item.id"
          class="project-card group relative bg-[#161624]/60 border border-white/5 rounded-2xl p-5 flex flex-col justify-between backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#7562E0]/40 hover:shadow-[0_20px_40px_rgba(117,98,224,0.15)] md:last:odd:col-span-2 md:last:odd:mx-auto md:last:odd:w-1/2 lg:last:odd:col-span-1 lg:last:odd:w-full"
        >
          <div>
            <div class="w-full h-[220px] sm:h-[250px] rounded-xl overflow-hidden border border-white/10 relative">
              <img
                :src="`${config.public.api}${item.image}`"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Project Image"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0f0f16]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div class="flex items-center gap-1.5 mt-5 text-xs text-[#7562E0] bg-[#7562E0]/10 px-3 py-1.5 rounded-md border border-[#7562E0]/20 w-fit font-medium">
              <i class="bx bx-code-alt text-base"></i>
              {{ item.direction }}
            </div>

            <h3 class="text-white text-xl md:text-2xl font-bold mt-4 group-hover:text-[#7562E0] transition-colors duration-300">
              {{ item.title }}
            </h3>

            <p class="text-gray-400 text-sm md:text-base mt-2.5 font-light leading-relaxed line-clamp-3">
              {{ item.description }}
            </p>
          </div>

          <div class="mt-8">
            <a
              :href="item.preview"
              target="_blank"
              class="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-white/5 border border-white/10 text-white rounded-xl font-medium transition-all duration-300 group-hover:bg-[#7562E0] group-hover:border-[#7562E0] group-hover:shadow-[0_0_20px_rgba(117,98,224,0.4)] active:scale-95"
            >
              View Live
              <i class="bx bx-link-external text-lg"></i>
            </a>
          </div>

          <div class="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#7562E0] to-purple-500 rounded-b-2xl transition-all duration-500 group-hover:w-full"></div>
        </div>
      </div>

      <div
        v-if="totalPages > 1"
        class="mt-16 flex gap-3 justify-center items-center"
      >
        <span
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="currentPage === page ? 'w-8 bg-[#7562E0] shadow-[0_0_15px_#7562E0]' : 'w-2.5 bg-gray-600 hover:bg-gray-400'"
          class="h-2.5 rounded-full cursor-pointer transition-all duration-300"
        ></span>
      </div>

      <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-[#7562E0]/30 to-transparent mt-20"></div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const projects = ref([])
const currentPage = ref(1)
const itemsPerPage = 3
const config = useRuntimeConfig()

const getProjects = async () => {
  try {
    projects.value = await $fetch(`${config.public.api}/api/projects`)
  } catch (error) {
    console.error('Projects yuklanmadi:', error)
  }
}

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return projects.value.slice(start, start + itemsPerPage)
})

const totalPages = computed(() => {
  return Math.ceil(projects.value.length / itemsPerPage)
})

watch(totalPages, (pages) => {
  if (currentPage.value > pages) {
    currentPage.value = pages || 1
  }
})

onMounted(() => {
  getProjects()
})
</script>

<style scoped>
.project-card {
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.02);
}
</style>
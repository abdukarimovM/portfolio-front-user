<template>
  <section id="contact" class="bg-[#0f0f16] py-20 relative overflow-hidden">
    <!-- Orqa fondagi maxsus neon effektlari (Glow) -->
    <div class="absolute top-1/2 left-1/4 w-96 h-96 bg-[#7562E0]/10 rounded-full blur-[130px] pointer-events-none"></div>
    <div class="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container mx-auto px-6 max-w-7xl relative z-10">
      
      <!-- Sarlavha -->
      <div class="text-center mb-16">
        <h1 class="text-white text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Contact Me
        </h1>
        <p class="text-[#7562E0] uppercase tracking-[0.2em] text-xs md:text-sm font-semibold mt-3">
          Let's Build Something Together
        </p>
      </div>

      <!-- Asosiy Blok -->
      <div class="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">
        
        <!-- CHAP TOMON: Socials (Connect with me) -->
        <div class="w-full lg:w-[35%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 class="text-white text-3xl md:text-4xl font-bold tracking-tight">
            Connect with me:
          </h2>
          <p class="text-gray-400 text-sm md:text-base mt-4 font-light leading-relaxed">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the platforms below or send me a message directly.
          </p>

          <!-- Ijtimoiy tarmoq ikonkalari -->
          <div class="mt-8 flex flex-wrap gap-5 justify-center lg:justify-start">
            <a
              v-for="item in socials"
              :key="item.id"
              :href="item.link"
              :target="item.link.startsWith('mailto:') ? '_self' : '_blank'"
              class="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7562E0] hover:text-white hover:bg-[#7562E0] hover:border-[#7562E0] hover:shadow-[0_0_20px_rgba(117,98,224,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              <i :class="item.icon" class="text-2xl md:text-3xl"></i>
            </a>
          </div>
        </div>

        <!-- O'NG TOMON: Message Form -->
        <div class="w-full lg:w-[65%] bg-[#161624]/60 border border-white/5 rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)] contact-card">
          <h2 class="text-white text-2xl md:text-3xl font-bold mb-8">
            Send me a Message
          </h2>

          <form @submit.prevent="sendMessage" class="space-y-6">
            <!-- Name & Email -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input 
                v-model="name"
                type="text" 
                placeholder="Name"
                class="input-field"
                required
              />
              <input 
                v-model="email"
                type="email" 
                placeholder="Email"
                class="input-field"
                required
              />
            </div>

            <!-- Title Input -->
            <input 
              v-model="title"
              type="text" 
              placeholder="Title"
              class="input-field"
              required
            />

            <!-- Message TextArea -->
            <textarea 
              v-model="message"
              rows="5"
              placeholder="Message"
              class="input-field resize-none pt-4"
              required
            ></textarea>

            <!-- Submit Button -->
            <div class="flex justify-start">
              <button
                type="submit"
                :disabled="loading"
                class="submit-btn"
              >
                {{ loading ? 'Sending...' : 'Send Message' }}
              </button>
            </div>
          </form>
        </div>

      </div>

      <!-- Pastki yupqa chiziq va Mualliflik huquqi -->
      <div class="h-[1px] w-full bg-gradient-to-r from-transparent via-[#7562E0]/30 to-transparent mt-20 mb-8"></div>
      <p class="text-center text-gray-500 text-sm font-light">
        &copy; 2026 Muslimbek Abdukarimov
      </p>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Socials State
const socials = ref([])
const config = useRuntimeConfig()

// Form States
const name = ref('')
const email = ref('')
const title = ref('')
const message = ref('')
const loading = ref(false)

// Fetch Social Links
const getSocials = async () => {
  try {
    socials.value = await $fetch(`${config.public.api}/api/socials`)
  } catch (error) {
    console.error('Socials yuklanmadi:', error)
  }
}

// Clear Form Inputs
const clearForm = () => {
  name.value = ''
  email.value = ''
  title.value = ''
  message.value = ''
}

// Send Message (POST Request)
const sendMessage = async () => {
  loading.value = true
  try {
    await $fetch(`${config.public.api}/api/contact`, {
      method: 'POST',
      body: {
        name: name.value,
        email: email.value,
        title: title.value,
        message: message.value,
      },
    })

    alert('✅ Message sent successfully.')
    clearForm()
  } catch (error) {
    console.error('Message yuborilmadi:', error)
    alert('❌ Failed to send message.')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getSocials()
})
</script>

<style scoped>
.contact-card {
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.02);
}

.input-field {
  width: 100%;
  background: rgba(15, 15, 22, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 14px 20px;
  color: white;
  font-weight: 300;
  outline: none;
  transition: all 0.3s ease;
}

.input-field:focus {
  border-color: #7562E0;
  box-shadow: 0 0 15px rgba(117, 98, 224, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.01);
}

.submit-btn {
  width: 100%;
}
@media (min-width: 640px) {
  .submit-btn {
    width: auto;
  }
}

.submit-btn {
  padding: 14px 32px;
  background: #7562E0;
  color: white;
  font-weight: 500;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(117, 98, 224, 0.3);
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: rgba(117, 98, 224, 0.9);
  box-shadow: 0 0 30px rgba(117, 98, 224, 0.5);
  transform: translateY(-1px);
}

.submit-btn:active:not(:disabled) {
  transform: scale(0.98);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
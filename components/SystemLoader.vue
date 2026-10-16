<template>
  <Transition name="cyber-fade">
    <div v-if="isLoading" class="cyber-loader-overlay">
      <!-- Cyber Grid Background -->
      <div class="cyber-grid"></div>

      <div class="central-content">
        <!-- Neon Ring Wrapper (Saytingizdagi binafsha neon stili) -->
        <div class="neon-ring-wrapper">
          <div class="neon-ring"></div>
          <div class="neon-ring-inner"></div>
          <div class="cyber-logo-core">
            <!-- M harfi o'rniga logotip rasmi -->
            <img src="/images/logonew.png" alt="Logo" class="logo-img" />
          </div>
        </div>

        <!-- Cyberpunk HUD Status Box -->
        <div class="cyber-hud-card">
          <div class="hud-top">
            <span class="hud-tag">[SYS_INIT]</span>
            <span class="hud-live-dot"></span>
          </div>

          <div class="timer-wrapper">
            <span class="timer-label">SYSTEM_ELAPSED:</span>
            <span class="timer-value">{{ elapsedTime }}s</span>
          </div>

          <p class="status-message" :class="statusClass">
            {{ currentStatusMessage }}
          </p>

          <!-- Cyber Scan Line Animation -->
          <div class="scan-bar">
            <div class="scan-line"></div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: true
  }
})

const elapsedTime = ref(0)
let timerInterval = null

const currentStatusMessage = computed(() => {
  if (elapsedTime.value < 3) return "Establishing Neural Link..."
  if (elapsedTime.value < 10) return "Awaiting Backend Response..."
  if (elapsedTime.value < 20) return "Render Cold Start: Waking up instance..."
  return "Loading Cybernetic Core Resources..."
})

const statusClass = computed(() => {
  if (elapsedTime.value < 10) return 'info'
  if (elapsedTime.value < 20) return 'warning'
  return 'alert'
})

onMounted(() => {
  const startTime = Date.now()
  timerInterval = setInterval(() => {
    elapsedTime.value = ((Date.now() - startTime) / 1000).toFixed(1)
  }, 100)
})

onUnmounted(() => {
  if (timerInterval) clearInterval(timerInterval)
})
</script>

<style scoped>
/* Fullscreen Overlay */
.cyber-loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #090611;
  background-image: radial-gradient(circle at center, #130d24 0%, #08050e 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  overflow: hidden;
}

/* Fon uchun Cyber Grid */
.cyber-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 40px 40px;
  background-image: 
    linear-gradient(to right, rgba(117, 98, 224, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(117, 98, 224, 0.05) 1px, transparent 1px);
  pointer-events: none;
}

.central-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  z-index: 2;
}

/* Neon Ring - #7562E0 rangi bilan */
.neon-ring-wrapper {
  position: relative;
  width: 130px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.neon-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid rgba(117, 98, 224, 0.2);
  border-top: 3px solid #7562E0;
  border-right: 3px solid #7562E0;
  box-shadow: 0 0 25px rgba(117, 98, 224, 0.6), inset 0 0 15px rgba(117, 98, 224, 0.4);
  animation: rotateRing 2.5s linear infinite;
}

.neon-ring-inner {
  position: absolute;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  border: 2px dashed rgba(117, 98, 224, 0.5);
  animation: rotateRingReverse 6s linear infinite;
}

.cyber-logo-core {
  width: 80px; /* 65px o'rniga 80px qilindi */
  height: 80px; /* 65px o'rniga 80px qilindi */
  background: rgba(18, 12, 33, 0.85);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 18px rgba(117, 98, 224, 0.6);
  border: 1px solid rgba(117, 98, 224, 0.4);
  overflow: hidden;
  padding: 6px; /* 12px o'rniga 6px qilinib, logo maydoni kengaytirildi */
}

.logo-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Cyber HUD Box */
.cyber-hud-card {
  width: 320px;
  background: rgba(15, 10, 26, 0.85);
  border: 1px solid rgba(117, 98, 224, 0.35);
  border-radius: 16px;
  padding: 20px;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 15px rgba(117, 98, 224, 0.15);
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
}

.hud-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hud-tag {
  font-family: monospace;
  font-size: 0.75rem;
  color: #7562E0;
  letter-spacing: 1px;
}

.hud-live-dot {
  width: 8px;
  height: 8px;
  background-color: #7562E0;
  border-radius: 50%;
  box-shadow: 0 0 8px #7562E0;
  animation: pulseDot 1.5s infinite;
}

.timer-wrapper {
  font-family: monospace;
  font-size: 0.95rem;
  color: #c4b5fd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.timer-value {
  color: #7562E0;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 0 0 8px rgba(117, 98, 224, 0.8);
}

.status-message {
  margin: 0;
  font-size: 0.85rem;
  font-family: system-ui, sans-serif;
  transition: color 0.3s ease;
}

.status-message.info { color: #ddd6fe; }
.status-message.warning { color: #facc15; text-shadow: 0 0 6px rgba(250, 204, 21, 0.4); }
.status-message.alert { color: #f87171; text-shadow: 0 0 6px rgba(248, 113, 113, 0.4); }

/* Scan Line Animation */
.scan-bar {
  width: 100%;
  height: 3px;
  background: rgba(117, 98, 224, 0.15);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  margin-top: 4px;
}

.scan-line {
  width: 40%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #7562E0, transparent);
  position: absolute;
  animation: scan 1.8s infinite ease-in-out;
}

/* Animatsiyalar */
@keyframes rotateRing {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes rotateRingReverse {
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0deg); }
}

@keyframes pulseDot {
  0%, 100% { opacity: 0.3; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}

@keyframes scan {
  0% { left: -40%; }
  100% { left: 100%; }
}

/* Transition Effect */
.cyber-fade-leave-active {
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.cyber-fade-leave-to {
  opacity: 0;
}
</style>
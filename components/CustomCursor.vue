<!-- CustomCursor.vue -->
<template>
  <Teleport to="body">
    <div v-if="enabled" class="cursor-layer">
      <!-- Cyberpunk Nishon (Hoverda burchakli HUD ga aylanadi) -->
      <div
        ref="dotEl"
        class="cyber-target"
        :class="{ 'is-hover': isHovering, 'is-hidden': !isVisible, 'is-down': isDown }"
      ></div>
      <!-- Orqadagi neon porlash aorasi -->
      <div
        ref="glowEl"
        class="cursor-glow"
        :class="{ 'is-hover': isHovering, 'is-hidden': !isVisible }"
      ></div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  hideDefaultCursor: { type: Boolean, default: true },
  hoverSelector: {
    type: String,
    default: 'a, button, input, textarea, select, [role="button"], .project-card, .submit-btn, .education-card'
  }
})

const enabled = ref(false)
const isVisible = ref(false)
const isHovering = ref(false)
const isDown = ref(false)

const dotEl = ref(null)
const glowEl = ref(null)

let mouseX = 0
let mouseY = 0
let glowX = 0
let glowY = 0
let rafId = null

function onMouseMove(e) {
  mouseX = e.clientX
  mouseY = e.clientY
  if (!isVisible.value) isVisible.value = true
  if (dotEl.value) dotEl.value.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
}

function onMouseOver(e) {
  isHovering.value = !!e.target.closest(props.hoverSelector)
}

function onMouseDown() { isDown.value = true }
function onMouseUp() { isDown.value = false }
function onLeaveWindow() { isVisible.value = false }
function onEnterWindow() { isVisible.value = true }

function loop() {
  glowX += (mouseX - glowX) * 0.12
  glowY += (mouseY - glowY) * 0.12
  if (glowEl.value) glowEl.value.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`
  rafId = requestAnimationFrame(loop)
}

onMounted(() => {
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  enabled.value = hasFinePointer && !prefersReducedMotion
  if (!enabled.value) return

  if (props.hideDefaultCursor) {
    document.documentElement.style.cursor = 'none'
  }

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseover', onMouseOver)
  window.addEventListener('mousedown', onMouseDown)
  window.addEventListener('mouseup', onMouseUp)
  document.addEventListener('mouseleave', onLeaveWindow)
  document.addEventListener('mouseenter', onEnterWindow)

  rafId = requestAnimationFrame(loop)
})

onBeforeUnmount(() => {
  if (props.hideDefaultCursor) {
    document.documentElement.style.cursor = ''
  }
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseover', onMouseOver)
  window.removeEventListener('mousedown', onMouseDown)
  window.removeEventListener('mouseup', onMouseUp)
  document.removeEventListener('mouseleave', onLeaveWindow)
  document.removeEventListener('mouseenter', onEnterWindow)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.cursor-layer {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 99999;
}

/* 🟥 ASOSIY CYBERPUNK NISHON */
.cyber-target {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  margin: -4px 0 0 -4px;
  background: #7562E0; /* Loyihangizning binafsha neon rangi */
  box-shadow: 0 0 10px #7562E0;
  will-change: transform;
  /* Kvadratdan HUD ramkasiga silliq o'tish animatsiyasi */
  transition: 
    width .3s cubic-bezier(0.16, 1, 0.3, 1), 
    height .3s cubic-bezier(0.16, 1, 0.3, 1), 
    margin .3s cubic-bezier(0.16, 1, 0.3, 1), 
    background .2s ease,
    border-radius .3s ease;
}

/* 🟢 ORQADAGI NEON GLOW (AURA) */
.cursor-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  margin: -20px 0 0 -20px;
  background: radial-gradient(circle, rgba(117, 98, 224, 0.2) 0%, transparent 70%);
  will-change: transform;
  transition: width .3s ease, height .3s ease, margin .3s ease;
}

/* 🔥 HOVER HOLATI: HUD Burchakli Qavslarga (Target Brackets) aylanish */
.cyber-target.is-hover {
  width: 44px;
  height: 44px;
  margin: -22px 0 0 -22px;
  background: transparent;
  /* To'rt burchakda qavs hosil qilish siri (Linear-gradient yordamida) */
  background-image: 
    linear-gradient(to right, #7562E0 3px, transparent 3px),
    linear-gradient(to bottom, #7562E0 3px, transparent 3px),
    linear-gradient(to left, #7562E0 3px, transparent 3px),
    linear-gradient(to bottom, #7562E0 3px, transparent 3px),
    linear-gradient(to right, #7562E0 3px, transparent 3px),
    linear-gradient(to top, #7562E0 3px, transparent 3px),
    linear-gradient(to left, #7562E0 3px, transparent 3px),
    linear-gradient(to top, #7562E0 3px, transparent 3px);
  background-position: 
    0 0, 0 0, 100% 0, 100% 0, 
    0 100%, 0 100%, 100% 100%, 100% 100__;
  background-size: 10px 2px, 2px 10px;
  background-repeat: no-repeat;
  filter: drop-shadow(0 0 8px rgba(117, 98, 224, 0.8));
  animation: cyber-pulse 2s infinite linear;
}

/* Hover bo'lganda nishon markazida kichik o'tkir nuqta hosil qilish */
.cyber-target.is-hover::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  margin: -2px 0 0 -2px;
  background: #fff;
  box-shadow: 0 0 8px #fff;
}

.cursor-glow.is-hover {
  width: 80px;
  height: 80px;
  margin: -40px 0 0 -40px;
  background: radial-gradient(circle, rgba(117, 98, 224, 0.15) 0%, transparent 75%);
}

/* ⚡️ CLICK (BOSILGANDA) REAKSIYASI */
.cyber-target.is-down {
  transform: scale(0.6) rotate(45deg); /* Bosilganda 45 daraja burilib kichrayadi */
  filter: drop-shadow(0 0 12px #fff);
}
.cyber-target.is-down::before {
  background: #7562E0;
}

/* O'chib-yonish (Glow pulse) animatsiyasi */
@keyframes cyber-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.04); opacity: 0.9; }
}

.cyber-target.is-hidden,
.cursor-glow.is-hidden {
  opacity: 0;
}
</style>
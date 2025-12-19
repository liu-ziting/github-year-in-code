<template>
  <Transition
  >
    <div v-if="visible" class="fixed top-10 left-1/2 -translate-x-1/2 z-[100] min-w-[320px] max-w-[90vw]">
      <div class="glass p-4 border-l-4 shadow-2xl flex items-center gap-4 bg-slate-900/90 backdrop-blur-xl"
           :class="type === 'error' ? 'border-l-red-500' : 'border-l-teal-500'">
        <div class="text-2xl">
          {{ type === 'error' ? '🚫' : '✅' }}
        </div>
        <div class="flex-1">
          <p class="text-sm font-bold text-white leading-tight">{{ message }}</p>
        </div>
        <button @click="$emit('close')" class="text-white/40 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean
  message: string
  type: 'error' | 'success'
}>()

defineEmits<{
  close: []
}>()
</script>

<style scoped>
.glass {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-left-width: 4px;
}
</style>

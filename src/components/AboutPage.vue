<script setup lang="ts">
import dsImage from '../assets/ds.png'

defineEmits<{
  back: []
}>()
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 font-sans selection:bg-teal-500/30">
    <div class="max-w-4xl mx-auto space-y-12 animate__animated animate__fadeIn">
      <!-- Header -->
      <header class="flex items-center justify-between border-b border-slate-800 pb-8">
        <div>
          <h1 class="text-4xl font-black bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            About
          </h1>
          <p class="mt-2 text-slate-400">GitHub Trace Soul </p>
        </div>
        <button 
          @click="$emit('back')"
          class="px-4 py-2 rounded-full border border-slate-700 hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          返回首页
        </button>
      </header>

      <!-- Intro Section -->
      <section class="space-y-6">
        <div class="glass p-8 rounded-3xl border border-slate-800 bg-slate-900/50">
          <h2 class="text-2xl font-bold mb-4 flex items-center gap-3">
            <span class="text-teal-400">🚀</span> 项目初衷
          </h2>
          <p class="leading-relaxed text-slate-300">
            GitHub 2025 Year in Code 是一个专注于开发者行为建模的年度回顾工具。不同于传统的数据罗列，我们通过 AI 深度扫描你的公开仓库<strong>资产配置、技术栈演进及开源影响力</strong>，解码出隐藏在项目列表背后的“开发者数字人格”。
            它不仅是一份数据报告，更是一张融合了技术深度与社交属性的“赛博灵魂名片”。
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <!-- AI Model & Edge Proxy Section -->
          <div class="glass p-8 rounded-3xl border border-slate-800 bg-slate-900/50">
            <h2 class="text-2xl font-bold mb-4 flex items-center gap-3">
              <span class="text-purple-400">🧠</span> AI 模型与调度网关
            </h2>
            <ul class="space-y-4 text-sm">
              <li class="flex items-start gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></div>
                <div>
                  <strong class="text-slate-100">主模型: Xiaomi Mimo-v2-flash</strong>
                  <p class="text-slate-400 mt-1">提供极速且精准的语义分析，擅长捕捉技术栈的细微变化。</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5"></div>
                <div>
                  <strong class="text-slate-100">备用模型: Zhipu GLM-4v-flash</strong>
                  <p class="text-slate-400 mt-1">作为高可靠性的备份方案，确保在高并发期间服务依然稳定。</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5"></div>
                <div>
                  <strong class="text-slate-100">AI 调度网关 (Edge Proxy)</strong>
                  <p class="text-slate-400 mt-1">
                    基于 Cloudflare Workers 部署的边缘调度层，实时监控模型可用性并进行智能流量分发与 Fallback。
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <!-- How to get GitHub ID Section -->
          <div class="glass p-8 rounded-3xl border border-slate-800 bg-slate-900/50">
            <h2 class="text-2xl font-bold mb-4 flex items-center gap-3">
              <span class="text-amber-400">🔍</span> 如何获取 GitHub ID？
            </h2>
            <div class="space-y-4">
              <p class="text-sm text-slate-300">
                在首页搜索框中，您需要输入的是您的 GitHub 用户名（ID），而不是完整的个人主页链接。
              </p>
              <div class="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                <p class="text-xs text-slate-500 mb-2 font-mono">例如您的个人主页是：</p>
                <div class="text-sm font-mono break-all">
                  <span class="text-slate-400">https://github.com/</span><span class="text-amber-400 font-bold underline decoration-amber-500/50 underline-offset-4">liu-ziting</span><span class="text-slate-400">/</span>
                </div>
                <div class="mt-4 flex items-center gap-2 text-[10px] text-amber-500/80 font-bold tracking-wider">
                  <span class="flex h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                  输入内容即为：liu-ziting
                </div>
              </div>
              <p class="text-[10px] text-slate-500 italic leading-relaxed">
                * 提示：用户名通常显示在 GitHub 个人主页头像下方，或出现在主页 URL 的末尾。
              </p>
            </div>
          </div>
        </div>

        <!-- Request Mechanism Section (Full Width) -->
        <div class="glass p-8 rounded-3xl border border-slate-800 bg-slate-900/50">
          <h2 class="text-2xl font-bold mb-4 flex items-center gap-3">
            <span class="text-blue-400">🛡️</span> 请求与频率限制
          </h2>
          <p class="text-sm leading-relaxed text-slate-300 mb-4">
            为保护隐私，所有 GitHub 公开数据的抓取均在您的浏览器端直接完成。
          </p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-slate-950/30 p-4 rounded-xl border border-slate-800/50">
              <h3 class="text-sm font-bold text-slate-100 mb-2 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                速率限制 (Rate Limit)
              </h3>
              <p class="text-xs leading-relaxed text-slate-400">
                由于 GitHub 对匿名 API 请求有严格的速率限制（通常为 <code class="text-amber-400/80">60次/小时/IP</code>），若短时间内查询频繁，可能会触发 403 错误。
              </p>
            </div>
            <div class="bg-slate-950/30 p-4 rounded-xl border border-slate-800/50">
              <h3 class="text-sm font-bold text-slate-100 mb-2 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                解决方案
              </h3>
              <p class="text-xs leading-relaxed text-slate-400">
                如果您遇到速率限制错误，建议切换 VPN 节点（更改出口 IP）或等待一段时间后再试。本工具绝不存储您的任何个人 Token。
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Connect & Support -->
      <section class="glass p-8 md:p-16 rounded-[3rem] border border-slate-800 bg-slate-900/40 relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 blur-[120px] rounded-full"></div>
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full"></div>

        <div class="relative z-10 space-y-12">
          <div class="text-center max-w-2xl mx-auto space-y-4">
            <h2 class="text-4xl font-black bg-gradient-to-r from-teal-400 via-white to-purple-400 bg-clip-text text-transparent">
              交流与支持
            </h2>
            <p class="text-slate-400">
              项目完全开源，如果你喜欢这个工具，欢迎通过以下方式与我交流或提供支持。
            </p>
          </div>

          <div class="flex flex-col items-center space-y-12">
            <!-- Donation Section -->
            <div class="flex flex-col items-center gap-8">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
                <div class="relative bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl">
                  <img :src="dsImage" alt="Donation" class="w-56 h-56 md:w-72 md:h-72 object-contain" />
                  <div class="absolute top-0 left-0 w-full h-1 bg-pink-400/30 blur-sm animate-[scan_3s_infinite]"></div>
                </div>
              </div>
              
              <div class="text-center space-y-3">
                <h3 class="text-2xl font-black text-white flex items-center justify-center gap-3">
                  <span class="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse"></span>
                  赞赏支持
                </h3>
                <p class="text-slate-400 max-w-sm">
                  如果你觉得这个工具对你有帮助，欢迎请作者喝杯咖啡，支持后续的维护与开发。
                </p>
              </div>
            </div>

            <!-- GitHub Follow & Contact -->
            <div class="flex flex-col items-center gap-6 pt-4 w-full">
              <div class="h-px w-24 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
              <div class="flex flex-col sm:flex-row items-center gap-4">
                <a href="https://github.com/liu-ziting" target="_blank" class="flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-800/50 hover:bg-slate-700 transition-all border border-slate-700 hover:border-pink-500/50 group">
                  <svg class="h-6 w-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <span class="font-bold text-lg text-slate-200">在 GitHub 上关注我</span>
                </a>
              </div>
              <p class="text-[10px] text-slate-600 font-mono">WeChat ID: lztziting0629</p>
            </div>
          </div>
        </div>
      </section>

      <footer class="text-center pt-12 border-t border-slate-800 text-slate-500 text-xs space-y-2">
        <p>© 2025 GitHub Trace Soul. Built with ❤️ for Developers.</p>
        <p class="opacity-50 font-mono tracking-wider italic">
          Crafted with <span class="text-teal-400/80">Gemini-3-Flash</span> via <span class="text-purple-400/80">VibeCoding</span>
        </p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.glass {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

@keyframes scan {
  0% { transform: translateY(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(272px); opacity: 0; }
}

@media (min-width: 768px) {
  @keyframes scan {
    0% { transform: translateY(0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(352px); opacity: 0; }
  }
}
</style>

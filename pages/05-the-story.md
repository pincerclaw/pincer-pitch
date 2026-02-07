---
layout: default
---

# The Story: How Bob Gets a Pizza 🍕

<div class="mt-8 flex flex-col gap-3">

  <!-- Step 1 -->
  <div v-click class="flex gap-4 items-center bg-gray-800/40 p-4 rounded-xl border border-white/5 transition-all hover:bg-gray-800/60">
    <div class="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex flex-none items-center justify-center font-bold border border-blue-500/20">1</div>
    <div class="flex-1">
      <div class="text-blue-400 font-bold text-[10px] uppercase tracking-widest mb-1">01. The Request</div>
      <p class="text-sm">Bob tells Agent Alice: <i class="opacity-80">"Find me a good pizza for tonight."</i></p>
    </div>
    <carbon:chat class="text-2xl opacity-20" />
  </div>

  <!-- Step 2 -->
  <div v-click class="flex gap-4 items-center bg-red-900/5 p-4 rounded-xl border border-red-500/10">
    <div class="w-10 h-10 rounded-full bg-red-500/10 text-red-500 flex flex-none items-center justify-center font-bold border border-red-500/20">2</div>
    <div class="flex-1">
      <div class="text-red-400 font-bold text-[10px] uppercase tracking-widest mb-1">02. The Barrier</div>
      <p class="text-sm">Alice finds <b>Domino's</b> menu but hits a <span class="text-red-400 font-mono font-bold">$0.05 data fee</span> (HTTP 402).</p>
    </div>
    <carbon:warning class="text-2xl opacity-20" />
  </div>

  <!-- Step 3 -->
  <div v-click class="flex gap-4 items-center bg-gray-900 p-4 rounded-xl border-2 border-red-500 shadow-xl shadow-red-500/10">
    <div class="w-10 h-10 rounded-full bg-red-500 text-white flex flex-none items-center justify-center font-bold shadow-lg">3</div>
    <div class="flex-1">
      <div class="text-red-500 font-bold text-[10px] uppercase tracking-widest mb-1">03. PINCER 🦞</div>
      <p class="text-sm font-medium"><b>Pizza Hut</b> pays the fee for the Agent and sends a <b>BOGO Coupon</b> to win the order.</p>
    </div>
    <carbon:flash class="text-2xl text-yellow-400" />
  </div>

  <!-- Step 4 -->
  <div v-click class="flex gap-4 items-center bg-green-900/5 p-4 rounded-xl border border-green-500/10">
    <div class="w-10 h-10 rounded-full bg-green-500/10 text-green-500 flex flex-none items-center justify-center font-bold border border-green-500/20">4</div>
    <div class="flex-1">
      <div class="text-green-400 font-bold text-[10px] uppercase tracking-widest mb-1">04. The Reward</div>
      <p class="text-sm">Alice orders Pizza Hut. Bob saves <b>$15.00</b> and earns <b>Pincer Points</b> for the next deal.</p>
    </div>
    <carbon:trophy class="text-2xl text-green-500 opacity-50" />
  </div>

</div>

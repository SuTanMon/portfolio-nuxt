<template>
  <header class="pt-6">
    <p class="text-sm uppercase tracking-widest text-secondary">BSIT Student · Learning Web Dev</p>
    <h1 class="border-b-[6px] border-base-content pb-3 text-3xl font-black sm:text-5xl">
      Hi, I'm John Kirby
    </h1>
    <div class="mt-6 flex flex-wrap items-center gap-6">
      <div class="avatar">
        <div class="w-32 border-4 border-primary">
          <img src="/images/Profile.png" alt="John Kirby Soliven" />
        </div>
      </div>
      <div class="max-w-md">
        <p>BSIT student from the Philippines, figuring out web development one project at a time.</p>
        <div class="mt-4 flex gap-3">
          <NuxtLink to="/about" class="btn btn-primary">About Me</NuxtLink>
          <NuxtLink to="/certifications" class="btn btn-outline btn-primary">View Certs</NuxtLink>
        </div>
      </div>
    </div>
    <div class="stats stats-vertical mt-8 w-full border-2 border-base-300 sm:stats-horizontal">
      <div class="stat"><div class="stat-title">Topics</div><div class="stat-value text-primary">8+</div></div>
      <div class="stat"><div class="stat-title">Year BSIT</div><div class="stat-value text-primary">3rd</div></div>
      <div class="stat"><div class="stat-title">Curiosity</div><div class="stat-value text-primary">∞</div></div>
    </div>
  </header>
</template>
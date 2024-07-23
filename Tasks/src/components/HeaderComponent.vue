<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="shadow shadow-[#41b883]">
    <h1 class="text-center pt-2 text-xl font-bold font-mono">GE Aerospace Projects</h1>
    <ul class="flex items-center justify-center  gap-10 p-7 text-xl font-bold">
      <li
        class="bg-[#41b883] py-1 px-2 border rounded-lg text-white hover:bg-white hover:border border-[#41b883] hover:text-[#41b883]"
      >
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="bg-[#41b883] py-1 px-2 border rounded-lg text-white hover:bg-white hover:border border-[#41b883] hover:text-[#41b883]">
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li class="bg-[#41b883] py-1 px-2 border rounded-lg text-white hover:bg-white hover:border border-[#41b883] hover:text-[#41b883]">
        <RouterLink to="/first-task">Task One</RouterLink>
      </li>
      <li class="bg-[#41b883] py-1 px-2 border rounded-lg text-white hover:bg-white hover:border border-[#41b883] hover:text-[#41b883]">
        <RouterLink to="/second-task">Task Two</RouterLink>
      </li>
    </ul>
  </div>
</template>

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

      <!-- I am commenting the two routes here on 24-7-24, i want you to have this thing when we click it must scroll to that component -->
      <!-- <li class="bg-[#41b883] py-1 px-2 border rounded-lg text-white hover:bg-white hover:border border-[#41b883] hover:text-[#41b883]">
        <RouterLink to="/#one">Task One</RouterLink>
      </li>
      <li class="bg-[#41b883] py-1 px-2 border rounded-lg text-white hover:bg-white hover:border border-[#41b883] hover:text-[#41b883]">
        <RouterLink to="/#two">Task Two</RouterLink>
      </li> -->
      <li class="bg-[#41b883] py-1 px-2 border rounded-lg text-white hover:bg-white hover:border border-[#41b883] hover:text-[#41b883]">
        <RouterLink to="/completion">Completion</RouterLink>
      </li>
    </ul>
  </div>
</template>

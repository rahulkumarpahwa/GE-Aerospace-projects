<script setup>
import MySolution from './MySolution.vue'
import ExampleAnswer from './ExampleAnswer.vue'
</script>

<template>
  <div class="flex items-center flex-col justify-center gap-10 m-4 font-mono">
    <div class="flex flex-col justify-center items-center gap-5">
    <h1 class="text-2xl font-bold">#Task One</h1>
    <p class="px-8 my-0 py-0 text-xl antialiased font-medium">In this task, you'll be creating a simple user interface with Vue.js. This page will include a title field that reads "Compute Product" as well as an image of your choice. It will also contain a "Compute" button that, when clicked, displays the product of two numbers.</p>
    </div>
    <div class="flex items-center justify-center gap-80">
      <div class="flex flex-col justify-center items-center gap-5">
        <h1 class="text-2xl font-bold">My Solution</h1>
        <MySolution />
      </div>

      <div class="flex flex-col justify-center items-center gap-5">
        <h1 class="text-2xl font-bold">Answer</h1>
        <ExampleAnswer />
      </div>
    </div>
  </div>
</template>

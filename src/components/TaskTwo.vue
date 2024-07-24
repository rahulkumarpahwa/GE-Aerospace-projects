<script setup>
import TaskTwoSolution from '@/components/TaskTwoSolution.vue'
import TaskTwoAnswer from '@/components/TaskTwoAnswer.vue'
</script>

<template>
  <div class="flex items-center flex-col justify-center gap-10 m-4 font-mono">
    <div class="flex flex-col justify-center items-center gap-5">
      <h1 class="text-2xl font-bold">#Task Two</h1>
      <p class="px-8 my-0 py-0 text-xl antialiased font-medium">
        In this task, you'll be writing technical requirements for a new supply chain feature that
        suggests the optimal time to order new plane parts. This calculation will be based on
        various factors, such as the date of the part's last replacement, the average time between
        replacements, and estimated shipping times. Your task is to convert these business
        requirements into technical requirements that can be implemented by the technical team.
      </p>
    </div>

    <div class="flex justify-center items-start gap-40 px-8">
      <div class="flex flex-col justify-center items-center gap-5">
        <h1 class="text-2xl font-bold">My Solution</h1>
        <TaskTwoSolution />
      </div>

      <div class="flex flex-col justify-center items-center gap-5">
        <h1 class="text-2xl font-bold">Answer</h1>
        <TaskTwoAnswer />
      </div>
    </div>
  </div>
</template>

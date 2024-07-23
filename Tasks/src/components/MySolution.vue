<script setup>
import { ref } from 'vue'
const firstNumber = ref(12)
const secondNumber = ref(13)
const answer = ref(0)

function compute() {
  const button = document.querySelector('.button')
  const ans = document.querySelector('.ans')
  answer.value = firstNumber.value * secondNumber.value
  button.classList.add('displayNone')
  ans.classList.remove('displayNone')
}
</script>

<template>
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center">
    <h1>Compute Product</h1>
    <img
      style="height: 300px; width: 300px; border-radius: 20px"
      src="https://cdn.theforage.com/vinternships/companyassets/ay2tsYxaTif7Nt6z7/AA4Bnq2tJHALwE8cg/1680718790218/pexels-photo-14197334.jpeg"
    />
    <p style="margin: 1px 0">First Number : {{ firstNumber }}</p>
    <p style="margin: 1px 0">Second Number : {{ secondNumber }}</p>
    <button
      v-on:click="compute"
      style="
        border-radius: 10px;
        background-color: lightgreen;
        border: none;
        padding: 5px;
        color: grey;
        margin: 1px 0;
      "
      class="button"
    >
      Compute
    </button>
    <p style="margin: 1px 0; padding: 5px" class="ans displayNone">Total : {{ answer }}</p>
    <a href="https://linkedin.com/in/rahulkumarpahwa" style="text-decoration: none; color: inherit"
      >Build By @RahulKumarPahwa</a
    >
  </div>
</template>

<style>
.displayNone {
  display: none;
}
</style>

<!-- <script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style> -->

<script setup>
import { ref } from 'vue'
const firstNumber = ref(12);
const secondNumber = ref(13);
const answer = ref(0);

function compute(){
const button = document.querySelector(".button");
const ans = document.querySelector(".ans");
answer.value = firstNumber.value * secondNumber.value;
button.classList.add("displayNone");
ans.classList.remove("displayNone");
}

</script>

<template>
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 1280px;">
  <h1>Compute Product</h1>
  <img style="height: 300px; width: 300px; border-radius: 20px;" src="https://cdn.theforage.com/vinternships/companyassets/ay2tsYxaTif7Nt6z7/AA4Bnq2tJHALwE8cg/1680718790218/pexels-photo-14197334.jpeg" />
  <p style="margin: 1px 0;">First Number : {{firstNumber}}</p>
  <p style="margin: 1px 0;">Second Number : {{secondNumber}}</p>
  <button v-on:click="compute" style="border-radius: 10px; background-color: lightgreen; border: none; padding: 5px; color: grey;" class="button">Compute</button>
  <p style="margin: 1px 0;" class="ans displayNone">Total : {{answer}}</p>
  <a href="https://linkedin.com/in/rahulkumarpahwa" style="text-decoration: none; color: inherit;">Build By @RahulKumarPahwa</a>
  </div>
</template>

<style>
.displayNone{
  display: none;
}
</style>





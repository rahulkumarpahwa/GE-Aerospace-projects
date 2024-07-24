<script>
import { RouterLink } from 'vue-router';
export default {
  data() {
      return {
        userData: {},
      };
    },
 async mounted() {
      try {
        const data = await fetch('https://api.github.com/users/rahulkumarpahwa')
        const json = await data.json()
       console.log(json)
      this.userData = json
      } catch (error) {
        console.log(error.message)
      }
  },
}
</script>

<template>
  <div className="h-[35rem] font-mono my-20">
      <div className="flex items-center justify-center gap-10">
        <div>
          <h3 className="text-center my-4 text-bold text-sans">Build By :</h3>
          <div className="border border-gray-500 hover:border-black max-w-[17rem] rounded-lg">
            <a :href="userData.html_url">
              <img 
                :src="userData.avatar_url"
                className="h-60 w-full object-cover rounded-tl-lg rounded-tr-lg"
                alt=""
              />
              <div className="p-2">
                <h2 className="text-xl text-center text-bold ">{{userData.name}}</h2>
                <p className="text-gray-500 hover:text-black">{{ userData.bio }}</p>
                <div className="text-gray-500 hover:text-black">
                  X :
                  <a
                    :href="`https://twitter.com/` + userData.twitter_username"
                    target="_blank"
                  >
                    @rahulkumarpahwa
                  </a>
                  <div class="flex gap-1 mt-1"> <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt=""  class="w-5 grayscale hue-rotate-30"/>:
             <a href="https://linkedin.com/in/rahulkumarpahwa">@rahulkumarpahwa</a>
             </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-4xl sm:text-6xl font-sans font-bold">
            About
          </h2>
          <p className="text-base">
            This is an GE Aerospace Projects App made using Vue.js. There are four
            routes :
            <ul className="ml-4 my-2 space-y-1 list-disc">
              <li class="hover:underline">
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li class="hover:underline">
                <RouterLink to="/About">About</RouterLink>
              </li> <li class="hover:underline">
                <RouterLink to="/task-one">Task One</RouterLink>
              </li> <li class="hover:underline">
                <RouterLink to="/task-two">Task Two</RouterLink>
              </li>
            </ul>
          </p>
          <h2 className="text-bold text-3xl">Features :</h2>
          <ul className="ml-4 space-y-1 list-disc">
            <li> This Projects Shows the Tasks and its Solutions.</li>
          </ul>

          <p className="text-bold text-3xl">TechStack : </p>
          <ul className="ml-4 space-y-1 list-disc">
            <li>Vue.js</li>
            <li>TailwindCSS</li>
          </ul>
        </div>
      </div>
    </div>
</template>

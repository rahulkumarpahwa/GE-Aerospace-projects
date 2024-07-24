<script>

export default {
  data() {
      return {
        userData: {}, // Initialize as an empty object
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
          <div className="border border-gray-500 hover:border-white max-w-[17rem] rounded-lg">
            <a href="">
              <img 
                :src="userData.avatar_url"
                className="h-60 w-full object-cover rounded-tl-lg rounded-tr-lg"
                alt=""
              />
              <div className="p-2">
                <h2 className="text-xl text-center text-bold ">{{userData.name}}</h2>
                <p className="text-gray-500 hover:text-white">{{ userData.bio }}</p>
                <div className="text-gray-500 hover:text-white">
                  X :
                  <a
                    :href="`https://twitter.com/` + userData.twitter_username"
                    target="_blank"
                  >
                    @rahulkumarpahwa
                  </a>
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
            This is an Authentication App made using Nextjs. There are three
            routes :
            <ul className="ml-4 my-2 space-y-1 list-disc">
              <li>
                {" "}
                <a href="/login">LogIn</a>
              </li>
              <li>
                <a href="/signup">SignUp</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
            </ul>
          </p>
          <h2 className="text-bold text-3xl">Features :</h2>
          <ul className="ml-4 space-y-1 list-disc">
            <li> User can SignUp or LogIn.</li>
            <li>After SignUp, user will get an email to verify.</li>
            <li>After Verification, user will LogIn and then see its info.</li>
          </ul>

          <p className="text-bold text-3xl">TechStack : </p>
          <ul className="ml-4 space-y-1 list-disc">
            <li>Nextjs</li>
            <li>TailwindCSS</li>
            <li>TypeScript</li>
            <li>JSX</li>
          </ul>
        </div>
      </div>
    </div>
</template>

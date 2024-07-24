<template>
  <h1 class="font-bold text-xl">Technical Requirements for a Supply Chain Feature</h1>

  <div>
    <h2 class="font-bold text-xl text-left">Business Requirements:</h2><p>
      To create a supply chain system which gives optimal time to order new plane parts. Also, it
      should be easily integrable with the current platform to be used.
    </p>
  </div>

  <div>
  <h2 class="font-bold text-xl text-left">Technical Requirements:</h2>
  <ul class="list-disc list-inside">
    <li>
      <span class="font-semibold text-xl">Data Access:</span>
      <ul class="list-[circle] list-inside ml-4">
        <li>
          We will access the data for date of last part replacement, the average time between
          replacements and estimated shipping times.
        </li>
        <li>
          We will also access the weather information for the days it has been shipped from seller
          to us. It will help us create a record for estimated shipping time for different weathers.
        </li>
      </ul>
    </li>
    <li>
      <span class="font-semibold text-xl">Machine Learning:</span>
      <ul class="list-[circle] list-inside ml-4">
        <li>
          We will train a model based upon the different data parameters we access and create a
          visual representation on our current platform.
        </li>
        <li>
          The model will tell us perfect time to order our product based upon the product we need
          after what time interval, based upon the weather in which we get the product as quick as
          possible.
        </li>
      </ul>
    </li>
  </ul>
  </div>

  <div>
  <h2 class="font-bold text-xl text-left">Key Metrics:</h2>
  <p>The performance of this system should be measured using the following key metrics:</p>
  <ol class="list-decimal list-inside ml-3">
    <li>Date of last replacement.</li>
    <li>Average time between replacements.</li>
    <li>Estimated shipping time.</li>
    <li>Weather conditions during each shipping.</li>
  </ol>
  </div>
</template>

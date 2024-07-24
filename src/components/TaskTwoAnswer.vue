<template>
  <h1 class="font-bold text-xl">Technical Requirements for a Supply Chain Feature</h1>

  <div>
    <h2 class="font-bold text-xl text-left">Business Requirements:</h2>
    <p>
      A supply chain feature that suggests the optimal time to order new plane parts. The system
      should provide order times that are early enough to avoid part shortages but late enough to
      keep costs low.
    </p>

    <p>
      These business requirements are broad enough to provide you with a lot of freedom over the
      technical requirements to include! The following requirements are a subset of the ideas you
      could explore:
    </p>
  </div>

  <div>
    <h2 class="font-bold text-xl text-left">Machine Learning:</h2>
    <ol class="list-decimal list-inside">
      <li>To ensure accurate predictions, the system must have regular access to current data.</li>
      <li>
        Machine learning models for prediction must be periodically retrained to prevent data drift
        over time.
      </li>
    </ol>
  </div>

  <div>
    <h2 class="font-bold text-xl text-left">Data Access:</h2>
    <ol class="list-decimal list-inside">
      <li>System requires access to the last install date for a given part.</li>
      <li>System requires access to expected shipping times.</li>
      <li>System requires access to historical data regarding wear and tear of parts.</li>
    </ol>
  </div>

  <div>
  <h2 class="font-bold text-xl text-left">Key Metrics:</h2>
  <ol class="list-decimal list-inside">
    <li>
      To avoid shortages, the system should be optimised to order parts before they are needed.
    </li>
    <li>
      The system should be optimised to order parts as close to when they are needed as possible.
    </li>
    <li>
      The performance of this system should be measured using the following key metrics:
      <ul class="list-[lower-alpha] list-inside ml-5">
        <li>Average number of days between a part’s arrival and the date it is needed.</li>
        <li>The percentage of parts received on time.</li>
        <li>Lost monetary value due to late parts.</li>
        <li>Surplus spending due to early part arrival.</li>
      </ul>
    </li>
  </ol>
  </div>
</template>

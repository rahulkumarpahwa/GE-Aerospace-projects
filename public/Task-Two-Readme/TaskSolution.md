## Technical Requirements for Supply Chain Feature 
## Business Requirements:
 A supply chain feature that suggests the optimal time to order new plane parts. The system should provide order times that are early enough to avoid part shortages but late enough to keep costs low. 

These business requirements are broad enough to provide you with a lot of freedom over the technical requirements to include! The following requirements are a subset of the ideas you could explore: 

## Machine Learning 
To ensure accurate predictions, the system must have regular access to current data.
Machine learning models for prediction must be periodically retrained to prevent data drift over time. 
 
## Data Access 
System requires access to the last install date for a given part.
System requires access to expected shipping times. 
System requires access to historical data regarding wear and tear of parts. 
 
## Key Metrics 
To avoid shortages, the system should be optimised to order parts before they are needed. 
The system should be optimised to order parts as close to when they are needed as possible. 
The performance of this system should be measured using the following key metrics: 
a. Average number of days between a part’s arrival and the date it is needed. 
b. The percentage of parts received on time.
c. Lost monetary value due to late parts. 
d. Surplus spending due to early part arrival.
const calculateFare = (distance, startTime, duration) => {
  /*
    This is the simplified version.
    - distance in miles
    - startTime in timestamps
    - duration in seconds
    */

  const baseCost = 1;
  const distanceCost = Math.ceil(distance * 5) * 0.5;

  return baseCost + distanceCost;
};

/*
Overview:
The	way	a taxi ride	is priced is as	follows:
1. Initial charge 1 EUR (as soon as the taxi starts moving)
2. .50 EUR per 1/5 th of a mile
3. .50 additional EUR between 8PM and 6AM
4. 1 EUR additional for busy periods between 4PM and 7PM
E.g. John gets in the taxi at 1PM (13:00) – not a busy period – and rides for 2 miles. His fare is
computed as follows:
1 EUR + (2 / (1/5)) * .50 EUR = 6 EUR

NB:
Additional costs mentionned in rules 3 and 4 are not clear enough.
Are they per hours ? Per miles ?
This is lacking of exemples for the additional costs.
If they are per miles, I would have need both the distance driven in normal hours and the distance driven in special hours, not only the total distance.
I.e. I am missing some data to calculate the fare.
It seems unlikely they are per hours.
That is why I removed rules 3 and 4.
*/

export default calculateFare;

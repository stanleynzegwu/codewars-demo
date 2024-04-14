// DESCRIPTION:
// This kata is a generalization of the "A Man And His Umbrellas" kata by mattlub. If you haven't completed that kata, you may wish to do so before attempting this one.

// A man travels to different locations. If it is rainy, he will take an umbrella with him, from wherever he's coming from to wherever he's going. If it is sunny, he will not.

// Your function will receive, as an argument, an array of objects containing each of the locations the man travels to, and the weather during the trip to that location, for example:

// [
//   ["work", "sunny"],
//   ["shop", "rainy"],
//   ["work", "rainy"],
//   ["home", "sunny"],
//   ["work", "rainy"],
//   ["gym",  "sunny"],
//   ["work", "sunny"],
//   ["home", "rainy"]
// ]
// Before his travels start, the man is at "home", and therefore "home" will always be present in the returned list of locations. The locations can be arbitrary strings, not just the ones shown in these examples. The weather is always either "sunny" or "rainy".

// Your function must return an object where the keys are the different locations that the man visited, and the values are the minimum number of umbrellas that must be at each of those locations before the man starts the sequence of travels, so that he never finds himself missing an umbrella when travelling somewhere. For example, for the above example:

// [
//   ["work", "sunny"],
//   ["shop", "rainy"], // there needs to be an umbrella at work
//   ["work", "rainy"], // he can re-use the umbrella he took to the shop
//   ["home", "sunny"],
//   ["work", "rainy"], // there needs to be an umbrella at home
//   ["gym",  "sunny"],
//   ["work", "sunny"],
//   ["home", "rainy"]  // he can re-use one of the umbrellas he took to work
// ]
// The correct return value for your function would then be:

// {
//   "work": 1,
//   "home": 1,
//   "gym":  0,
//   "shop": 0
// }

//                      solution

const requiredUmbrellas = travels => {
    const locations = travels.reduce((acc, [place]) => ({...acc, [place]: 0}), {home: 0});
    
    return travels.reduce((acc, [place, weather], idx) => {
      if (weather === 'sunny') return acc;
      
      const prevLoc = travels[idx-1]?.[0] ?? 'home';
      locations[place]--;
      locations[prevLoc]++;
      
      return {...acc, [prevLoc]: Math.max(acc[prevLoc], locations[prevLoc])};
    }, {...locations});
  }
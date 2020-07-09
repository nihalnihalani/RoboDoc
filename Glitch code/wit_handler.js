function responseFromWit(data) {
  console.log("data from wit:");
  console.log(JSON.stringify(data));

  const intent = data.intents.length > 0 && data.intents[0] || "__foo__";
  
  switch (intent.name) {
    case"feeling":
      return Promise.resolve(
    "Have you come into close contact (within 6 feet) with someone who has a laboratory-confirmed COVID – 19 diagnoses in the past 14 days? ?"
  );
    case"that":
      return Promise.resolve(
    "Why so?"
  );
      
    case"greeting":
      return Promise.resolve(
    "Hello I am RoboDoc. How can I help you today"
      
  );
      
      case"Symptoms":
      return Promise.resolve(
    "Okay, Let us begin with analysis/diagnosis of your Symptoms"
      
  );
      case"asthama":
      return Promise.resolve(
    "Based on your symptoms you may be suffering from asthama. Please get yourself evaluated from a doctor to be sure and get yourself treated."
      
  );
      case"jaundice":
      return Promise.resolve(
    "Based on your symptoms you may be suffering from jaundice. Please get yourself evaluated from a doctor to be sure and get yourself treated."
      
  );
      case"asthama":
      return Promise.resolve(
    "Based on your symptoms you may be suffering from sthama. Please get yourself evaluated from a doctor to be sure and get yourself treated."
      
  );
      case"Diarrhea":
      return Promise.resolve(
    "Based on your symptoms you may be suffering from Diarrhea. Please get yourself evaluated from a doctor to be sure and get yourself treated."
      
  );
      case"Allergy":
      return Promise.resolve(
    "Based on your symptoms you may be suffering from allergy. Please get yourself evaluated from a doctor to be sure and get yourself treated."
      
  );
      case"Dengue":
      return Promise.resolve(
    "Based on your symptoms you may be suffering from dengue. Please get yourself evaluated from a doctor to be sure and get yourself treated."
      
  );
      case"dengue":
      return Promise.resolve(
    "Based on your symptoms you may be suffering from dengue. Please get yourself evaluated from a doctor to be sure and get yourself treated."
      
  );
      case"Insomnia":
      return Promise.resolve(
    "Based on your symptoms you may be suffering from Insomnia. Please get yourself evaluated from a doctor to be sure and get yourself treated."
      
  );
      
      case"catract":
      return Promise.resolve(
    "Based on your symptoms you may be suffering from catract. Please get yourself evaluated from a doctor to be sure and get yourself treated."
      
  );
      
      case"high_blood_pressure":
      return Promise.resolve(
    "Based on your symptoms you may be suffering from high blood pressure. Please get yourself evaluated from a doctor to be sure and get yourself treated."
      
  );
      case"Chicken_Pox":
      return Promise.resolve(
    "Based on your symptoms you may be suffering from Chicken Pox. Please get yourself evaluated from a doctor to be sure and get yourself treated."
      
  );
      
      case"Malaria":
      return Promise.resolve(
    "Based on your symptoms you may be suffering from Malaria. Please get yourself evaluated from a doctor to be sure and get yourself treated."
      
  );
      case"pregrancy":
      return Promise.resolve(
    "Based on your symptoms you may be pregrnant,Congraulations. Please get yourself evaluated from a doctor to be sure"
      
  );
      
    
      
      case"cold_flu":
      return Promise.resolve(
    "Based on your symptoms you may be suffering from cold or flu. Please get yourself evaluated from a doctor to be sure and get yourself treated."
      
  );
      case"measles":
      return Promise.resolve(
    "Based on your symptoms you may be suffering from measles. Please get yourself evaluated from a doctor to be sure and get yourself treated."
      
  );
      
      
      
      case"hypothyroid":
      return Promise.resolve(
    "Based on your symptoms you may be suffering from hypothyroid. Please get yourself evaluated from a doctor to be sure and get yourself treated."
      
  );
      
      
      
      
      
      
      
      
      
      
      case"Urinary_Retention":
      return Promise.resolve(
    "Based on your symptoms you may be suffering from Urinary Retention. Please get yourself evaluated from a doctor to be sure and get yourself treated."
      
  );
      case"Prediction":
      return Promise.resolve(
    "Yes, Please send us your frontal chest x-ray for covid19 diagnosis"
      
  );
      case"Breast_cancer_prediction":
      return Promise.resolve(
    "Yes, Please send us your mammogram for breast cancer diagnosis"
      
  );
  
      case"contact_with":
      return Promise.resolve(
    "Do you have any of the following:  fever or chills, cough, shortness of breath or difficulty breathing, body aches, headache, the new loss of taste or smell, sore throat?"
  );
      case"yesido":
      return Promise.resolve(
    "Qurantinne yourself and get yourself checked for COVID19 wear a mask while stepping out."
  );
  }
  
  return handleGibberish();
}

function handleGibberish() {
  return Promise.resolve(
    "Can you repeat that again? We are constantly evovling the more it is used the more accurate it will be able to diagnose your disease" 
  );
}

// ----------------------------------------------------------------------------
// handleDistanceBetween

function handleDistanceBetween(data) {
  const location = data.entities['wit$location:location'];
  if (location == null || location.length != 2) {
    return handleGibberish();
  }

  var loc0 = location[0].resolved.values[0];
  var loc1 = location[1].resolved.values[0];
  var distance = getDistanceFromLatLonInKm(
    loc0.coords.lat,
    loc0.coords.long,
    loc1.coords.lat,
    loc1.coords.long
  );
  distance = roundTo(distance, 0.01);
  return Promise.resolve(
    `It's ${distance}km from ${loc0.name} to ${loc1.name}`
  );
}

//https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function roundTo(val, round) {
  return Math.floor(val / round) * round;
}

// ----------------------------------------------------------------------------
// handleTimeAtPlace

function handleTimeAtPlace(data) {
  const loc = data.entities['wit$location:location'] && data.entities['wit$location:location'][0];
  if (loc == null) {
    return handleGibberish();
  }

  const tz = loc.resolved.values[0].timezone;
  const placeName = loc.resolved.values[0].name;

  return currentTimeFromTimezone(tz).then(res => {
    return `It's currently ${res} in ${placeName}`;
  });
}

function currentTimeFromTimezone(loc) {
  const url = "http://worldtimeapi.org/api/timezone/" + loc;

  return fetch(url, {})
    .then(res => res.json())
    .then(data => {
      //trim off the timezone to avoid date auto-adjusting
      const time = data.datetime.substring(0, 19);
      return (new Date(time)).toUTCString("en-US").substring(0, 22);
    });
}


	

exports.responseFromWit = responseFromWit;

const days = [
  { name: "Monday", selectors: { breakfast: ".break", lunch: ".ln", dinner: ".dinn" } },
  { name: "Tuesday", selectors: { breakfast: ".tbreak", lunch: ".tln", dinner: ".tdinn" } },
  { name: "Wednesday", selectors: { breakfast: ".wbreak", lunch: ".wln", dinner: ".wdinn" } },
  { name: "Thursday", selectors: { breakfast: ".thbreak", lunch: ".thln", dinner: ".thdinn" } },
  { name: "Friday", selectors: { breakfast: ".fbreak", lunch: ".fln", dinner: ".fdinn" } },
  { name: "Saturday", selectors: { breakfast: ".sbreak", lunch: ".sln", dinner: ".sdinn" } },
];

fetch('./menu.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Fetched JSON Data:', data);

    days.forEach((day) => {
      const dayData = data.start.Days.find(d => d.Day === day.name);
      if (dayData && dayData.Meals) {
        const { breakfast, lunch, dinner } = day.selectors;
        document.querySelector(breakfast).innerHTML = `<strong>Breakfast<br></strong> ${dayData.Meals.Breakfast}`;
        document.querySelector(lunch).innerHTML = `<strong>Lunch<br></strong> ${dayData.Meals.Lunch}`;
        document.querySelector(dinner).innerHTML = `<strong>Dinner<br></strong> ${dayData.Meals.Dinner}`;
      } else {
        console.warn(`Data for ${day.name} is missing or incomplete.`);
      }
    });
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });


/* 
const monday_breakfast = document.querySelector(".break");
const monday_lunch = document.querySelector(".ln");
const monday_dinner = document.querySelector(".dinn");

const tuesday_breakfast = document.querySelector(".tbreak");
const tuesday_lunch = document.querySelector(".tln");
const tuesday_dinner = document.querySelector(".tdinn");

const wednesday_breakfast = document.querySelector(".wbreak");
const wednesday_lunch = document.querySelector(".wln");
const wednesday_dinner = document.querySelector(".wdinn");

const thrusday_breakfast = document.querySelector(".thbreak");
const thrusday_lunch = document.querySelector(".thln");
const thrusday_dinner = document.querySelector(".thdinn");

const friday_breakfast = document.querySelector(".fbreak");
const friday_lunch = document.querySelector(".fln");
const friday_dinner = document.querySelector(".fdinn");

const saturday_breakfast = document.querySelector(".sbreak");
const saturday_lunch = document.querySelector(".sln");
const saturday_dinner = document.querySelector(".sdinn");

fetch('./menu.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse JSON data
  })
  .then((data) => {
    // Debugging: Log the entire JSON object
    console.log('Fetched JSON Data:', data);

    const monday = data.start.Days.find(day => day.Day === "Monday");
    if (monday) {
      // Extracting and assigning the specific meal data
      monday_breakfast.innerHTML = `<strong>Breakfast <br></strong> ${monday.Meals.Breakfast}`;
      monday_lunch.innerHTML = `<strong>Lunch <br></strong> ${monday.Meals.Lunch}`;
      monday_dinner.innerHTML = `<strong>Dinner<br> </strong> ${monday.Meals.Dinner}`;
    } 

    const tuesday = data.start.Days.find(day => day.Day === "Tuesday");
    if (monday) {
      // Extracting and assigning the specific meal data
      tuesday_breakfast.innerHTML = `<strong>Breakfast <br></strong> ${tuesday.Meals.Breakfast}`;
      tuesday_lunch.innerHTML = `<strong>Lunch <br></strong> ${tuesday.Meals.Lunch}`;
      tuesday_dinner.innerHTML = `<strong>Dinner<br> </strong> ${tuesday.Meals.Dinner}`;
    } 

    const wednesday = data.start.Days.find(day => day.Day === "Wednesday");
    if (monday) {
      // Extracting and assigning the specific meal data
      wednesday_breakfast.innerHTML = `<strong>Breakfast <br></strong> ${wednesday.Meals.Breakfast}`;
      wednesday_lunch.innerHTML = `<strong>Lunch <br></strong> ${wednesday.Meals.Lunch}`;
      wednesday_dinner.innerHTML = `<strong>Dinner<br> </strong> ${wednesday.Meals.Dinner}`;
    } 

    const thrusday = data.start.Days.find(day => day.Day === "Thursday");
    if (monday) {
      // Extracting and assigning the specific meal data
      thrusday_breakfast.innerHTML = `<strong>Breakfast <br></strong> ${thrusday.Meals.Breakfast}`;
      thrusday_lunch.innerHTML = `<strong>Lunch <br></strong> ${thrusday.Meals.Lunch}`;
      thrusday_dinner.innerHTML = `<strong>Dinner<br> </strong> ${thrusday.Meals.Dinner}`;
    } 

    const friday = data.start.Days.find(day => day.Day === "Friday");
    if (monday) {
      // Extracting and assigning the specific meal data
      friday_breakfast.innerHTML = `<strong>Breakfast <br></strong> ${friday.Meals.Breakfast}`;
      friday_lunch.innerHTML = `<strong>Lunch <br></strong> ${friday.Meals.Lunch}`;
      friday_dinner.innerHTML = `<strong>Dinner<br> </strong> ${friday.Meals.Dinner}`;
    } 

    const saturday = data.start.Days.find(day => day.Day === "Saturday");
    if (monday) {
      // Extracting and assigning the specific meal data
      saturday_breakfast.innerHTML = `<strong>Breakfast <br></strong> ${saturday.Meals.Breakfast}`;
      saturday_lunch.innerHTML = `<strong>Lunch <br></strong> ${saturday.Meals.Lunch}`;
      saturday_dinner.innerHTML = `<strong>Dinner<br> </strong> ${saturday.Meals.Dinner}`;
    } 
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });

  */

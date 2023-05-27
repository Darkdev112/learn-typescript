//this is the problem
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime",thisYear)
// year.textContent = thisYear

//solution 1
// we need to use the no null assertion on year to prevent it from showing null type
//we can add toString function to convert thisYear number to string but we can use type assertion as well
let year : HTMLElement | null;
year = document.getElementById("year")!;
let thisYear : string;
thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime",thisYear)
year.textContent = thisYear
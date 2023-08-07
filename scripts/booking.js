/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let cost_per_day = 35; 
let days_selected = [];

const monday_button = document.getElementById("monday");
const tuesday_button = document.getElementById("tuesday");
const wednesday_button = document.getElementById("wednesday");
const thursday_button = document.getElementById("thursday");
const friday_button = document.getElementById("friday");

const half_day_button = document.getElementById("half");
const full_day_button = document.getElementById("full");

const remove_button = document.getElementById("clear-button");
const calculated_cost = document.getElementById("calculated-cost");
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function add_color(){
    if(!this.classList.contains("clicked")){
        this.classList.add("clicked");
    }
    calculate_total_cost();
}

monday_button.addEventListener("click",add_color);
tuesday_button.addEventListener("click",add_color);
wednesday_button.addEventListener("click",add_color);
thursday_button.addEventListener("click",add_color);
friday_button.addEventListener("click",add_color);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function remove_color(){
    monday_button.classList.remove('clicked');
    tuesday_button.classList.remove('clicked');
    wednesday_button.classList.remove('clicked');
    thursday_button.classList.remove('clicked');
    friday_button.classList.remove('clicked');
    calculated_cost.innerHTML="0";
}

remove_button.addEventListener("click",remove_color);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function half_day_rate(){
    cost_per_day=20;
    half_day_button.classList.add("clicked");
    full_day_button.classList.remove("clicked");
    calculate_total_cost();

}

half_day_button.addEventListener("click",half_day_rate);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function full_day_rate(){
    cost_per_day=35;
    full_day_button.classList.add("clicked");
    half_day_button.classList.remove("clicked");
    calculate_total_cost();
}

full_day_button.addEventListener("click",full_day_rate);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate_total_cost(){
    days_selected = [];
    if (monday_button.classList.contains("clicked")) {
        days_selected.push("Monday");
    }
    if (tuesday_button.classList.contains("clicked")) {
        days_selected.push("Tuesday");
    }
    if (wednesday_button.classList.contains("clicked")) {
        days_selected.push("Wednesday");
    }
    if (thursday_button.classList.contains("clicked")) {
        days_selected.push("Thursday");
    }
    if (friday_button.classList.contains("clicked")) {
        days_selected.push("Friday");
    }
    var total_cost = cost_per_day * days_selected.length;
    calculated_cost.innerHTML = total_cost;
    
}

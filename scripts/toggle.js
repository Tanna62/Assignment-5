// Reusable Function
// for convert string to number
function convertedToNumber(id){
    const taskAssigned=document.getElementById(id).innerText;
    const converted=parseFloat(taskAssigned);
    return converted;
}
// for time
function addTaskCompletionTime() {
    // const p = document.querySelector('p'); // or use document.getElementById('your-id') if you have a specific id for the <p> tag
    const currentTime = new Date().toLocaleTimeString();
    // console.log("currentTime");
    return currentTime;
}

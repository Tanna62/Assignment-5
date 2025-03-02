

document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".buttons-completed");
  let taskAssignedElem = document.getElementById("task-assigned");
  let completedTaskElem = document.getElementById("completed-task");
  let workUpdate = document.getElementById("work-update");
  let clearHistoryBtn = document.getElementById("clear-history");

  function convertedToNumber(id) {
    return parseInt(document.getElementById(id).innerText) ;
  }

  function addTaskCompletionTime() {
    return new Date().toLocaleTimeString();
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Board Updated Successfully");

      let taskAssigned = convertedToNumber("task-assigned");
      let completedTask = convertedToNumber("completed-task");

      if (taskAssigned > 0) {
        taskAssignedElem.innerText = --taskAssigned;
        completedTaskElem.innerText = ++completedTask;

        let p = document.createElement("p");
        let currentTime = addTaskCompletionTime();
        p.innerText = `You have completed the task "${button.parentElement.previousElementSibling.innerText}" at ${currentTime}`;
        workUpdate.appendChild(p);

        button.disabled = true;
        button.classList.add("opacity-50", "cursor-not-allowed");

        if ([...buttons].every((btn) => btn.disabled)) {
          setTimeout(() => {
            alert("congrats!You have completed all the current task!");
          }, );
        }
      }
    });
  });

  clearHistoryBtn.addEventListener("click", function () {
    workUpdate.innerHTML = ""; 
    taskAssignedElem.innerText = buttons.length; 
    completedTaskElem.innerText = "0";

    
    buttons.forEach((button) => {
      button.disabled = false;
      button.classList.remove("opacity-50", "cursor-not-allowed");
    });
  });
});
// for bg-change
document.addEventListener("DOMContentLoaded", function () {
  const imageButton = document.getElementById("image-button");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  imageButton.addEventListener("click", function () {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  });
});
// for new page
document.addEventListener("DOMContentLoaded", function () {
  const discoverSomethingNew = document.getElementById("discover-something-new");
  if (discoverSomethingNew) {
    discoverSomethingNew.addEventListener("click", function () {
      window.location.href = "index2.html";

    });
  } else {
    console.warn("Button with ID 'discover-something-new' not found.");
  }
});
// back to first page
document.addEventListener("DOMContentLoaded", function () {
  const backToDeskBtn = document.getElementById("back-to-desk-btn");
  if (backToDeskBtn) {
    backToDeskBtn.addEventListener("click", function () {
      window.location.href = "index.html";

    });
  } else {
    console.warn("Button with ID 'discover-something-new' not found.");
  }
});


// date
document.getElementById('date').innerText = new Date().toLocaleDateString();



// 

// // for new page
// document.addEventListener("DOMContentLoaded", function () {
//   const discoverSomethingNew = document.getElementById("discover-something-new");
//   discoverSomethingNew.addEventListener("click",function(){
//     window.location.href="../index2.html";
//   })


// });
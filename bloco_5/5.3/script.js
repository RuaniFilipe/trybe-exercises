function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.


  // Exercicio 2

  function createButton (input) {
      let buttonHoliday = document.createElement("BUTTON");
      buttonHoliday.innerText = input;
      buttonHoliday.id = "btn-holiday";
      document.querySelector(".buttons-container").appendChild(buttonHoliday);;
  } createButton("Feriado")

  // Exercicio 3

  function changeBgColor (){
      let holidayButton = document.getElementById("btn-holiday");
      let holidays = document.querySelectorAll(".holiday");
      let backgroundColor = "rgb(238,238,238)"
      let newBackgroundColor = "green";

      holidayButton.addEventListener("click", function(){
          
        for (let i = 0; i < holidays.length; i +=1){
            if (holidays[i].style.backgroundColor == newBackgroundColor){
                holidays[i].style.backgroundColor = backgroundColor;                
            } else {
                holidays[i].style.backgroundColor = newBackgroundColor;
            }
        }
      });
  }
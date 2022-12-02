// Creation Of Js Console Application 
const consoleInput = document.querySelector(".console-input");
const historyContainer = document.querySelector(".console-history");


function addResult(InputAsString, output) {
    const outputAsString = output instanceof Array ? `[${ output.join(", ") }]` : output.toString();
    const inputLogElement = document.createElement("div");
    const outputLogElement = document.createElement("div");

    inputLogElement.classList.add("console-input-log");
    outputLogElement.classList.add("console-output-log");

    inputLogElement.textContent = `> ${InputAsString}`;
    outputLogElement.textContent = outputAsString;

    historyContainer.append(inputLogElement, outputLogElement);


}
consoleInput.addEventListener("keyup", e =>{
    const code = consoleInput.value.trim();

    if (code.length === 0){
        return;
    }
    if(e.key === "Enter"){
        try{
            addResult(code, eval(code));

        }catch (err){
            addResult(code, err);
        }
        consoleInput.value = "";
    }
    historyContainer.scrollTop = historyContainer.scrollHeight;

});
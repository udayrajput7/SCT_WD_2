let string = "";
let memory = 0; // Stores memory value

let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".input");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        let btnValue = e.target.innerHTML;

        if (btnValue === "=") {
            try {
                string = eval(string) || "0";
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } 
        else if (btnValue.toUpperCase() === "C") {
            string = "";
            input.value = "";
        } 
        else if (btnValue === "M+") {
            memory += Number(input.value) || 0;
            string = "";
            input.value = "";
            console.log(`Memory: ${memory}`);
        } 
        else if (btnValue === "M-") {
            memory -= Number(input.value) || 0;
            string = "";
            input.value = "";
            console.log(`Memory: ${memory}`);
        } 
        else if (btnValue === "MC") {
            memory = 0;
            console.log("Memory cleared");
        } 
        else if (btnValue === "MR") {
            string = memory.toString();
            input.value = string;
        } 
        else if (btnValue === "%") {
            string = (Number(string) / 100).toString();
            input.value = string;
        } 
        else {
            string += btnValue;
            input.value = string;
        }
    });
});

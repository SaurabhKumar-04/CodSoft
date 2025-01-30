document.addEventListener("DOMContentLoaded", function () {
    let inputField = document.querySelector(".calculator input");
    let buttons = document.querySelectorAll(".rows div");

    let expression = ""; 

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.innerText;
            
            if (value === "C") {
                expression = "";
            } else if (value === "←") {
                expression = expression.slice(0, -1);
            } else if (value === "=") {
                try {
                    expression = eval(expression).toString();
                } catch (error) {
                    expression = "Error";
                }
            } else {
                expression += value;
            }

            inputField.value = expression;
        });
    });
});

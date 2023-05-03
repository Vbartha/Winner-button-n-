function generateButtons() {
    var numButtons = document.getElementById("numb").value;
    var buttonContainer = document.getElementById("buttons");
    buttonContainer.innerHTML = "";
    var winningButton = Math.floor(Math.random() * numButtons) + 1;
    for (var i = 1; i <= numButtons; i++) {
        var button = document.createElement("button");
        button.innerHTML = "Butonul " + i;
        if (i === winningButton) {
            button.onclick = function () {
                alert("Ai castigat!");
            };
        } else {
            button.onclick = function () {
                alert("Ai pierdut!");
            };
        }
        buttonContainer.appendChild(button);
    }
}

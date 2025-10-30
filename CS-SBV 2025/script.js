var raw_appple = ["1. Improves heart and cholesterol health" , "2. Controls blood sugar levels" , "3. Strengthens immunity and defenses" , "4. Supports weight loss and fullness" , "5. Aids digestion and gut health"];
var rotten_apple = ["1. Causes food poisoning and diarrhea" , "2. Contains harmful mold toxins" , "3. Triggers stomach pain and cramps" , "4. May cause allergic reactions" , "5. Loses nutrients and freshness"];

var condi = prompt("enter the condition of the apple:    ");

function main_fun() {
    // var condi = "rotten";
    function hel_points() {
        if (condi == "rotten") {
            var apple = rotten_apple;
        }
        else {
            var apple = raw_appple;
        }
        let x = 0
        while (x < 5) {
            var a = document.getElementById("hel_points");
            var b = document.createElement("span");
            b.innerText = apple[x];
            a.appendChild(b);
            b.className = "points";
            x++
        }
        if (condi == "rotten") {
            document.getElementById("heading_condi").innerText = "HEALTH RISKS";
        } else {
            document.getElementById("heading_condi").innerText = "HEALTH BENEFITS";
        }
    }
    hel_points();
}

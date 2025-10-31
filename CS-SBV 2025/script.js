var raw_appple = ["1. Improves heart and cholesterol health" , "2. Controls blood sugar levels" , "3. Strengthens immunity and defenses" , "4. Supports weight loss and fullness" , "5. Aids digestion and gut health"];
var rotten_apple = ["1. Causes food poisoning and diarrhea" , "2. Contains harmful mold toxins" , "3. Triggers stomach pain and cramps" , "4. May cause allergic reactions" , "5. Loses nutrients and freshness"];
var id_for_values = ["value_1" , "value_2" , "value_3" , "value_4" , "value_5" , "value_6" , "value_7" , "value_8" , "value_9" , ];

var condi = prompt("enter the condition of the apple:    ");

var weight = prompt("ente");

var CAL = 0.52 * weight + "Kcal";
var CARBS = 0.15 * weight + "g";
var SUGAR = 0.01 * weight + "g";
var FIBERS = 0.02 * weight + "g";
var PROTEIN = 0.003 * weight + "g";
var FATS = 0.002 * weight + "g";
var WATER = 0.86 * weight + "g";
var VIT_C = 0.05 * weight + "mg";
var POTASSIUM = 1.16 * weight + "mg";


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
            document.getElementById("name").innerText = "APPLE (rotten)";
        } else {
            document.getElementById("heading_condi").innerText = "HEALTH BENEFITS";
            document.getElementById("name").innerText = "APPLE (fresh)";
        }
    }
    hel_points();



    function nutritional_values() {
        var value_id;
        var nutrition_variables = [CAL , CARBS , SUGAR , FIBERS , PROTEIN , FATS , WATER , VIT_C , POTASSIUM];
        for (let i = 0; i < id_for_values.length; i++) {
            var value_id = id_for_values[i];
            // alert(value_id);
            var c = document.getElementById(value_id);
            c.innerText = nutrition_variables[i];
        }
    }
    nutritional_values();
}

var raw_appple = ["1. Improves heart and cholesterol health" , "2. Controls blood sugar levels" , "3. Strengthens immunity and defenses" , "4. Supports weight loss and fullness" , "5. Aids digestion and gut health"];
var rotten_apple = ["1. Causes food poisoning and diarrhea" , "2. Contains harmful mold toxins" , "3. Triggers stomach pain and cramps" , "4. May cause allergic reactions" , "5. Loses nutrients and freshness"];
function main_fun() {
    function hel_points() {
        let x = 0
        while (x < 5) {
            var a = document.getElementById("hel_points");
            var b = document.createElement("span").innerText="${}"
            a.appendChild(b);
            x++
        }   
    }  
}
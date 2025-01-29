let alerted = localStorage.getItem("alerted") === "false";

if (!alerted) {
    alert("⚠️ Notice: Primary imaging system sustained damage during launch preparations. Some visual data may be affected. All other operations in working order. -Sherman XII");
    localStorage.setItem("alerted", true);
}

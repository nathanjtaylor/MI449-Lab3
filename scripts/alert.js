let alerted = parseFloat(localStorage.getItem("alerted")) || false;
console.log(alerted);
if (alerted === false) {
    alert("hello");
    localStorage.setItem("alerted", true);
}

let alerted = localStorage.getItem("alerted") === "true";

if (!alerted) {
    alert("My camera was accidentially damaged before taking off so some of the images may have defects.");
    localStorage.setItem("alerted", true);
}

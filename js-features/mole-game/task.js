getHole = (index) => document.getElementById(`hole${index}`);
let getKills = parseInt(document.getElementById(`dead`).textContent);
let getMisses = parseInt(document.getElementById(`lost`).textContent);

for (let index = 1; index < 10; index++) {
  getHole(index).onclick = () => {
    if (getHole(index).className.includes("hole_has-mole")) {
      getKills++;
      document.getElementById(`dead`).textContent = getKills;
    } else {
      getMisses++;
      document.getElementById(`lost`).textContent = getMisses;
    }
    if (getKills == 10) {
      alert("Ура! Вы победили!");
      getKills = 0;
      getMisses = 0;
      document.getElementById(`dead`).textContent = "0";
      document.getElementById(`lost`).textContent = "0";
    } else if (getMisses == 5) {
      alert("Вы проиграли, попробуйте еще раз =)");
      getKills = 0;
      getMisses = 0;
      document.getElementById(`dead`).textContent = "0";
      document.getElementById(`lost`).textContent = "0";
    }
  };
}

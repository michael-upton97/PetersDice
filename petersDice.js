Hooks.once("diceSoNiceReady", (dice3d) => {
  dice3d.addSystem({ id: "petersDice", name: "Peter's Custom Dice" }, false);
  // dice3d.addDicePreset({
  // 	type: "d2",
  // 	labels: "",
  // 	modelFile: "modules/wcube/wcube_d2.glb",
  // 	system: "wcube"
  // });
  // dice3d.addDicePreset({
  // 	type: "d4",
  // 	labels: "",
  // 	modelFile: "modules/wcube/wcube_d4.glb",
  // 	system: "wcube"
  // });
  // dice3d.addDicePreset({
  // 	type: "d6",
  // 	labels: "",
  // 	modelFile: "modules/wcube/wcube_d6.glb",
  // 	system: "wcube"
  // });
  // dice3d.addDicePreset({
  // 	type: "d8",
  // 	labels: "",
  // 	modelFile: "modules/wcube/wcube_d8.glb",
  // 	system: "wcube"
  // });
  // dice3d.addDicePreset({
  // 	type: "d10",
  // 	labels: "",
  // 	modelFile: "modules/wcube/wcube_d10.glb",
  // 	system: "wcube"
  // });
  // dice3d.addDicePreset({
  // 	type: "d100",
  // 	labels: "",
  // 	modelFile: "modules/wcube/wcube_d100.glb",
  // 	system: "wcube"
  // });
  // dice3d.addDicePreset({
  // 	type: "d12",
  // 	labels: "",
  // 	modelFile: "modules/wcube/wcube_d12.glb",
  // 	system: "wcube"
  // });
  dice3d.addDicePreset({
    type: "d20",
    labels: [
      "modules/petersDice/images/d20/game_over.png",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "modules/petersDice/images/d20/1up.png"
    ],
    system: "petersDice",
  });
});

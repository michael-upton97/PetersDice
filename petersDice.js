Hooks.once("diceSoNiceReady", (dice3d) => {
  dice3d.addSystem({ id: "petersDice", name: "Peter's Custom Dice" }, false);
  // dice3d.addDicePreset({
  // 	type: "d2",
  // 	labels: "",
  // 	modelFile: "modules/petersDice/petersDice_d2.glb",
  // 	system: "petersDice"
  // });
  // dice3d.addDicePreset({
  // 	type: "d4",
  // 	labels: [
  //     "modules/petersDice/images/d20/game_over.png",
  //     "2",
  //     "3",
  //     "modules/petersDice/images/d20/1up.png"
  //   ],
  // 	system: "petersDice"
  // });
  dice3d.addDicePreset({
  	type: "d6",
  	labels: [
      "modules/petersDice/images/d6/game_over.png",
      "2",
      "3",
      "4",
      "5",
      "modules/petersDice/images/d6/blank.png"
    ],
  	system: "petersDice"
  });
  // dice3d.addDicePreset({
  // 	type: "d8",
  // 	labels: "",
  // 	modelFile: "modules/petersDice/petersDice_d8.glb",
  // 	system: "petersDice"
  // });
  // dice3d.addDicePreset({
  // 	type: "d10",
  // 	labels: "",
  // 	modelFile: "modules/petersDice/petersDice_d10.glb",
  // 	system: "petersDice"
  // });
  // dice3d.addDicePreset({
  // 	type: "d100",
  // 	labels: "",
  // 	modelFile: "modules/petersDice/petersDice_d100.glb",
  // 	system: "petersDice"
  // });
  // dice3d.addDicePreset({
  // 	type: "d12",
  // 	labels: "",
  // 	modelFile: "modules/petersDice/petersDice_d12.glb",
  // 	system: "petersDice"
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

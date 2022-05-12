Hooks.once("diceSoNiceReady", (dice3d) => {
  dice3d.addSystem({ id: "petersDice_gold", name: "Peter's Custom Dice - Gold" }, false);
  dice3d.addSystem({ id: "petersDice_silver", name: "Peter's Custom Dice - Silver" }, false);
  dice3d.addDicePreset({
  	type: "d4",
  	labels: [
      "1",
      "2",
      "3",
      "modules/petersDice/images/d4/apple_gold.png",
    ],
  	system: "petersDice_gold"
  });
  // dice3d.addDicePreset({
  // 	type: "d4",
  // 	labels: [
  //     "1",
  //     "2",
  //     "3",
  //     "modules/petersDice/images/d4/apple_silver.png",
  //   ],
  // 	system: "petersDice_silver"
  // });
  dice3d.addDicePreset({
  	type: "d6",
  	labels: [
      "modules/petersDice/images/d6/game_over_gold.png",
      "2",
      "3",
      "4",
      "5",
      "modules/petersDice/images/d6/heart_sword_gold.png"
    ],
  	system: "petersDice_gold"
  });
  dice3d.addDicePreset({
  	type: "d6",
  	labels: [
      "modules/petersDice/images/d6/game_over_silver.png",
      "2",
      "3",
      "4",
      "5",
      "modules/petersDice/images/d6/heart_sword_silver.png"
    ],
  	system: "petersDice_silver"
  });
  dice3d.addDicePreset({
  	type: "d8",
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "modules/petersDice/images/d8/potion_gold.png"
    ],
    system: "petersDice_gold",
  });
  dice3d.addDicePreset({
  	type: "d8",
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "modules/petersDice/images/d8/potion_silver.png"
    ],
    system: "petersDice_silver",
  });
  dice3d.addDicePreset({
  	type: "d10",
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "modules/petersDice/images/d10/money_gold.png"
    ],
    system: "petersDice_gold",
  });
  dice3d.addDicePreset({
  	type: "d10",
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "modules/petersDice/images/d10/money_silver.png"
    ],
    system: "petersDice_silver",
  });
  dice3d.addDicePreset({
  	type: "d100",
    labels: [
      "10",
      "20",
      "30",
      "40",
      "50",
      "60",
      "70",
      "80",
      "90",
      "modules/petersDice/images/d100/key_gold.png"
    ],
    system: "petersDice_gold",
  });
  dice3d.addDicePreset({
  	type: "d100",
    labels: [
      "10",
      "20",
      "30",
      "40",
      "50",
      "60",
      "70",
      "80",
      "90",
      "modules/petersDice/images/d100/key_silver.png"
    ],
    system: "petersDice_silver",
  });
  dice3d.addDicePreset({
  	type: "d12",
    labels: [
      "1",
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
      "modules/petersDice/images/d12/chest_gold.png"
    ],
    system: "petersDice_gold",
  });
  dice3d.addDicePreset({
  	type: "d12",
    labels: [
      "1",
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
      "modules/petersDice/images/d12/chest_silver.png"
    ],
    system: "petersDice_silver",
  });
  dice3d.addDicePreset({
    type: "d20",
    labels: [
      "modules/petersDice/images/d20/game_over_gold.png",
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
      "modules/petersDice/images/d20/1up_red.png"
    ],
    system: "petersDice_gold",
  });
  dice3d.addDicePreset({
    type: "d20",
    labels: [
      "modules/petersDice/images/d20/game_over_silver.png",
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
      "modules/petersDice/images/d20/1up_red.png"
    ],
    system: "petersDice_silver",
  });
});

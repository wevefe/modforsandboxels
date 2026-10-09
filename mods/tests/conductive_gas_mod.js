elements.liquid_conductive_gas = {
    color: ["#10eb00", "#00ff55"],
    category: "special",
    state: "liquid",
    behavior: behaviors.LIQUID,
    desc: "",
    tempHigh: -220,
    stateHigh: "conductive_gas",
    burn: 70,
    burnTime: 10,
    conduct: true,
    density: 2,
    hardness: 0
};

elements.conductive_gas = {
    color: "#19b32b",
    category: "special",
    state: "gas",
    behavior: behaviors.GAS,
    desc: "A custom element.",
    colorPattern: ["#21d115", "#127604", "#82f014", "#11d45c"],
    tempHigh: 156,
    stateHigh: "fire",
    tempLow: -230,
    stateLow: "liquid_conductive_gas",
    burn: 70,
    burnTime: 10,
    conduct: true,
    density: 2,
    hardness: 0
};

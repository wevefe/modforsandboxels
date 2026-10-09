// Сгенерировано Sandboxels Mod Constructor v2
// Элементов: 2
// Дата: 09.10.2026, 17:11:45

// === Кастомные категории ===
categories.just_mod = {
    title: "Just Mod",
    color: "#ff8800"
};

elements.liquid_conductive_gas = {
    color: ["#10eb00", "#00ff55"],
    category: "just_mod",
    state: "liquid",
    behavior: behaviors.LIQUID,
    desc: "",

    tempHigh: -234,
    stateHigh: "conductive_gas",

    burn: 70,
    burnTime: 10,
    conduct: true,
    density: 2,
    hardness: 0
};

elements.conductive_gas = {
    color: "#19b32b",
    category: "just_mod",
    state: "gas",
    behavior: behaviors.GAS,
    desc: "A custom element.",
    colorPattern: ["#21d115", "#127604", "#82f014", "#11d45c"],

    tempHigh: 156,
    stateHigh: "fire",
    tempLow: -234,
    stateLow: "liquid_conductive_gas",

    burn: 70,
    burnTime: 10,
    conduct: true,
    density: 2,
    hardness: 0
};

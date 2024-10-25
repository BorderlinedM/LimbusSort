dataSetVersion = "2024-10-25"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Sinner",
    key: "sinner",
    tooltip: "Check this to restrict to certain sinners.",
    checked: false,
    sub: [
      { name: "Yi Sang", key: "YS" },
      { name: "Faust", key: "FT" },
      { name: "Don Quixote", key: "DQ" },
      { name: "Ryoshu", key: "RU" },
      { name: "Meursault", key: "MT" },
      { name: "Hong Lu", key: "HL" },
      { name: "Heathcliff", key: "HF" },
      { name: "Ishmael", key: "IL" },
      { name: "Rodion", key: "RN" },
      { name: "Sinclair", key: "SR" },
      { name: "Outis", key: "OS" },
      { name: "Gregor", key: "BG" }
    ]
  },
  {
    name: "Filter by release time.",
    key: "season",
    tooltip: "Check this to restrict to characters that were released in certain seasons.",
    checked: false,
    sub: [ 
	{ name: "Release", key: "release" }, 
	{ name: "Season 1", key: "rs1" }, 
	{ name: "Season 2", key: "rs2" }, 
	{ name: "Season 3", key: "rs3" }, 
	{ name: "Season 4", key: "rs4" }, 
	{ name: "Season 5", key: "rs5" }
    ]
  },
  {
    name: "Filter by whether the ID / E.G.O is Seasonal.",
    key: "seasonal",
    tooltip: "Check this to restrict seasonal IDs. This includes Battle Pass E.G.Os.",
    checked: false,
    sub: [ 
	{ name: "Season 0", tooltip: "These characters aren't seasonal.", key: "s0" }, 
	{ name: "Season 1", tooltip: "Release Season.", key: "s1" }, 
	{ name: "Season 2", tooltip: "Yi Sang Season.", key: "s2" }, 
	{ name: "Season 3", tooltip: "Ishmael Season.", key: "s3" }, 
	{ name: "Season 4", tooltip: "Heathcliff Season.", key: "s4" }, 
	{ name: "Season 5", tooltip: "Don Quixote Season.", key: "s5" }
    ]
  },
    {
    name: "Filter by rarity.",
    key: "rarity",
    tooltip: "Check this to restrict specific levels of rarity.",
    checked: false,
    sub: [ 
	{ name: "0", tooltip: "LCB Sinners.", key: "0" }, 
	{ name: "00", tooltip: "Two Stars.", key: "00" }, 
	{ name: "000", tooltip: "Three Stars.", key: "000" }, 
	{ name: "Zayin", tooltip: "Zayin E.G.Os.", key: "Zayin" }, 
	{ name: "Teth", tooltip: "Teth E.G.Os.", key: "Teth" }, 
	{ name: "He", tooltip: "He E.G.Os.", key: "He" },
 	{ name: "Waw", tooltip: "Waw E.G.Os.", key: "Waw" }, 
	{ name: "Aleph", tooltip: "Aleph E.G.Os.", key: "Aleph" }
    ]
  },
    {
    name: "Remove Base IDs and EGOs",
    key: "base",
    tooltip: "Check this to remove all LCB Sinners and Base E.G.Os.",
    checked: false
  },
  {
    name: "Remove IDs",
    key: "ID",
    tooltip: "Check this to remove all IDs.",
    checked: false
  },
  {
    name: "Remove E.G.Os",
    key: "EGO",
    tooltip: "Check this to remove all EGOs.",
    checked: false
  },
  {
    name: "Remove Men",
    key: "man",
    tooltip: "Check this to remove all male characters.",
    checked: false
  },
  {
    name: "Remove Women",
    key: "woman",
    tooltip: "Check this to remove all female characters.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "LCB Sinner Yi Sang",
    img: "ElectricScreamingDon.png",
    opts: {
      sinner: [ "YS" ],
      season: ["rs0"],
      seasonal: ["s0"],
      rarity: ["0"],
      base: true,
      ID: true,
      man: true
    }
  },
  {
    name: "Seven Assoc. South Section 6 Yi Sang",
    img: "FluidSacDon.png",
    opts: {
      sinner: [ "YS" ],
      season: ["rs0"],
      seasonal: ["s0"],
      rarity: ["00"],
      ID: true,
      man: true
    }
  },
  {
    name: "Molar Office Fixer Yi Sang",
    img: "TelepoleDon.png",
    opts: {
      sinner: [ "YS" ],
      season: ["rs2"],
      seasonal: ["s2"],
      rarity: ["00"],
      ID: true,
      man: true
    }
  }
];

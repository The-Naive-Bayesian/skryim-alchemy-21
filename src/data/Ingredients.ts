import {Ingredient} from "../models/Ingredient";

const Ingredients: Ingredient[] = [
  {name: "Abecean Longfin",effects:['Weakness to Frost','Fortify Sneak','Weakness to Poison','Fortify Restoration']},
  {name: "Bear Claws",effects:['Restore Stamina','Fortify Health','Fortify One-Handed','Damage Magicka Regen']},
  {name: "Bee",effects:['Restore Stamina','Ravage Stamina','Regenerate Stamina','Weakness to Shock']},
  {name: "Beehive Husk",effects:['Resist Poison','Fortify Light Armor','Fortify Sneak','Fortify Destruction']},
  {name: "Bleeding Crown",effects:['Weakness to Fire','Fortify Block','Weakness to Poison','Resist Magic']},
  {name: "Blisterwort",effects:['Damage Stamina','Restore Health','Frenzy','Fortify Smithing']},
  {name: "Blue Butterfly Wing",effects:['Damage Stamina','Damage Magicka Regen','Fortify Conjuration','Fortify Enchanting']},
  {name: "Blue Dartwing",effects:['Resist Shock','Restore Health','Fortify Pickpocket','Fear']},
  {name: "Blue Mountain Flower",effects:['Restore Health','Fortify Conjuration','Fortify Health','Damage Magicka Regen']},
  {name: "Bone Meal",effects:['Damage Stamina','Fortify Conjuration','Resist Fire','Ravage Stamina']},
  {name: "Briar Heart",effects:['Restore Magicka','Fortify Block','Paralysis','Fortify Magicka']},
  {name: "Butterfly Wing",effects:['Restore Health','Lingering Damage Stamina','Fortify Barter','Damage Magicka']},
  {name: "Canis Root",effects:['Damage Stamina','Fortify Marksman','Fortify One-Handed','Paralysis']},
  {name: "Charred Skeever Hide",effects:['Restore Stamina','Resist Poison','Cure Disease','Restore Health']},
  {name: "Chaurus Eggs",effects:['Weakness to Poison','Fortify Stamina','Damage Magicka','Invisibility']},
  {name: "Chicken's Egg",effects:['Resist Magic','Waterbreathing','Damage Magicka Regen','Lingering Damage Stamina']},
  {name: "Creep Cluster",effects:['Restore Magicka','Fortify Carry Weight','Damage Stamina Regen','Weakness to Magic']},
  {name: "Crimson Nirnroot",effects:['Damage Health','Invisibility','Damage Stamina','Resist Magic']},
  {name: "Cyrodilic Spadetail",effects:['Damage Stamina','Fear','Fortify Restoration','Ravage Health']},
  {name: "Daedra Heart",effects:['Damage Stamina Regen','Damage Magicka','Restore Health','Fear']},
  {name: "Deathbell",effects:['Damage Health','Ravage Stamina','Slow','Weakness to Poison']},
  {name: "Dragon's Tongue",effects:['Resist Fire','Fortify Barter','Fortify Illusion','Fortify Two-handed']},
  {name: "Dwarven Oil",effects:['Weakness to Magic','Regenerate Magicka','Fortify Illusion','Restore Magicka']},
  {name: "Ectoplasm",effects:['Restore Magicka','Fortify Destruction','Fortify Magicka','Damage Health']},
  {name: "Elves Ear",effects:['Restore Magicka','Weakness to Frost','Fortify Marksman','Resist Fire']},
  {name: "Eye of Sabre Cat",effects:['Restore Stamina','Damage Magicka','Ravage Health','Restore Health']},
  {name: "Falmer Ear",effects:['Damage Health','Frenzy','Resist Poison','Fortify Lockpicking']},
  {name: "Fire Salts",effects:['Weakness to Frost','Restore Magicka','Resist Fire','Regenerate Magicka']},
  {name: "Fly Amanita",effects:['Resist Fire','Frenzy','Fortify Two-handed','Regenerate Stamina']},
  {name: "Frost Mirriam",effects:['Resist Frost','Fortify Sneak','Ravage Magicka','Damage Stamina Regen']},
  {name: "Frost Salts",effects:['Weakness to Fire','Resist Frost','Restore Magicka','Fortify Conjuration']},
  {name: "Garlic",effects:['Resist Poison','Fortify Stamina','Regenerate Magicka','Regenerate Health']},
  {name: "Giant Lichen",effects:['Ravage Health','Weakness to Poison','Weakness to Shock','Restore Magicka']},
  {name: "Giant's Toe",effects:['Damage Stamina','Fortify Carry Weight','Fortify Health','Damage Stamina Regen']},
  {name: "Glow Dust",effects:['Damage Magicka','Fortify Destruction','Damage Magicka Regen','Resist Shock']},
  {name: "Glowing Mushroom",effects:['Resist Shock','Fortify Destruction','Fortify Smithing','Fortify Health']},
  {name: "Grass Pod",effects:['Resist Poison','Ravage Magicka','Fortify Alteration','Restore Magicka']},
  {name: "Hagraven Claw",effects:['Resist Magic','Lingering Damage Magicka','Fortify Enchanting','Fortify Barter']},
  {name: "Hagraven Feathers",effects:['Damage Magicka','Frenzy','Fortify Conjuration','Weakness to Shock']},
  {name: "Hanging Moss",effects:['Damage Magicka','Damage Magicka Regen','Fortify Health','Fortify One-handed']},
  {name: "Hawk Beak",effects:['Restore Stamina','Resist Frost','Fortify Carry Weight','Resist Shock']},
  {name: "Hawk Feathers",effects:['Cure Disease','Fortify Light Armor','Fortify One-handed','Fortify Sneak']},
  {name: "Histcarp",effects:['Restore Stamina','Fortify Magicka','Damage Stamina Regen','Waterbreathing']},
  {name: "Honeycomb",effects:['Restore Stamina','Fortify Block','Fortify Light Armor','Ravage Stamina']},
  {name: "Human Flesh",effects:['Damage Health','Paralysis','Restore Magicka','Fortify Sneak']},
  {name: "Human Heart",effects:['Damage Health','Damage Magicka Regen','Damage Magicka','Frenzy']},
  {name: "Ice Wraith Teeth",effects:['Weakness to Frost','Fortify Heavy Armor','Invisibility','Weakness to Fire']},
  {name: "Imp Stool",effects:['Damage Health','Paralysis','Lingering Damage Health','Restore Health']},
  {name: "Jarrin Root",effects:['Damage Health','Damage Stamina','Damage Magicka','Damage Magicka Regen']},
  {name: "Jazbay Grapes",effects:['Weakness to Magic','Fortify Magicka','Regenerate Magicka','Ravage Health']},
  {name: "Juniper Berries",effects:['Weakness to Fire','Regenerate Health','Fortify Marksman','Damage Stamina Regen']},
  {name: "Large Antlers",effects:['Restore Stamina','Fortify Stamina','Slow','Damage Stamina Regen']},
  {name: "Lavender",effects:['Resist Magic','Fortify Stamina','Ravage Magicka','Fortify Conjuration']},
  {name: "Luna Moth Wing",effects:['Damage Magicka','Fortify Light Armor','Regenerate Health','Invisibility']},
  {name: "Moon Sugar",effects:['Weakness to Fire','Resist Frost','Restore Magicka','Regenerate Magicka']},
  {name: "Mora Tapinella",effects:['Restore Magicka','Lingering Damage Health','Regenerate Stamina','Fortify Illusion']},
  {name: "Mudcrab Chitin",effects:['Restore Stamina','Cure Disease','Resist Poison','Resist Fire']},
  {name: "Niamira's Rot",effects:['Damage Magicka','Fear','Fortify Lockpicking','Regenerate Health']},
  {name: "Nightshade",effects:['Damage Health','Damage Magicka Regen','Lingering Damage Stamina','Fortify Destruction']},
  {name: "Nirnroot",effects:['Damage Health','Damage Stamina','Invisibility','Resist Magic']},
  {name: "Nordic Barnacle",effects:['Damage Magicka','Waterbreathing','Regenerate Health','Fortify Pickpocket']},
  {name: "Orange Dartwing",effects:['Restore Stamina','Ravage Magicka','Fortify Pickpocket','Lingering Damage Health']},
  {name: "Pearl",effects:['Restore Stamina','Restore Magicka','Fortify Block','Resist Shock']},
  {name: "Pine Thrush Egg",effects:['Restore Stamina','Fortify Lockpicking','Weakness to Poison','Resist Shock']},
  {name: "Powdered Mammoth Tusk",effects:['Restore Stamina','Weakness to Fire','Fortify Sneak','Fear']},
  {name: "Purple Mountain Flower",effects:['Restore Stamina','Fortify Sneak','Lingering Damage Magicka','Resist Frost']},
  {name: "Red Mountain Flower",effects:['Restore Magicka','Ravage Magicka','Fortify Magicka','Damage Health']},
  {name: "River Betty",effects:['Damage Health','Fortify Alteration','Slow','Fortify Carry Weight']},
  {name: "Rock Warbler Egg",effects:['Restore Health','Fortify One-handed','Damage Stamina','Weakness to Magic']},
  {name: "Sabre Cat Tooth",effects:['Restore Stamina','Fortify Heavy Armor','Fortify Smithing','Weakness to Poison']},
  {name: "Salt Pile",effects:['Weakness to Magic','Fortify Restoration','Slow','Regenerate Magicka']},
  {name: "Scaly Pholiata",effects:['Weakness to Magic','Fortify Illusion','Regenerate Stamina','Fortify Carry Weight']},
  {name: "Silverside Perch",effects:['Restore Stamina','Damage Stamina Regen','Ravage Health','Resist Frost']},
  {name: "Skeever Tail",effects:['Damage Stamina Regen','Ravage Health','Damage Health','Fortify Light Armor']},
  {name: "Slaughterfish Egg",effects:['Resist Poison','Fortify Pickpocket','Lingering Damage Health','Fortify Stamina']},
  {name: "Slaughterfish Scales",effects:['Resist Frost','Lingering Damage Health','Fortify Heavy Armor','Fortify Block']},
  {name: "Small Antlers",effects:['Weakness to Poison','Fortify Restoration','Lingering Damage Stamina','Damage Health']},
  {name: "Small Pearl",effects:['Restore Stamina','Fortify One-handed','Fortify Restoration','Resist Frost']},
  {name: "Snowberries",effects:['Resist Fire','Fortify Enchanting','Resist Frost','Resist Shock']},
  {name: "Spider Egg",effects:['Damage Stamina','Damage Magicka Regen','Fortify Lockpicking','Fortify Marksman']},
  {name: "Spriggan Sap",effects:['Damage Magicka Regen','Fortify Enchanting','Fortify Smithing','Fortify Alteration']},
  {name: "Swamp Fungal Pod",effects:['Resist Shock','Lingering Damage Magicka','Paralysis','Restore Health']},
  {name: "Taproot",effects:['Weakness to Magic','Fortify Illusion','Regenerate Magicka','Restore Magicka']},
  {name: "Thistle Branch",effects:['Resist Frost','Ravage Stamina','Resist Poison','Fortify Heavy Armor']},
  {name: "Torchbug Thorax",effects:['Restore Stamina','Lingering Damage Magicka','Weakness to Magic','Fortify Stamina']},
  {name: "Troll Fat",effects:['Resist Poison','Fortify Two-handed','Frenzy','Damage Health']},
  {name: "Tundra Cotton",effects:['Resist Magic','Fortify Magicka','Fortify Block','Fortify Barter']},
  {name: "Vampire Dust",effects:['Invisibility','Regenerate Health','Restore Magicka','Cure Disease']},
  {name: "Void Salts",effects:['Weakness to Shock','Resist Magic','Damage Health','Fortify Magicka']},
  {name: "Wheat",effects:['Restore Health','Fortify Health','Damage Stamina Regen','Lingering Damage Magicka']},
  {name: "White Cap",effects:['Weakness to Frost','Fortify Heavy Armor','Restore Magicka','Ravage Magicka']},
  {name: "Wisp Wrappings",effects:['Restore Stamina','Fortify Destruction','Fortify Carry Weight','Resist Magic']}
];

export default Ingredients;

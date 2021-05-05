module.exports = [
  {
    name: "updateFrequency",
    type: "array",
    values: ["low", "high"]
  },
  {
    name: "racingStatus",
    type: "number"
  },
  {
    name: "event",
    type: "array",
    values: [
      { id: 0, name: "Madman Stadium - Demolition Arena", code: "bigstadium_demolition_arena" },
      { id: 1, name: "Madman Stadium - Figure 8", code: "bigstadium_figure_8" },
      { id: 2, name: "Bonebreaker Valley - Main Circuit", code: "bonebreaker_valley_main_circuit" },
      { id: 3, name: "Crash Canyon - Main Circuit", code: "crash_canyon_main_circuit" },
      { id: 4, name: "Bloomfield Speedway - Dirt Oval", code: "dirt_speedway_dirt_oval" },
      { id: 5, name: "Bloomfield Speedway - Figure 8", code: "dirt_speedway_figure_8" },
      { id: 6, name: "Glendale Countryside - Field Arena", code: "field_derby_arena" },
      { id: 7, name: "Drytown Desert - Main Circuit", code: "fields08_1" },
      { id: 8, name: "Drytown Desert Reverse - Main Circuit Reverse", code: "fields08_1_rev" },
      { id: 9, name: "", code: "" },
      { id: 10, name: "Rockfield Roughspot - Dirt Oval", code: "fields09_1" },
      { id: 11, name: "", code: "" },
      { id: 12, name: "Mudford Motorpark - Mud Oval", code: "fields10_1" },
      { id: 13, name: "Mudford Motorpark - Mud Pit", code: "fields10_2" },
      { id: 14, name: "The Maw - Demolition Arena", code: "fields11_1" },
      { id: 15, name: "Kingston Raceway - Asphalt Oval", code: "fields12_1" },
      { id: 16, name: "Kingston Raceway - Asphalt Oval Reverse", code: "fields12_1_rev" },
      { id: 17, name: "Kingston Raceway - Figure 8", code: "fields12_2" },
      { id: 18, name: "Eagles Peak Motorpark - Racing Track", code: "fields13_1" },
      { id: 19, name: "Eagles Peak Motorpark - Racing Track Reverse", code: "fields13_1_rev" },
      { id: 20, name: "Eagles Peak Motorpark - Demolition Arena", code: "fields13_2" },
      { id: 21, name: "Rattlesnake Racepark - Main Circuit", code: "fields14_1" },
      { id: 22, name: "Rattlesnake Racepark - Main Circuit Reverse", code: "fields14_2" },
      { id: 23, name: "Vale Falls - Main Circuit", code: "forest11_1" },
      { id: 24, name: "Vale Falls - Main Circuit Reverse", code: "forest11_1_rev" },
      { id: 25, name: "Vale Falls - Short Circuit", code: "forest11_2" },
      { id: 26, name: "Vale Falls - Short Circuit Reverse", code: "forest11_2_rev" },
      { id: 27, name: "Tribend Speedway - Main Circuit", code: "forest12_1" },
      { id: 28, name: "Tribend Speedway - Reverse Circuit", code: "forest12_1_rev" },
      { id: 29, name: "Tribend Speedway - Wild Circuit", code: "forest12_2" },
      { id: 30, name: "", code: "" },
      { id: 31, name: "Fairfield Grass Arena - Demolition Arena", code: "grass_arena_demolition_arena" },
      { id: 32, name: "Midwest Motocenter - Main Loop", code: "gravel1_main_loop" },
      { id: 33, name: "Midwest Motocenter - Main Loop Reverse", code: "gravel1_main_loop_rev" },
      { id: 34, name: "", code: "" },
      { id: 35, name: "Deathloop - Main Circuit", code: "loop" },
      { id: 36, name: "Finncross Circuit - Main Circuit", code: "mixed1_main_circuit" },
      { id: 37, name: "Finncross Circuit - Main Circuit Reverse", code: "mixed1_main_circuit_rev" },
      { id: 38, name: "Maasten Motorcenter - Main Circuit", code: "mixed2_main_circuit" },
      { id: 39, name: "Maasten Motorcenter - Main Circuit Reverse", code: "mixed2_main_circuit_rev" },
      { id: 40, name: "Pinehills Raceway - Full Circuit", code: "mixed3_long_loop" },
      { id: 41, name: "Pinehills Raceway - Full Circuit Reverse", code: "mixed3_long_loop_rev" },
      { id: 42, name: "Pinehills Raceway - Rally Circuit", code: "mixed3_r3" },
      { id: 43, name: "Pinehills Raceway - Rally Circuit Reverse", code: "mixed3_r3_rev" },
      { id: 44, name: "", code: "" },
      { id: 45, name: "", code: "" },
      { id: 46, name: "", code: "" },
      { id: 47, name: "", code: "" },
      { id: 48, name: "Pinehills Raceway - Short Circuit", code: "mixed3_short_loop" },
      { id: 49, name: "Pinehills Raceway - Short Circuit Reverse", code: "mixed3_short_loop_rev" },
      { id: 50, name: "Rosenheim Raceway - Main Circuit", code: "mixed4_main_circuit" },
      { id: 51, name: "Rosenheim Raceway - Main Circuit Reverse", code: "mixed4_main_circuit_rev" },
      { id: 52, name: "Northland Raceway - Outer Loop", code: "mixed5_outer_loop" },
      { id: 53, name: "Northland Raceway - Outer Loop Reverse", code: "mixed5_outer_loop_rev" },
      { id: 54, name: "Northland Raceway - Inner Loop", code: "mixed5_inner_loop" },
      { id: 55, name: "Northland Raceway - Inner Loop Reverse", code: "mixed5_inner_loop_rev" },
      { id: 56, name: "Northland Raceway - Free Route", code: "mixed5_free_route" },
      { id: 57, name: "Firwood Motorcenter - Full Circuit", code: "mixed7_r1" },
      { id: 58, name: "Firwood Motorcenter - Full Circuit Reverse", code: "mixed7_r1_rev" },
      { id: 59, name: "Firwood Motorcenter - Short Circuit", code: "mixed7_r3" },
      { id: 60, name: "Firwood Motorcenter - Short Circuit Reverse", code: "mixed7_r3_rev" },
      { id: 61, name: "Northfolk Ring - Main Circuit", code: "mixed8_r1" },
      { id: 62, name: "Northfolk Ring - Open Circuit", code: "mixed8_r2" },
      { id: 63, name: "Northfolk Ring - Main Route Reverse", code: "mixed8_r3_rev" },
      { id: 64, name: "Clayridge Circuit - Main Circuit", code: "mixed9_r1" },
      { id: 65, name: "Clayridge Circuit - Main Circuit Reverse", code: "mixed9_r1_rev" },
      { id: 66, name: "Fairfield Mudpit - Demolition Arena", code: "mudpit_demolition_arena" },
      { id: 67, name: "Sandstone Raceway - Main Route", code: "sandpit1_long_loop" },
      { id: 68, name: "Sandstone Raceway - Main Route Reverse", code: "sandpit1_long_loop_rev" },
      { id: 69, name: "Sandstone Raceway - Short Route", code: "sandpit1_short_loop" },
      { id: 70, name: "Sandstone Raceway - Short Route Reverse", code: "sandpit1_short_loop_rev" },
      { id: 71, name: "Sandstone Raceway - Alt Route", code: "sandpit1_alt_loop" },
      { id: 72, name: "Sandstone Raceway - Alt Route Reverse", code: "sandpit1_alt_loop_rev" },
      { id: 73, name: "Savolax Sandpit - Full Circuit", code: "sandpit2_full_circuit" },
      { id: 74, name: "Savolax Sandpit - Full Circuit Reverse", code: "sandpit2_full_circuit_rev" },
      { id: 75, name: "Savolax Sandpit - Short Circuit", code: "sandpit2_2" },
      { id: 76, name: "Savolax Sandpit - Short Circuit Reverse", code: "sandpit2_2_rev" },
      { id: 77, name: "", code: "" },
      { id: 78, name: "Boulder Bank Circuit - Full Circuit", code: "sandpit3_long_loop" },
      { id: 79, name: "Boulder Bank Circuit - Full Circuit Reverse", code: "sandpit3_long_loop_rev" },
      { id: 80, name: "Boulder Bank Circuit - Short Circuit", code: "sandpit3_short_loop" },
      { id: 81, name: "Boulder Bank Circuit - Short Circuit Reverse", code: "sandpit3_short_loop_rev" },
      { id: 82, name: "Fairfield County - Demolition Arena", code: "smallstadium_demolition_arena" },
      { id: 83, name: "Hilltop Stadium - Figure 8", code: "speedway1_figure_8" },
      { id: 84, name: "Hilltop Stadium - Oval", code: "speedway1_oval" },
      { id: 85, name: "Big Valley Speedway - Classic Demolition Arena", code: "speedway2_classic_arena" },
      { id: 86, name: "Big Valley Speedway - Demolition Arena", code: "speedway2_demolition_arena" },
      { id: 87, name: "Big Valley Speedway - Figure 8", code: "speedway2_figure_8" },
      { id: 88, name: "Big Valley Speedway - Inner Oval", code: "speedway2_inner_oval" },
      { id: 89, name: "Big Valley Speedway - Outer Oval", code: "speedway2_outer_oval" },
      { id: 90, name: "Big Valley Speedway - Outer Oval Loop", code: "speedway2_oval_loop" },
      { id: 91, name: "", code: "" },
      { id: 92, name: "Fire Rock Raceway - Full Circuit", code: "tarmac1_main_circuit" },
      { id: 93, name: "Fire Rock Raceway - Full Circuit Reverse", code: "tarmac1_main_circuit_rev" },
      { id: 94, name: "Fire Rock Raceway - Short Circuit", code: "tarmac1_short_circuit" },
      { id: 95, name: "Fire Rock Raceway - Short Circuit Reverse", code: "tarmac1_short_circuit_rev" },
      { id: 96, name: "", code: "" },
      { id: 97, name: "Motorcity Circuit - Main Circuit", code: "tarmac2_main_circuit" },
      { id: 98, name: "Motorcity Circuit - Main Circuit Reverse", code: "tarmac2_main_circuit_rev" },
      { id: 99, name: "Motorcity Circuit - Trophy Circuit", code: "tarmac2_main_circuit_tourney" },
      { id: 100, name: "Espedalen Raceway - Main Circuit", code: "tarmac3_main_circuit" },
      { id: 101, name: "Espedalen Raceway - Main Circuit Reverse", code: "tarmac3_main_circuit_rev" },
      { id: 102, name: "Espedalen Raceway - Short Circuit", code: "tarmac3_short_circuit" },
      { id: 103, name: "Espedalen Raceway - Short Circuit Reverse", code: "tarmac3_short_circuit_rev" }
    ]
  },
  {
    name: "modCount",
    type: "number"
  },
  {
    name: "gamemode",
    type: "array",
    values: ["", "racing", "", "", "derby", "derby deathmatch", "team derby", "", "team race", "elimination race"]
  },
  {
    name: "teamCount",
    type: "number"
  },
  {
    name: "weather",
    type: "array",
    values: ["cloudy sunrise", "hazy morning", "clear day", "overcast afternoon", "cloudy sunset"]
  },
  {
    name: "laps",
    type: "number",
  },
  {
    name: "version",
    type: "number",
  },
  {
    name: "eventFlags",
    type: "array",
    values: [
      { reverseLimiter: 1, specialVehicles: 1, carReset: 1 },
      { reverseLimiter: 1, specialVehicles: 1, carReset: 0 },
      { reverseLimiter: 0, specialVehicles: 1, carReset: 1 },
      { reverseLimiter: 0, specialVehicles: 1, carReset: 0 },
      { reverseLimiter: 1, specialVehicles: 0, carReset: 1 },
      { reverseLimiter: 1, specialVehicles: 0, carReset: 0 },
      { reverseLimiter: 0, specialVehicles: 0, carReset: 1 },
      { reverseLimiter: 0, specialVehicles: 0, carReset: 0 } 
    ]
  },
  {
    name: "carClassRestriction",
    type: "array",
    values: ["none", "b-class", "c-class", "d-class" ],
    negative: "host"
  },
  {
    name: "carTypeRestriction",
    type: "array",
    values: [
      "", "", "", "", "", "", "", "", "", "", 
      "", "Rammer", "", "", "", "", "", "", "", "", 
      "", "", "", "", "", "", "", "", "", "", 
      "", "", "", "", "", "", "", "", "", "", 
      "", "", "", "", "", "", "", "", "", "", 
      "", "Rocket", "", "", "", "","", "", "", "", 
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
      "", "", "", "Blade", "", "", "", "", "", "",
      "", "", "", "", "", "", "", "", "", "",
    ],
    negative: "none"
  },
  {
    name: "botCount",
    type: "number"
  },
  {
    name: "timeLimit",
    type: "number"
  },
  {
    name: "eliminationInterval",
    type: "number"
  },
  {
    name: "multiRaceRoundIndex",
    type: "number"
  },
  {
    name: "steamport",
    type: "number"
  },
  {
    name: "gameport",
    type: "number"
  },
  {
    name: "vehicleDamageMode",
    type: "array",
    values: ["normal", "intense", "realistic"]
  },
  {
    name: "carResetDelay",
    type: "array",
    values: ["disabled", "instant", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
  },
  {
    name: "excludeFromQuickplay",
    type: "number"
  }
];
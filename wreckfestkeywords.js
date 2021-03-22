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
      { id: 0, name: "Madman Stadium - Demolition Arena" },
      { id: 1, name: "Madman Stadium - Figure 8" },
      { id: 2, name: "Bonebreaker Valley - Main Circuit" },
      { id: 3, name: "Crash Canyon - Main Circuit" },
      { id: 4, name: "Bloomfield Speedway - Dirt Oval" },
      { id: 5, name: "Bloomfield Speedway - Figure 8" },
      { id: 6, name: "Glendale Countryside - Field Arena" },
      { id: 7, name: "Drytown Desert - Main Circuit" },
      { id: 8, name: "Drytown Desert Reverse - Main Circuit Reverse" },
      { id: 9, name: "" },
      { id: 10, name: "Rockfield Roughspot - Dirt Oval" },
      { id: 11, name: "" },
      { id: 12, name: "Mudford Motorpark - Mud Oval" },
      { id: 13, name: "Mudford Motorpark - Mud Pit" },
      { id: 14, name: "The Maw - Demolition Arena" },
      { id: 15, name: "Kingston Raceway - Asphalt Oval" },
      { id: 16, name: "Kingston Raceway - Asphalt Oval Reverse" },
      { id: 17, name: "Kingston Raceway - Figure 8" },
      { id: 18, name: "Eagles Peak Motorpark - Racing Track" },
      { id: 19, name: "Eagles Peak Motorpark - Racing Track Reverse" },
      { id: 20, name: "Eagles Peak Motorpark - Demolition Arena" },
      { id: 21, name: "Vale Falls - Main Circuit" },
      { id: 22, name: "Vale Falls - Main Circuit Reverse" },
      { id: 23, name: "Vale Falls - Short Circuit" },
      { id: 24, name: "Vale Falls - Short Circuit Reverse" },
      { id: 25, name: "Tribend Speedway - Main Circuit" },
      { id: 26, name: "Tribend Speedway - Reverse Circuit" },
      { id: 27, name: "Tribend Speedway - Wild Circuit" },
      { id: 28, name: "" },
      { id: 29, name: "Fairfield Grass Arena - Demolition Arena" },
      { id: 30, name: "Midwest Motocenter - Main Loop" },
      { id: 31, name: "Midwest Motocenter - Main Loop Reverse" },
      { id: 32, name: "" },
      { id: 33, name: "Deathloop - Main Circuit" },
      { id: 34, name: "Finncross Circuit - Main Circuit" },
      { id: 35, name: "Finncross Circuit - Main Circuit Reverse" },
      { id: 36, name: "Maasten Motorcenter - Main Circuit" },
      { id: 37, name: "Maasten Motorcenter - Main Circuit Reverse" },
      { id: 38, name: "Pinehills Raceway - Full Circuit" },
      { id: 39, name: "Pinehills Raceway - Full Circuit Reverse" },
      { id: 40, name: "Pinehills Raceway - Rally Circuit" },
      { id: 41, name: "Pinehills Raceway - Rally Circuit Reverse" },
      { id: 42, name: "" },
      { id: 43, name: "" },
      { id: 44, name: "" },
      { id: 45, name: "" },
      { id: 46, name: "Pinehills Raceway - Short Circuit" },
      { id: 47, name: "Pinehills Raceway - Short Circuit Reverse" },
      { id: 48, name: "Rosenheim Raceway - Main Circuit" },
      { id: 49, name: "Rosenheim Raceway - Main Circuit Reverse" },
      { id: 50, name: "Northland Raceway - Outer Loop" },
      { id: 51, name: "Northland Raceway - Outer Loop Reverse" },
      { id: 52, name: "Northland Raceway - Inner Loop" },
      { id: 53, name: "Northland Raceway - Inner Loop Reverse" },
      { id: 54, name: "Northland Raceway - Free Route" },
      { id: 55, name: "Firwood Motorcenter - Full Circuit" },
      { id: 56, name: "Firwood Motorcenter - Full Circuit Reverse" },
      { id: 57, name: "Firwood Motorcenter - Short Circuit" },
      { id: 58, name: "Firwood Motorcenter - Short Circuit Reverse" },
      { id: 59, name: "Northfolk Ring - Main Circuit" },
      { id: 60, name: "Northfolk Ring - Open Circuit" },
      { id: 61, name: "Northfolk Ring - Main Route Reverse" },
      { id: 62, name: "Clayridge Circuit - Main Circuit" },
      { id: 63, name: "Clayridge Circuit - Main Circuit Reverse" },
      { id: 64, name: "Fairfield Mudpit - Demolition Arena" },
      { id: 65, name: "Sandstone Raceway - Main Route" },
      { id: 66, name: "Sandstone Raceway - Main Route Reverse" },
      { id: 67, name: "Sandstone Raceway - Short Route" },
      { id: 68, name: "Sandstone Raceway - Short Route Reverse" },
      { id: 69, name: "Sandstone Raceway - Alt Route" },
      { id: 70, name: "Sandstone Raceway - Alt Route Reverse" },
      { id: 71, name: "Savolax Sandpit - Full Circuit" },
      { id: 72, name: "Savolax Sandpit - Full Circuit Reverse" },
      { id: 73, name: "Savolax Sandpit - Short Circuit" },
      { id: 74, name: "Savolax Sandpit - Short Circuit Reverse" },
      { id: 75, name: "" },
      { id: 76, name: "Boulder Bank Circuit - Full Circuit" },
      { id: 77, name: "Boulder Bank Circuit - Full Circuit Reverse" },
      { id: 78, name: "Boulder Bank Circuit - Short Circuit" },
      { id: 79, name: "Boulder Bank Circuit - Short Circuit Reverse" },
      { id: 80, name: "Fairfield County - Demolition Arena" },
      { id: 81, name: "Hilltop Stadium - Figure 8" },
      { id: 82, name: "Hilltop Stadium - Oval" },
      { id: 83, name: "Big Valley Speedway - Classic Demolition Arena" },
      { id: 84, name: "Big Valley Speedway - Demolition Arena" },
      { id: 85, name: "Big Valley Speedway - Figure 8" },
      { id: 86, name: "Big Valley Speedway - Inner Oval" },
      { id: 87, name: "Big Valley Speedway - Outer Oval" },
      { id: 88, name: "Big Valley Speedway - Outer Oval Loop" },
      { id: 89, name: "" },
      { id: 90, name: "Fire Rock Raceway - Full Circuit" },
      { id: 91, name: "Fire Rock Raceway - Full Circuit Reverse" },
      { id: 92, name: "Fire Rock Raceway - Short Circuit" },
      { id: 93, name: "Fire Rock Raceway - Short Circuit Reverse" },
      { id: 94, name: "" },
      { id: 95, name: "Motorcity Circuit - Main Circuit" },
      { id: 96, name: "Motorcity Circuit - Main Circuit Reverse" },
      { id: 97, name: "Espedalen Raceway - Main Circuit" },
      { id: 98, name: "Espedalen Raceway - Main Circuit Reverse" },
      { id: 99, name: "Espedalen Raceway - Short Circuit" },
      { id: 100, name: "Espedalen Raceway - Short Circuit Reverse" },
      { id: 101, name: "" },
      { id: 102, name: "Dirt Devil Stadium - Dirt Speedway" },
      { id: 103, name: "Dirt Devil Stadium - Demolition Arena" },
      { id: 104, name: "Hellride - Main Circuit" },
      { id: 105, name: "Thunderbowl - Demolition Arena" },
      { id: 106, name: "Hillstreet Circuit - Race Track" },
      { id: 107, name: "Hillstreet Circuit - Race Track Reverse" },
      { id: 108, name: "" },
      { id: 109, name: "Wrecknado - Main Circuit" },
      { id: 110, name: "Wrecknado - Demolition Arena" }
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
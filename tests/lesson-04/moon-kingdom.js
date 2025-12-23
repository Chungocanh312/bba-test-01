// Bài 1:
const characters = [
  { name: "Iron Man", level: 4, health: 700 },
  { name: "Captain America", level: 4, health: 900 },
  { name: "Spider man", level: 4, health: 300 },
];

function createCharacters(charactersObject) {
  return charactersObject.map((item) => ({
    name: item.name.toUpperCase(),
    level: item.level * 2,
    health: item.health * 3,
  }));
}
const charactersPowerUp = createCharacters(characters);
console.log(charactersPowerUp);
console.log(
  `Characters Power Up detail is ${JSON.stringify(charactersPowerUp)}`
);
console.log("Characters Power Up detail is", createCharacters(characters));

const possibleWinners = charactersPowerUp.filter((item) => item.health > 1000);
console.log(possibleWinners);

// Bài 2:
const players = [
  { name: "Mario", score: 1_000 },
  { name: "Luigi", score: 900 },
  { name: "Peach", score: 13_000 },
  { name: "Carla", score: 1_000 },
  { name: "Francesco", score: 900 },
  { name: "Yoshida", score: 12_000 },
];

function leaderBoard(playerBoard){
    const medals = ['🥇','🥈','🥉'];
    return [...playerBoard].sort((a,b) => a.score - b.score)
    .map((player, index) => ({
        rank: index + 1,
        medal: medals[index] || " ",
        name: player.name,
        score: player.score
    }));
}

leaderBoard(players).forEach(player => {
    console.log(`${player.medal || " "} ${player.rank}. ${player.name} - ${player.score}`)
})
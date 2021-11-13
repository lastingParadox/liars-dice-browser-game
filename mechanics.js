// Create a player object
function Player(name)
{
	this.name = name;
	this.points = 0;
	this.dice = new Array(5).fill(0);
	this.claimNum = 0;
	this.claimDie = 0;
};

// There was a challenge
function contest(challenger, liar)
{
	// If liar was corrrect
	if (claimCheck[liar.claimDie] == liar.claimNum)
	{
		liar.points++;
		if (liar.points > firstPlace.points)
			firstPlace = liar;
	}
	// If challenger was correct
	else
	{
		challenger.points++;
		if (challenger.points > firstPlace.points)
			firstPlace = challenger;
	}
}

// Create players
/*
player1 = new Player(name1);
player2 = new Player(name2);
player3 = new Player(name3);
player4 = new Player(name4);
*/
let name1 = ""; //BUTTON INPUT------------------------------------------
let name2 = ""; //BUTTON INPUT------------------------------------------
let name3 = ""; //BUTTON INPUT------------------------------------------
let name4 = ""; //BUTTON INPUT------------------------------------------
// Grabs name and sets it to the appropriate player. Uses Placeholder if no input is given
function getNames(){
	name1 = document.getElementById("player_1").value;
	if (name1 == "")
		name1 = "Player 1";
	document.getElementById("player_1").value = "";
	name2 = document.getElementById("player_2").value;
	if (name2 == "")
		name2 = "Player 2";
	document.getElementById("player_2").value = "";
	name3 = document.getElementById("player_3").value;
	if (name3 == "")
		name3 = "Player 3";
	document.getElementById("player_3").value = "";
	name4 = document.getElementById("player_4").value;
	if (name4 == "")
		name4 = "Player 4";
	document.getElementById("player_4").value = "";
}

let players = [new Player(name1), new Player(name2), new Player(name3), new Player(name4)];

// Pick a random player to start off the game
const first = Math.floor(Math.random() * 4);

let firstPlace = players[first];

// Keep playing the game
while (firstPlace.points < 4)
{
	for (let i = 0; i < players.length; i++)
	{
		for (let j = 0; j < 5; j++)
		{
			// Randomly generate dice w/ values 1-6
			players[i].dice[j] = Math.ceil(Math.random() * 6);
		}
	}

	// Count how many of each dice there are
	let claimCheck = new Array(6).fill(0);
	for (let i = 0; i < players.length; i++)
	{
		for (let j = 0; j < 5; j++)
		{
			switch (players[i].dice[j])
			{
				case 1:
					claimCheck[0]++;
					break;
				case 2:
					claimCheck[1]++;
					break;
				case 3:
					claimCheck[2]++;
					break;
				case 4:
					claimCheck[3]++;
					break;
				case 5:
					claimCheck[4]++;
					break;
				case 6:
					claimCheck[5]++;
					break;
			}
		}
	}

	// Go around and make claims
	for (let i = 0; i < players.length; i++)
	{
		// let challenger = players[i];
		// let liar = players[i - 1];
		if (true)// CHALLENGE)----------------------------------------------------
		{
			contest(players[i], players[(i == 0 ? 5 : (i - 1))]);
			break;
		}

		players[i].claimNum = 0; //INPUT-------------------------------------
		players[i].claimDie = 0; //INPUT-------------------------------------
	}
}

function main(){
	//set up
	const game = document.getElementById('#game');
	const form = document.querySelector('form');
	//Generate a Deck of Cards
	//let cards52 = createDeck();
	//console.log(deck);
	let player = [];
	let cpu = [];
 	let stnrdDeck = createDeck();
 	let playerTotal = 0;
 	let cpuTotal = 0;
	
	document.querySelector(".playBtn").addEventListener("click", function(evt){
		evt.preventDefault();

		let deck = []
		let input = document.querySelector('#startValues');
		cheat = input.value.trim();
		cheat = cheat.split(',');
		let num = 0;
		if (cheat[0] !== ''){
			for (i=0; i<cheat.length; i++){
					if (cheat[i]==='A'){
						num = 11;
					}
					else if (cheat[i]==='J'){
						num = 11;
					}
					else if (cheat[i]==='Q'){
						num = 12;
					}
					else if (cheat[i]==='K'){
						num = 13;
					}
					else{
						num = cheat[i];
					}
					deck.push({'value':cheat[i], 'suit':"♥", 'num':parseInt(num)});
					if (deck[i].value === ''){
						deck.pop;
					}
			}
		}
		deck = deck.concat(stnrdDeck);

		//adding starting cards
		cpu.push(deck[0]);
		cpu.push(deck[2]);
		player.push(deck[1]);
		player.push(deck[3]);

		//adding starting cards to total
		playerTotal = player[0].num + player[1].num;
		cpuTotal = cpu[0].num + cpu[1].num;


		//display starting cards and totals
		//display player total
		let heading = document.createElement("h1");
		let content = document.createTextNode("Computer Hand - Total: "+cpuTotal);
		heading.appendChild(content);

		let currentDiv = document.querySelector(".game");
		document.body.appendChild(heading, currentDiv);

		//adding total
		newDiv = document.createElement("p");
		content = document.createTextNode(cpu[0].value+" "+cpu[0].suit);
		newDiv.appendChild(content);

		currentDiv = document.querySelector(".game");
		document.body.appendChild(newDiv, currentDiv);

		newDiv = document.createElement("p");
		content = document.createTextNode(cpu[1].value+" "+cpu[1].suit);
		newDiv.appendChild(content);

		currentDiv = document.querySelector(".game");
		document.body.appendChild(newDiv, currentDiv);

		//display player total
		heading = document.createElement("h1");
		content = document.createTextNode("Player Hand - Total: "+playerTotal);
		heading.appendChild(content);

		currentDiv = document.querySelector(".game");
		document.body.appendChild(heading, currentDiv);

		//player cards
		newDiv = document.createElement("p");
		content = document.createTextNode(player[0].value+" "+player[0].suit);
		newDiv.appendChild(content);

		currentDiv = document.querySelector(".game");
		document.body.appendChild(newDiv, currentDiv);

		newDiv = document.createElement("p");
		content = document.createTextNode(player[1].value+" "+player[1].suit);
		newDiv.appendChild(content);

		currentDiv = document.querySelector(".game");
		document.body.appendChild(newDiv, currentDiv);

		//creating buttons
		let btn = document.createElement("BUTTON");
		content = document.createTextNode("Hit");
		btn.appendChild(content);

		currentDiv = document.querySelector(".game");
		document.body.appendChild(btn, currentDiv);

		btn = document.createElement("BUTTON");
		content = document.createTextNode("Stand");
		btn.appendChild(content);

		currentDiv = document.querySelector(".game");
		document.body.appendChild(btn, currentDiv);

		//create and apply the appropriate CSS classes to get rid of the form (do this with styles, there's no need to remove the element)
		form.classList.toggle('hidden');
		
		});

}


function createDeck(){
	let deck = [];
	let number = '';
	let suit = '';
	let card = {};
	for(num=1; num<=12; num++){
		if (num === 1){
			number = 'A';
			num = 11;
		}
		else if (num === 10) {
			number = 'J';
		}
		else if (num === 11) {
			number = 'Q';
		}
		else if (num === 12) {
			number = 'K';
		}
		else
			number = num;

		for(s=0; s<4; s++){
			if (s===0){
				suit = '♠';
			}
			else if (s===1){
				suit = '♥';
			}
			else if (s===2){
				suit = '♣';
			}
			else if (s===3){
				suit = '♦';
			}
			deck.push({'value':number, 'suit':suit, 'num':parseInt(num)});
		}
	}
	//shuffle deck (using Durstenfeld algorithm)
	let j = 0;
	let temp = {};
	for (index = deck.length - 1; index>0; index--) {
       j = Math.floor(Math.random() * (index + 1));
       temp = deck[index];
       deck[index] = deck[j];
       deck[j] = temp;
    }

	return deck;
}

document.addEventListener('DOMContentLoaded', main);
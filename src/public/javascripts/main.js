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
	
	document.querySelector(".playBtn").addEventListener("click", function(evt){
		evt.preventDefault();

		let deck = []
		let input = document.querySelector('#startValues');
		cheat = input.value.trim();
		cheat = cheat.split(',');
		if (cheat[0] !== ''){
			for (i=0; i<cheat.length; i++){
					deck.push({'value':cheat[i], 'suit':"♥"});
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

		//displa starting cards
		const newDiv = document.createElement("div");
		const content = document.createTextNode(cpu[0].value+" "+cpu[0].suit);
			//+ " "+deck[1].value+" "+deck[1].suit);
			//cpu[1]+"\n"+player[0]+" "+player[1]);
		newDiv.appendChild(content);

		const currentDiv = document.querySelector(".game");
		document.body.appendChild(newDiv, currentDiv);
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
			deck.push({'value':number, 'suit':suit});
		}
	}
	// //shuffle deck (using Durstenfeld algorithm)
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
//changer la source de l'image en fonction de l'état de l"ampoule
var state = 0;
//si l'ampoule est allumé,l'éteinfre
		function changerampoule() {
            //ampoule allumée
			if (state == 1) {
				document.getElementById("ampoule").src="https://image.ibb.co/hoBxtm/light_bulb_off.png";
				state = 0;
                //ampoule éteinnte
			} else {
				document.getElementById("ampoule").src="https://image.ibb.co/cBBaeR/light_bulb_on.png";
				state = 1;
			}
		}
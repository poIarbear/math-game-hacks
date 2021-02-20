//Escapes Any Battle (Not in a dungeon battle though)
import { Swal, Toast, NumberInput } from "../utils/swal";
import { Hack, category, Toggler } from "../index";
import { VERY_LARGE_NUMBER, gameData, pickRandom } from "../utils/util";
import { BattleState } from "../../../typings/game";
import { prodigy, game } from "../utils/util";

new Hack(category.battle, "Escape Battle", "Escape any battle!").setClick(async () => {
	const currentState = game.state.current;
	if (currentState === "PVP") game.state.states.PVP.endPVP();
	else if (currentState === "CoOp") prodigy.world.$(_.player.data.zone);
	else if (!['Battle','SecureBattle'].includes(currentState)) await Toast.fire(
		"Invalid State.",
		"You are currently not in a battle.",
		"error"
	);
	else {game.state.callbackContext.runAwayCallback();
	await Toast.fire(
		"Escaped!",
		"You have successfully escaped from the battle.",
		"success"
	);

}});

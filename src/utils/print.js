import { Player } from "../player.js";


export function showMessage(player, text, ..._with) {
    new Player(player).sendRawtext(text, ..._with);
}

export function showActionbar(player, text, ..._with) {
    new Player(player).showRawtext(text, ..._with);
}

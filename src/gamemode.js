import { GameMode } from "@minecraft/server";


class _GameMode {
    async #checkGameMode(player, mode) {
        try {
            const result = await player.runCommandAsync(`testfor @s[m=${mode}]`);
            return !!result.successCount;
        } catch {
            return false;
        }
    }

    isCreative(player) {
        return this.#checkGameMode(player, "c");
    }

    isSurvival(player) {
        return this.#checkGameMode(player, "s");
    }

    isAdventure(player) {
        return this.#checkGameMode(player, "a");
    }

    isSpectator(player) {
        return this.#checkGameMode(player, "sp");
    }
    
    isDefault(player) {
        return this.#checkGameMode(player, "d");
    }

    get(player) {
        if(this.isCreative(player)) {
            return GameMode.creative;
        }
        if(this.isSurvival(player)) {
            return GameMode.survival;
        }
        if(this.isAdventure(player)) {
            return GameMode.adventure;
        }
        if(this.isSpectator(player)) {
            return GameMode.spectator;
        }
    }
}

export const Gamemode = new _GameMode();

import { Command } from "./command.js";
import { world } from "@minecraft/server";

export const Scoreboard = new (class {
    // #ListRegex = /-\s(?<name>.*?):\s/g;

    addObjective(name, displayName) {
        const _displayName = displayName ? displayName : name;
        Command.runSafe(`scoreboard objectives add "${name}" dummy "${_displayName}"`);
    }

    getAllObjectives() {
      const objectives = world.scoreboard.getObjectives();
      return objectives.map(objective => objective.displayName);
        // try {
        //     const { statusMessage } = Command.run(`scoreboard objectives list`);
        //     return [...statusMessage.matchAll(this.#ListRegex)].map(m => m.groups.name);
        // }
        // catch {
        //     return [];
        // }
    }

    isExistObjective(name) {
        return getAllObjectives().includes(name);
    }
})();

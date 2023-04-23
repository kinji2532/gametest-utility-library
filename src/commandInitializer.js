import { world } from "@minecraft/server";

void function() {
    const func = async ({ initialSpawn, player }) => {
        if(!initialSpawn) return;
        const result = await player.runCommandAsync("list");
        if(result.successCount) world.events.playerSpawn.unsubscribe(func);
    }
    world.events.playerSpawn.subscribe(func);
}();

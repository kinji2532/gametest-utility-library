// import { Dimension, Entity } from "@minecraft/server";


export class Command {
    #run(command, object) {
        if(object.runCommandAsync === undefined) return;
        return object.runCommandAsync(command);
    }

    static async run(command, object) {
        return await this.#run(command, object);
    }

    static async runSafe(command, object) {
        try {
          return await this.#run(command, object);
        }
        catch(e) {
            return JSON.parse(e);
        }
    }

    static selectorBuilder(selector, selectors) {
        if(!selectors) {
            if(selector.startsWith("@")) return selector;
            else return `"${selector}"`;
        }

        const selectorArray = [];
        for(const key in selectors) {
            const rawValue = selectors[key];
            const value = rawValue.includes(" ") ? `"${rawValue}"` : rawValue;
            selectorArray.push(`${key}=${value}`);
        }
        return `${selector}[${selectorArray.join(",")}]`;
    }
};

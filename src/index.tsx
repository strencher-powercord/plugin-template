/// <reference path="../types.d.ts" />

import {Plugin} from "powercord/entities";

export default class MyPlugin extends Plugin {
    public startPlugin(): void {}

    public pluginWillUnload(): void {}
}
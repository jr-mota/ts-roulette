import { RouletteItem } from "./Models/RouletteItem";

export class RouletteModel {
  private items: Array<RouletteItem>;

  constructor() {
    this.items = [
      { id: 1, item: 1 },
      { id: 2, item: 2 },
      { id: 3, item: 32 },
      { id: 4, item: 65 },
      { id: 5, item: 11 }
    ]; // fetch("getRouletteItems");
  }

  // public incrementPos(): void {
  //   this.roulettePosition += 6;
  // }

  public getItems(): Array<RouletteItem> {
    return this.items;
  }
}

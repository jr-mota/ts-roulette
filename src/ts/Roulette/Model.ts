import { RouletteItem } from "./Models/RouletteItem";

export class RouletteModel {
  private items: Array<RouletteItem>;
  private itemsPosition: number;

  constructor() {
    this.items = [
      { id: 1, item: 1 },
      { id: 2, item: 2 },
      { id: 3, item: 3 },
      { id: 4, item: 4 },
      { id: 5, item: 5 },
      { id: 6, item: 6 },
      { id: 7, item: 7 },
      { id: 8, item: 8 },
      { id: 9, item: 9 },
      { id: 10, item: 10 },
      { id: 11, item: 11 },
      { id: 12, item: 12 },
      { id: 13, item: 13 },
      { id: 14, item: 14 },
      { id: 15, item: 15 },
      { id: 16, item: 16 },
      { id: 17, item: 17 },
      { id: 18, item: 18 },
      { id: 19, item: 19 },
      { id: 20, item: 20 },
      { id: 21, item: 21 },
      { id: 22, item: 22 },
      { id: 23, item: 23 },
      { id: 24, item: 24 },
      { id: 25, item: 25 },
      { id: 26, item: 26 },
      { id: 27, item: 27 },
      { id: 28, item: 28 },
      { id: 29, item: 29 },
      { id: 30, item: 30 }
    ]; // fetch("getRouletteItems");

    this.itemsPosition = 0;
  }

  public getItems(): Array<RouletteItem> {
    return this.items;
  }

  public getPosition(): number {
    return this.itemsPosition;
  }

  public moveItems(): void {
    let rand = Math.floor(Math.random() * 30);

    if (rand < 10) {
      rand = 10;
    }

    console.log(rand);

    this.itemsPosition = rand * 260 - 520;
  }
}

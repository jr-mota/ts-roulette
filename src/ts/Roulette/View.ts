import { RouletteItem } from "./Models/RouletteItem";

export class RouletteView {
  public elem: HTMLElement | null;

  constructor(elemId: string) {
    this.elem = document.getElementById(elemId);
  }

  public insertItems(items: Array<RouletteItem>): void {
    for (const item of items) {
      const newElem: HTMLElement = document.createElement("div");
      newElem.innerHTML = item.item.toString();
      newElem.className = "roulette__item";

      this.elem?.appendChild(newElem);
    }
  }

  public changePosition(position: number): void {
    if (this.elem) this.elem.style.transform = `translateX(-${position}px)`;
  }
}

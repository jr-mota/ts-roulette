export class RouletteView {
  public elem: HTMLElement | null;

  constructor(elemId: string) {
    this.elem = document.getElementById(elemId);
  }

  public changePosition(position: number) {
    if (this.elem) this.elem.style.right = position + "px";
  }
}

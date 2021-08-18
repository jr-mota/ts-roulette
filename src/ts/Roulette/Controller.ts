import { RouletteModel } from "./Model";
import { RouletteView } from "./View";

class RouletteController {
  private model: RouletteModel;
  private view: RouletteView;

  private btn: HTMLElement | null;
  private twistInterval: number;

  constructor(model: RouletteModel, view: RouletteView, btnId: string) {
    this.model = model;
    this.view = view;

    this.btn = document.getElementById(btnId);
    this.twistInterval = 0;

    this.btn?.addEventListener("click", this.twistRoulette.bind(this));
  }

  private twistRoulette(e: Event): void {
    if (this.twistInterval) {
      clearInterval(this.twistInterval);
      this.twistInterval = 0;
    } else {
      this.twistInterval = setInterval(() => {
        this.model.incrementPos();
        this.view.changePosition(this.model.getPosition());
      }, 1000);
    }
  }
}

export { RouletteController, RouletteModel, RouletteView };

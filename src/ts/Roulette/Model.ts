export class RouletteModel {
  private roulettePosition: number;

  constructor() {
    this.roulettePosition = 0;
  }

  public incrementPos(): void {
    this.roulettePosition += 6;
  }

  public getPosition(): number {
    return this.roulettePosition;
  }
}

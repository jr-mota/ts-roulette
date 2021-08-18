import "/src/assets/index.scss";

import {
  RouletteController,
  RouletteModel,
  RouletteView
} from "./ts/Roulette/Controller";

new RouletteController(
  new RouletteModel(),
  new RouletteView("roulette"),
  "roulette__btn"
);

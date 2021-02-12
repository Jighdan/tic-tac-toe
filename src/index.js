import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";
import Options from "./components/Options";

const instanceOfBoard = new Board();
const instanceOfScoreboard = new Scoreboard();
const instanceOfOptions = new Options();

instanceOfBoard.render();
instanceOfScoreboard.render();
instanceOfOptions.render();
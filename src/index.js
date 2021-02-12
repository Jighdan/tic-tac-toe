import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";
import CurrentTurn from "./components/CurrentTurn";
import Options from "./components/Options";

const instanceOfBoard = new Board();
const instanceOfScoreboard = new Scoreboard();
const instanceOfCurrentTurn = new CurrentTurn();
const instanceOfOptions = new Options();

instanceOfBoard.render();
instanceOfScoreboard.render();
instanceOfCurrentTurn.render();
instanceOfOptions.render();

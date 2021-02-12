# Tic-Tac-Toe

A simple tic-tac-toe game. Made for practicing concepts such as:

- Object-Oriented Programming.
- Observable Design Pattern.
- State Management.

[Check the game rules.](https://en.wikipedia.org/wiki/Tic-tac-toe)

## Game Logic Pseudo-code

```
IF clickedSquare IS NONE:
	SET clickedSquare.content AS currentTurn

	IF winningConditions IS TRUE:
		ADD score TO currentTurn
		END

	IF grid DOESN'T CONTAIN NONE:
		ADD score TO draw
		END

	TOGGLE currentTurn
```

## Tools

- **Sass**: Style files modularity.
- **Webpack**: Managing multiple JavaScript files.
- **Prettier**: Code formatting.
- **ESLint**: Code consistency.

## Resources

- [Observable Design Pattern](https://refactoring.guru/design-patterns/observer)
- [Object-oriented Programming in 7 minutes](https://www.youtube.com/watch?v=pTB0EiLXUC8&)
- [UI Idea 1](https://dribbble.com/shots/1710515-Tic-Tac-Toe)
- [UI Idea 2](https://dribbble.com/shots/3402966-Tic-Tac-Toe)
- [UI Idea 3](https://dribbble.com/shots/6546099-Empty-Spaces-10)

const maze = [
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, 0, 0, 0, -1, 0, 0, 0, 1, -1],
  [-1, 0, -1, 0, 0, 0, -1, 0, 0, -1],
  [-1, 0, -1, -1, -1, 0, -1, -1, 0, -1],
  [-1, 0, 0, 0, -1, 0, 0, 0, 0, -1],
  [-1, -1, -1, 0, 0, 0, -1, -1, -1, -1],
  [-1, 1, 0, 0, -1, 0, 0, 0, 0, -1],
  [-1, -1, -1, -1, -1, 0, -1, 0, -1, -1],
  [-1, 0, 0, 0, 0, 0, -1, 1, 0, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
];

const visited = [
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, false, false, false, -1, false, false, false, false, -1],
  [-1, false, -1, false, false, false, -1, false, false, -1],
  [-1, false, -1, -1, -1, false, -1, -1, false, -1],
  [-1, false, false, false, -1, false, false, false, false, -1],
  [-1, -1, -1, false, false, false, -1, -1, -1, -1],
  [-1, false, false, false, -1, false, false, false, false, -1],
  [-1, -1, -1, -1, -1, false, -1, false, -1, -1],
  [-1, false, false, false, false, false, -1, false, false, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
];

const BLOCK = -1;
const ROW_COUNT = maze.length;
const COL_COUNT = maze[0].length;
const TARGET = 1;

const paths: { row: number; col: number }[][] = [];
function solver(
  row: number,
  col: number,
  path: { row: number; col: number }[]
) {
  //base case
  //out of bound
  if (row < 0 || row >= ROW_COUNT) return;
  if (col < 0 || col >= COL_COUNT) return;
  //visited
  if (visited[row][col]) return;

  //if blocked
  if (maze[row][col] === BLOCK) return;

  //found the target
  if (maze[row][col] === TARGET) {
    paths.push([...path, { row, col }]);
    console.log("=found path=");
    return;
  }

  visited[row][col] = true;

  solver(row + 1, col, [...path, { row, col }]);
  solver(row - 1, col, [...path, { row, col }]);
  solver(row, col + 1, [...path, { row, col }]);
  solver(row, col - 1, [...path, { row, col }]);

  //backtrack
  visited[row][col] = false;
}

solver(1, 1, []);
console.log(paths.length);

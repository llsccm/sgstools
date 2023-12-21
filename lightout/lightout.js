const board = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
let maxRows = board.length
let maxCols = board[0].length
let setMode = true
function printBoard() {
  let s = ''
  for (let i = 0; i < maxRows; i++) {
    s += board[i].join(' ') + '\n'
  }
  console.log(s)
  update()
}

function click(row, col) {
  invert(row, col)
  if (row - 1 >= 0) invert(row - 1, col)
  if (row + 1 < maxRows) invert(row + 1, col)
  if (col - 1 >= 0) invert(row, col - 1)
  if (col + 1 < maxCols) invert(row, col + 1)
}
function setting(row, col) {
  invert(row, col)
}
function invert(row, col) {
  board[row][col] = 1 - board[row][col]
}
function solve() {
  let solution = []
  if (dfs(0, 0, solution)) {
    executeSolution(solution)
  } else {
    console.log('无解')
  }
}

function dfs(row, col, solution) {
  if (row === maxRows) {
    // If we reach the end of the board, check if the board is solved
    return isSolved()
  }

  // Try clicking the current light
  click(row, col)
  solution.push([row, col])

  // Move to the next light
  let nextRow = col === maxCols - 1 ? row + 1 : row
  let nextCol = col === maxCols - 1 ? 0 : col + 1

  // Recursively try the next light
  if (dfs(nextRow, nextCol, solution)) {
    return true
  }

  // If the current configuration didn't lead to a solution, backtrack
  click(row, col)
  solution.pop()

  // Try the next light without clicking the current one
  return dfs(nextRow, nextCol, solution)
}

function isSolved() {
  for (let i = 0; i < maxRows; i++) {
    for (let j = 0; j < maxCols; j++) {
      if (board[i][j] === 0) {
        return false
      }
    }
  }
  return true
}

function executeSolution(solution) {
  console.log('解题步骤：')
  for (let i = 0; i < solution.length; i++) {
    console.log(`点击 (${solution[i][0] + 1}, ${solution[i][1] + 1})`)
    click(solution[i][0], solution[i][1])
    step.innerHTML += `点击 (${solution[i][0] + 1}, ${solution[i][1] + 1})<br/>`
  }
  // console.log('解题后的状态：')
  printBoard()
}

const field = document.querySelector('.field')
const edit = document.querySelector('#edit')
const mode = document.querySelector('.mode')
const answer = document.querySelector('#answer')
const step = document.querySelector('.step')
edit.addEventListener('click', () => {
  setMode = !setMode
  if (setMode) {
    mode.innerHTML = '编辑模式'
  } else {
    mode.innerHTML = '解题模式'
  }
})
answer.addEventListener('click', () => {
  step.innerHTML = ''
  solve()
})

function createField() {
  let s = '<table id="gameBoard" width=100% height=100% border=1 cellpadding=0 cellspacing=0>'
  for (let i = 0; i < maxRows; i++) {
    s += '<tr>'
    for (let j = 0; j < maxCols; j++) {
      s += '<td data-state=' + board[i][j] + '></td>'
    }
    s += '</tr>'
  }
  s += '</table>'
  field.innerHTML = s
  const gameBoard = document.querySelector('#gameBoard')
  gameBoard.addEventListener('click', (e) => {
    const target = e.target
    if (target.nodeName === 'TD') {
      const row = target.parentNode.rowIndex
      const col = target.cellIndex
      setMode ? setting(row, col) : click(row, col)
      printBoard()
    }
  })
  console.log('初始状态：')
  printBoard()
}

function update() {
  const gameBoard = document.querySelector('#gameBoard')
  for (let i = 0; i < maxRows; i++) {
    for (let j = 0; j < maxCols; j++) {
      gameBoard.rows[i].cells[j].dataset.state = board[i][j]
      gameBoard.rows[i].cells[j].style.backgroundColor = board[i][j] === 1 ? '#5C90FF' : '#E6AB5E'
    }
  }
}

createField()

// 自动解题
// solve()

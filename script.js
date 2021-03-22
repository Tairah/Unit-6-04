let base1 = 0
let base2 = 0
let heighth = 0
let sum = 0
let p = 0

document.getElementById('calculate area').addEventListener('click',calculation)

function calculation () {
  base2 = document.getElementById('base-2').value
  base1 = document.getElementById('base-1').value
  heighth = document.getElementById('height-h').value
  base2 = parseInt(base2)
  base1 = parseInt(base1)
  heighth = parseInt(heighth)
  sum = base1 + base2
  p = sum * heighth / 2
  document.getElementById('paragraph').innerHTML = p
}
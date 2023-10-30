const codes = {
  'A': ['11000'],
  'B': ['10011'],
  'C': ['01110'],
  'D': ['10010'],
  'E': ['10000'],
  'F': ['10110'],
  'G': ['01011'],
  'H': ['00101'],
  'I': ['01100'],
  'J': ['11010'],
  'K': ['11110'],
  'L': ['01001'],
  'M': ['00111'],
  'N': ['00110'],
  'O': ['00011'],
  'P': ['01101'],
  'Q': ['11101'],
  'R': ['01010'],
  'S': ['10100'],
  'T': ['00001'],
  'U': ['11100'],
  'V': ['01111'],
  'W': ['11001'],
  'X': ['10111'],
  'Y': ['10101'],
  'Z': ['10001'],
  ' ': ['00100'],
  '1': ['11011', '11101'],
  '2': ['11011', '11001'],
  '3': ['11011', '10000'],
  '4': ['11011', '01010'],
  '5': ['11011', '00001'],
  '6': ['11011', '10101'],
  '7': ['11011', '11100'],
  '8': ['11011', '01100'],
  '9': ['11011', '00011'],
  '0': ['11011', '01101'],
  '!': ['11011', '10110'],
  '$': ['11011', '10010'],
  ',': ['11011', '00110'],
  '.': ['11011', '00111'],
  ')': ['11011', '01001'],
  '&': ['11011', '01011'],
  ':': ['11011', '01110'],
  ';': ['11011', '01111'],
  '"': ['11011', '10001'],
  '?': ['11011', '10011'],
  '/': ['11011', '10111'],
  '-': ['11011', '11000'],
  '_': ['11011', '11000'],
  '–': ['11011', '11000'],
  '—': ['11011', '11000'],
  "'": ['11011', '11010'],
  '(': ['11011', '11110'],
}

function rand(min, max) {
  return min + Math.round(Math.random() * (max - min))
}

function updateBanner() {
  const banner = document.querySelector("#banner")
  banner.innerHTML = ''

  const bannerCode = document.createElement("div")

  const string = 'Jeremy Marquis'
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  string.split("").forEach(char => {
    const charCodes = codes[char.toUpperCase()]
    if (!charCodes) return
    codes[char.toUpperCase()].forEach(code => {
      const codeEl = document.createElement("div")
      code.split("").forEach(digit => {
        const digitEl = document.createElement("div")
        digitEl.classList.toggle("solid", parseInt(digit) === 1)
        digitEl.style.backgroundColor = `hsl(0, 0%, ${darkMode ? rand(20, 60) : rand(40, 80)}%)`
        codeEl.appendChild(digitEl)
      })
      bannerCode.appendChild(codeEl)
    })
  })

  while (banner.offsetWidth < window.innerWidth) {
    banner.appendChild(bannerCode.cloneNode(true))
    banner.appendChild(bannerCode.cloneNode(true))
  }
}

document.addEventListener("DOMContentLoaded", updateBanner)
window.addEventListener("resize", updateBanner)

document.addEventListener("DOMContentLoaded", () => {

  // prevent widows
  Array.prototype.slice.call(document.body.querySelectorAll('h1, h2')).forEach(function(block) {
    block.innerHTML = block.innerHTML.replace(/^([^<]|<[^>]+>)(.*)\s(\S+)$/, '$1$2&nbsp;$3');
  })
  Array.prototype.slice.call(document.body.querySelectorAll('p, h3')).forEach(function(block) {
    block.innerHTML = block.innerHTML.replace(/^([^<]|<[^>]+>)(.*)\s(\S+)$/, '$1$2&nbsp;$3').replace(/^([^<]|<[^>]+>)(.*)\s(\S+)$/, '$1$2&nbsp;$3');
  })
})

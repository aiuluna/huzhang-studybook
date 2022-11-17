const mytable = document.querySelector('#mytable')
const ro = new ResizeObserver((entries, observer) => {
  const table = entries[0].target;
  table.querySelectorAll('tr').forEach((row, idx) => {
    row.style.setProperty('--row-height', `${row.offsetHeight}px`)
  })
})

ro.observe(mytable)
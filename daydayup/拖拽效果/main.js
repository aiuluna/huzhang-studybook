const list = document.querySelector('.list');
let sourceNode = null;
const flip = new Flip(list, 0.5)

const onDragStart = e => {
  setTimeout(() => {
    e.target.classList.add('moving')
  }, 0);
  sourceNode = e.target;
  e.dataTransfer.effectAllowed = 'move'
}

list.addEventListener('dragstart', onDragStart);

list.ondragover = e => e.preventDefault();

list.ondragenter = e => {
  e.preventDefault()
  if (e.target === list || e.target === sourceNode) return;
  const children = Array.from(list.children);
  const sourceIndex = children.indexOf(sourceNode);
  const targetIndex = children.indexOf(e.target);

  if (sourceIndex > targetIndex) {
    list.insertBefore(sourceNode, e.target)
  } else {
    list.insertBefore(sourceNode, e.target.nextElementSibling)
  }
  flip.play()
}

list.ondragend = e => {
  sourceNode.classList.remove('moving')
}

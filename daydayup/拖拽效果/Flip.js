// const Flip = function(container, duration) {
//   const list = container;

// }

class Flip {
  container;
  duration;
  firstList = [];
  lastList = [];
  constructor(container, duration) {
    this.container = container;
    this.duration = duration || 0;
    this._first()
  }

  _first() {
    this.firstList = Array.from(this.container.children)
      .map(item => {
        return {
          x: item.offsetLeft,
          y: item.offsetTop,
          ele: item
        }
      });

    // // 选择目标节点
    // var target = this.container;
    // // 创建观察者对象
    // var observer = new MutationObserver(function (mutations) {
    //   mutations.forEach(function (mutation) {
    //     console.log(mutation);
    //   });
    // });
    // var config = { attributes: true, childList: true, characterData: true }
    // observer.observe(target, config);
  }

  _last() {
    this.lastList = Array.from(this.container.children)
      .map(item => {
        return {
          x: item.offsetLeft,
          y: item.offsetTop,
          ele: item
        }
      })
  }

  _invert() {
    this.firstList.forEach(first => {
      const last = this.lastList.find(_last => _last.ele === first.ele);
      if (first.x === last.x && first.y === last.y) return;
      const offsetX = first.x - last.x;
      const offsetY = first.y - last.y;

      first.ele.setAttribute('style', `transform: translate(${offsetX}px,${offsetY}px);`)
    })

  }

  play() {
    this._last()
    this._invert()

    Array.from(this.container.children).forEach(item => {
      setTimeout(() => {
        item.setAttribute('style', `transition: transform ${this.duration}s`)
      }, 0);

      setTimeout(() => {
        item.removeAttribute('style')
      }, this.duration * 1000);
    })



    this.firstList = this.lastList;
  }
}


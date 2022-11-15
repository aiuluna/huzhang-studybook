class Flip {
    isTranstion = false;
	container
	duration
	firstList = []
	lastList = []
	constructor(container, duration) {
		this.container = container
		this.duration = duration || 0
		this._first()
	}

	_first() {
		this.firstList = Array.from(this.container.children).map((item) => {
			return {
				x: item.offsetLeft,
				y: item.offsetTop,
				ele: item,
			}
		})
	}

	_last() {
		this.lastList = Array.from(this.container.children).map((item) => {
			return {
				x: item.offsetLeft,
				y: item.offsetTop,
				ele: item,
			}
		})
	}

	_invert() {
		this.firstList.forEach((first) => {
			const last = this.lastList.find((_last) => _last.ele === first.ele)
			if (first.x === last.x && first.y === last.y) return
			const offsetX = first.x - last.x
			const offsetY = first.y - last.y

            first.ele.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px)`;
            setTimeout(() => {
                first.ele.style.removeProperty('transform')
                first.ele.style.transition = `transform ${this.duration}s`
            }, 0)
            setTimeout(() => {
                first.ele.style.removeProperty('transition')
            }, this.duration * 1000)
		})
	}

	play() {
		this._last()
		this._invert()

		this.firstList = this.lastList
	}
}

class FlipDom {
    constructor(dom, duration = 0.5) {
        this.dom = dom;
        this.duration = typeof duration === 'number' ? `${duration}s` : duration;
        this.firstPosition = {
            x: null,
            y: null
        }
        this.isTranstion = false;
    }

    _transitionEndHandler = () => {
        this.isTranstion = false;
    }

    _getDomPosition() {
        const rect = this.dom.getBoundingClientRect();
        return {
          x: rect.left,
          y: rect.top,  
        };
      }

    _first = () => {
        this.firstPosition.x = this._getDomPosition().x;
        this.firstPosition.y = this._getDomPosition().y;
    }

    _last = () => {
        if (!this.isTranstion) {
            const lastPositon = this._getDomPosition();
            const offset = {
                x: this.firstPosition.x - lastPositon.x,
                y: this.firstPosition.y - lastPositon.y
            }

        }
    }


}

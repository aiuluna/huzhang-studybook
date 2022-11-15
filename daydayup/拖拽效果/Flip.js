class Flip {

    constructor(container, duration) {
        this.FlipDomList = Array.from(container.children).map(item => new FlipDom(item, duration));
        this.FlipDomList.map(it => it._first())

    }

    play() {
        let gs = this.FlipDomList.map(item => {
            const generator = item.play();
            return {
                generator,
                generatorResult: generator.next()
            }
        }).filter(g => !g.generatorResult.done)
        while (gs.length) {
            document.body.clientWidth;
            gs = gs.map(item => {
                item.generatorResult = item.generator.next();
                return item
            }).filter(g => !g.generatorResult.done)
        }

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
        this.dom.style.transform = 'none'
        this.dom.style.transition = 'none'
        this._first()
    }

    _getDomPosition = () => {
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
            this.dom.style.transition = 'none'
            this.lastPositon = this._getDomPosition();
            return true
        }
        return false
    }

    _invert = () => {
        const offset = {
            x: this.firstPosition.x - this.lastPositon.x,
            y: this.firstPosition.y - this.lastPositon.y
        }
        if (!offset.x && !offset.y) return false;
        this.dom.style.transform = `translateX(${offset.x}px) translateY(${offset.y}px)`;
        return true
    }

    *play() {
        if (this._last()) {
            if (this._invert()) {
                yield 'lastMoveToFirst'
                this.isTranstion = true;
            }
        }
        this.dom.style.transition = this.duration;
        this.dom.style.transform = 'none';
        this.dom.removeEventListener('transitionend', this._transitionEndHandler);
        this.dom.addEventListener('transitionend', this._transitionEndHandler);
    }


}

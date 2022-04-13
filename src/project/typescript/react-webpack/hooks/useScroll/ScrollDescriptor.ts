class ScrollDescriptor {
  private left: number = 0;
  private top: number = 0;
  private scrollHeight: number = 0;
  private offestHeight: number = 0;

  private scrollToBottomHandlers: Function[] = [];

  public onScrollToBottom(handler: Function) {
    this.scrollToBottomHandlers.push(handler);
    return () => this.scrollToBottomHandlers.filter((x) => x !== handler)
  }

  private triggerScrollToBottom() {
    this.scrollToBottomHandlers.forEach(h => h());
  }

  public update(
    left: number,
    top: number,
    offestHeight: number,
    scrollHeight: number
  ) {
    this.left = left;
    this.top = top;
    this.offestHeight = offestHeight;
    this.scrollHeight = scrollHeight;
    if (this.bottomReached()) {
      this.triggerScrollToBottom()
    }
  }

  public bottomReached() {
    return this.top + this.offestHeight >= this.scrollHeight
  }
}

export default ScrollDescriptor;
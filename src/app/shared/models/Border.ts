export class BorderSide {
    color: string = 'black';
    width: number = 1;
    style: string = 'dotted';
}

export class Border {
    left: BorderSide = new BorderSide();
    right: BorderSide = new BorderSide();
    top: BorderSide = new BorderSide();
    bottom: BorderSide = new BorderSide();

    getLeft(): string {
        return `${this.left.width}px ${this.left.style} ${this.left.color}`;
    }

    getRight(): string {
        return `${this.right.width}px ${this.right.style} ${this.right.color}`;
    }

    getTop(): string {
        return `${this.top.width}px ${this.top.style} ${this.top.color}`;
    }

    getBottom(): string {
        return `${this.bottom.width}px ${this.bottom.style} ${this.bottom.color}`;
    }
}
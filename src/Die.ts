export class Die {
    sides: string[];

    constructor(sides: string[]) {
        this.sides = sides;
    }

    static newDie() {
        return new Die([""]);
    }

    addSide(): void {
        this.sides.push("");
    }

    removeSide(index: number) {
        if (this.sides.length == 1) {
            this.sides[0] = "";
        } else {
            this.sides.splice(index, 1);
        }
    }

    roll(): string {
        let index = Math.floor(Math.random() * this.sides.length);

        return this.sides[index];
    }
}

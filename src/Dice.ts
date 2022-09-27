import { Roll } from './Roll';

export class Dice {
    static roll() {
        const technique = Dice.techniques[Math.floor(Math.random() * this.discs.length)];
        const disc = Dice.discs[Math.floor(Math.random() * this.discs.length)];

        return new Roll(technique, disc);
    }

    static techniques = ['Backhand', 'Forehand', 'Hyzer', 'Anhyzer', 'Roller', 'Wildcard'];
    static discs = ['Putter', 'Midrange', 'Driver', 'Understable', 'Overstable', 'Wildcard'];
}

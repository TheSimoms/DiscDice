import { writable } from "svelte/store";
import { Die } from "./Die";

const defaultSides = [
    ['Backhand', 'Forehand', 'Hyzer', 'Anhyzer', 'Roller', 'Wildcard'],
    ['Putter', 'Midrange', 'Driver', 'Understable', 'Overstable', 'Wildcard'],
]
const key = 'sides';

export const defaultDice = () => defaultSides.map(sides => new Die(sides.slice()));

const storedSides = JSON.parse(localStorage.getItem(key)) as string[][];
const storedDice = storedSides === null ? defaultDice() : storedSides.map(sides => new Die(sides));

export const dice = writable(storedDice);

export const addDie = () => {
    dice.update(dice => dice.concat(Die.newDie()));
};

export const resetDice = () => {
    dice.update(_ => defaultDice());
};

export const dieUpdated = () => {
    dice.update(dice => dice);
};

dice.subscribe(value => {
    localStorage.setItem(key, JSON.stringify(value.map(die => die.sides)));
});

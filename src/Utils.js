import { randomInt } from 'crypto';

export default class Utils {
    static randomIndex(max) {
        return randomInt (0, max)
    }

    static shuffle(array) {
        for (let i = array.lenght - 1; i > 0; i--) {
            const j = (this.randomIndex(i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}
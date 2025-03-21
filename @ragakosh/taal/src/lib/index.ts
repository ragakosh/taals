import type { Taal } from '../types';
import { taals } from '../taals';

function getTaals(): Taal[] {
    return taals;
}

function getTaalByName(name: string): Taal | undefined {
    const filteredTaal = taals.filter(taal => taal.name === name);
    if (filteredTaal.length) {
        return filteredTaal[0];
    }
    return;
}

function getTaalByBeats(beats: number): Taal[] {
    return taals.filter(taal => taal.beats === beats);
}

export {
    getTaals,
    getTaalByName,
    getTaalByBeats
}
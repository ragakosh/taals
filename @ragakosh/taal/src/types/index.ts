type Vibhag = {
    beat: number;  // Beat number in the cycle
    value: string; // Clap (X), Wave (0), or other markers (2, 3, etc.)
};

export type Taal = {
    name: string;       // Name of the taal (e.g., Teentaal, Dadra)
    beats: number;      // Total beats in the cycle
    vibhag: Vibhag[];   // Divisions of the taal cycle
    notes?: string[];    // Sequence of bols (syllables)
};
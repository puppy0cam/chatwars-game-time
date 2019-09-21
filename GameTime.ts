export default class GameTime extends Date {
    protected static readonly GAME_TIME_WEEKDAY_NAMES: readonly [string, string, string, string, string, string, string] = Object.freeze([
        String.fromCodePoint(115, 117, 110, 110, 251, 110, 116, 97, 103), // sunday
        String.fromCodePoint(109, 226, 110, 111, 116, 97, 103), // monday
        String.fromCodePoint(122, 105, 101, 115, 116, 97, 103), // tuesday
        String.fromCodePoint(109, 105, 116, 116, 97, 119, 101, 104, 104, 97), // wednesday
        String.fromCodePoint(106, 104, 111, 110, 97, 114, 101, 115, 116, 97, 103), // thursday
        String.fromCodePoint(102, 114, 238, 40, 106, 41, 97, 116, 97, 103), // friday
        String.fromCodePoint(115, 117, 110, 110, 251, 110, 97, 98, 97, 110, 100), // saturday
    ]) as any;
    protected static readonly GAME_TIME_MONTHS: readonly [string, string, string, string, string, string, string, string, string, string, string, string] = Object.freeze([
        "Wintar",
        "Hornung",
        "Lenzin",
        "Ostar",
        "Winni",
        "Brah",
        "Hewi",
        "Aran",
        "Witu",
        "Windume",
        "Herbist",
        "Hailag",
    ]) as any;
    protected static readonly GAME_TIME_OFFSET: number = NaN;
    protected static convertTrueTimestampToGameTimestamp(value: number): number {
        "use strict";
        return value * 3 - this.GAME_TIME_OFFSET;
    }
    protected static convertGameTimestampToTrueTimestamp(value: number): number {
        "use strict";
        return (value + this.GAME_TIME_OFFSET) / 3;
    }
    private internalGameDateObject!: Date;
    public constructor();
    public constructor(value: number | string | Date);
    public constructor(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number);
    public constructor() {
        "use strict";
        super(...arguments as unknown as [any?, any?, any?, any?, any?, any?, any?]);
        Object.defineProperty(this, "internalGameDateObject", {
            configurable: false,
            enumerable: false,
            value: new Date(),
            writable: true,
        });
        this.recalculateGameTimeValue();
    }
    public toGameString(): string {
        "use strict";
        const internalDate: Date = this.internalGameDateObject;
        if (isNaN(internalDate.valueOf())) {
            return "Invalid Date";
        }
        return `${(this.constructor as typeof GameTime).GAME_TIME_WEEKDAY_NAMES[internalDate.getUTCDay()]}, ${(this.constructor as typeof GameTime).GAME_TIME_MONTHS[internalDate.getUTCMonth()]} ${internalDate.getUTCDate().toString().padStart(2, "0")} ${internalDate.getUTCFullYear().toString().padStart(4, "0")} ${this.toGameTimeString()}`;
    }
    public toGameTimeString(): string {
        "use strict";
        const internalDate: Date = this.internalGameDateObject;
        if (isNaN(internalDate.valueOf())) {
            throw new RangeError("Invalid Date");
        }
        return `${internalDate.getUTCHours().toString().padStart(2, "0")}:${internalDate.getUTCMinutes().toString().padStart(2, "0")}:${internalDate.getUTCSeconds().toString().padStart(2, "0")} CWT`;
    }
    public setDate(date: number): number {
        "use strict";
        try {
            return super.setDate(date);
        } finally {
            this.recalculateGameTimeValue();
        }
    }
    public setFullYear(year: number, month?: number, date?: number): number {
        "use strict";
        try {
            return super.setFullYear(year, month, date);
        } finally {
            this.recalculateGameTimeValue();
        }
    }
    public setHours(hours: number, min?: number, sec?: number, ms?: number): number {
        "use strict";
        try {
            return super.setHours(hours, min, sec, ms);
        } finally {
            this.recalculateGameTimeValue();
        }
    }
    public setMilliseconds(ms: number): number {
        "use strict";
        try {
            return super.setMilliseconds(ms);
        } finally {
            this.recalculateGameTimeValue();
        }
    }
    public setMinutes(min: number, sec?: number, ms?: number): number {
        "use strict";
        try {
            return super.setMinutes(min, sec, ms);
        } finally {
            this.recalculateGameTimeValue();
        }
    }
    public setMonth(month: number, date?: number): number {
        "use strict";
        try {
            return super.setMonth(month, date);
        } finally {
            this.recalculateGameTimeValue();
        }
    }
    public setSeconds(sec: number, ms?: number): number {
        "use strict";
        try {
            return super.setSeconds(sec, ms);
        } finally {
            this.recalculateGameTimeValue();
        }
    }
    public setTime(time: number): number {
        "use strict";
        try {
            return super.setTime(time);
        } finally {
            this.recalculateGameTimeValue();
        }
    }
    public setUTCDate(date: number): number {
        "use strict";
        try {
            return super.setUTCDate(date);
        } finally {
            this.recalculateGameTimeValue();
        }
    }
    public setUTCFullYear(year: number, month?: number, date?: number): number {
        "use strict";
        try {
            return super.setUTCFullYear(year, month, date);
        } finally {
            this.recalculateGameTimeValue();
        }
    }
    public setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number {
        "use strict";
        try {
            return super.setUTCHours(hours, min, sec, ms);
        } finally {
            this.recalculateGameTimeValue();
        }
    }
    public setUTCMilliseconds(ms: number): number {
        "use strict";
        try {
            return super.setUTCMilliseconds(ms);
        } finally {
            this.recalculateGameTimeValue();
        }
    }
    public setUTCMinutes(min: number, sec?: number, ms?: number): number {
        "use strict";
        try {
            return super.setUTCMinutes(min, sec, ms);
        } finally {
            this.recalculateGameTimeValue();
        }
    }
    public setUTCMonth(month: number, date?: number): number {
        "use strict";
        try {
            return super.setUTCMonth(month, date);
        } finally {
            this.recalculateGameTimeValue();
        }
    }
    public setUTCSeconds(sec: number, ms?: number): number {
        "use strict";
        try {
            return super.setUTCSeconds(sec, ms);
        } finally {
            this.recalculateGameTimeValue();
        }
    }
    public setGameDate(date: number): number {
        "use strict";
        this.internalGameDateObject.setUTCDate(date);
        return this.copyInternalStateToMainState();
    }
    public setGameFullYear(year: number, month?: number, date?: number): number {
        "use strict";
        this.internalGameDateObject.setUTCFullYear(year, month, date);
        return this.copyInternalStateToMainState();
    }
    public setGameHours(hours: number, min?: number, sec?: number, ms?: number): number {
        "use strict";
        this.internalGameDateObject.setUTCHours(hours, min, sec, ms);
        return this.copyInternalStateToMainState();
    }
    public setGameMilliseconds(ms: number): number {
        "use strict";
        this.internalGameDateObject.setUTCMilliseconds(ms);
        return this.copyInternalStateToMainState();
    }
    public setGameMinutes(min: number, sec?: number, ms?: number): number {
        "use strict";
        this.internalGameDateObject.setUTCMinutes(min, sec, ms);
        return this.copyInternalStateToMainState();
    }
    public setGameMonth(month: number, date?: number): number {
        "use strict";
        this.internalGameDateObject.setUTCMonth(month, date);
        return this.copyInternalStateToMainState();
    }
    public setGameSeconds(sec: number, ms?: number): number {
        "use strict";
        this.internalGameDateObject.setUTCSeconds(sec, ms);
        return this.copyInternalStateToMainState();
    }
    public getGameSeconds(): number {
        "use strict";
        return this.internalGameDateObject.getUTCSeconds();
    }
    public getGameMonth(): number {
        "use strict";
        return this.internalGameDateObject.getUTCMonth();
    }
    public getGameMinutes(): number {
        "use strict";
        return this.internalGameDateObject.getUTCMinutes();
    }
    public getGameMilliseconds(): number {
        "use strict";
        return this.internalGameDateObject.getUTCMilliseconds();
    }
    public getGameHours(): number {
        "use strict";
        return this.internalGameDateObject.getUTCHours();
    }
    public getGameFullYear(): number {
        "use strict";
        return this.internalGameDateObject.getUTCFullYear();
    }
    public getGameDay(): number {
        "use strict";
        return this.internalGameDateObject.getUTCDay();
    }
    public getGameDate(): number {
        "use strict";
        return this.internalGameDateObject.getUTCDate();
    }
    private recalculateGameTimeValue(): number {
        "use strict";
        return this.internalGameDateObject.setTime((<typeof GameTime> this.constructor).convertTrueTimestampToGameTimestamp(this.valueOf()));
    }
    private copyInternalStateToMainState(): number {
        "use strict";
        return this.setTime((<typeof GameTime> this.constructor).convertGameTimestampToTrueTimestamp(this.internalGameDateObject.valueOf()));
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GameTime extends Date {
    constructor() {
        "use strict";
        super(...arguments);
        Object.defineProperty(this, "internalGameDateObject", {
            configurable: false,
            enumerable: false,
            value: new Date(),
            writable: true,
        });
        this.recalculateGameTimeValue();
    }
    static convertTrueTimestampToGameTimestamp(value) {
        "use strict";
        return value * 3 - this.GAME_TIME_OFFSET;
    }
    static convertGameTimestampToTrueTimestamp(value) {
        "use strict";
        return (value + this.GAME_TIME_OFFSET) / 3;
    }
    toGameString() {
        "use strict";
        const internalDate = this.internalGameDateObject;
        if (isNaN(internalDate.valueOf())) {
            return "Invalid Date";
        }
        return `${this.constructor.GAME_TIME_WEEKDAY_NAMES[internalDate.getUTCDay()]}, ${this.constructor.GAME_TIME_MONTHS[internalDate.getUTCMonth()]} ${internalDate.getUTCDate().toString().padStart(2, "0")} ${internalDate.getUTCFullYear().toString().padStart(4, "0")} ${this.toGameTimeString()}`;
    }
    toGameTimeString() {
        "use strict";
        const internalDate = this.internalGameDateObject;
        if (isNaN(internalDate.valueOf())) {
            throw new RangeError("Invalid Date");
        }
        return `${internalDate.getUTCHours().toString().padStart(2, "0")}:${internalDate.getUTCMinutes().toString().padStart(2, "0")}:${internalDate.getUTCSeconds().toString().padStart(2, "0")} CWT`;
    }
    setDate(date) {
        "use strict";
        try {
            return super.setDate(date);
        }
        finally {
            this.recalculateGameTimeValue();
        }
    }
    setFullYear(year, month, date) {
        "use strict";
        try {
            return super.setFullYear(year, month, date);
        }
        finally {
            this.recalculateGameTimeValue();
        }
    }
    setHours(hours, min, sec, ms) {
        "use strict";
        try {
            return super.setHours(hours, min, sec, ms);
        }
        finally {
            this.recalculateGameTimeValue();
        }
    }
    setMilliseconds(ms) {
        "use strict";
        try {
            return super.setMilliseconds(ms);
        }
        finally {
            this.recalculateGameTimeValue();
        }
    }
    setMinutes(min, sec, ms) {
        "use strict";
        try {
            return super.setMinutes(min, sec, ms);
        }
        finally {
            this.recalculateGameTimeValue();
        }
    }
    setMonth(month, date) {
        "use strict";
        try {
            return super.setMonth(month, date);
        }
        finally {
            this.recalculateGameTimeValue();
        }
    }
    setSeconds(sec, ms) {
        "use strict";
        try {
            return super.setSeconds(sec, ms);
        }
        finally {
            this.recalculateGameTimeValue();
        }
    }
    setTime(time) {
        "use strict";
        try {
            return super.setTime(time);
        }
        finally {
            this.recalculateGameTimeValue();
        }
    }
    setUTCDate(date) {
        "use strict";
        try {
            return super.setUTCDate(date);
        }
        finally {
            this.recalculateGameTimeValue();
        }
    }
    setUTCFullYear(year, month, date) {
        "use strict";
        try {
            return super.setUTCFullYear(year, month, date);
        }
        finally {
            this.recalculateGameTimeValue();
        }
    }
    setUTCHours(hours, min, sec, ms) {
        "use strict";
        try {
            return super.setUTCHours(hours, min, sec, ms);
        }
        finally {
            this.recalculateGameTimeValue();
        }
    }
    setUTCMilliseconds(ms) {
        "use strict";
        try {
            return super.setUTCMilliseconds(ms);
        }
        finally {
            this.recalculateGameTimeValue();
        }
    }
    setUTCMinutes(min, sec, ms) {
        "use strict";
        try {
            return super.setUTCMinutes(min, sec, ms);
        }
        finally {
            this.recalculateGameTimeValue();
        }
    }
    setUTCMonth(month, date) {
        "use strict";
        try {
            return super.setUTCMonth(month, date);
        }
        finally {
            this.recalculateGameTimeValue();
        }
    }
    setUTCSeconds(sec, ms) {
        "use strict";
        try {
            return super.setUTCSeconds(sec, ms);
        }
        finally {
            this.recalculateGameTimeValue();
        }
    }
    setGameDate(date) {
        "use strict";
        this.internalGameDateObject.setUTCDate(date);
        return this.copyInternalStateToMainState();
    }
    setGameFullYear(year, month, date) {
        "use strict";
        this.internalGameDateObject.setUTCFullYear(year, month, date);
        return this.copyInternalStateToMainState();
    }
    setGameHours(hours, min, sec, ms) {
        "use strict";
        this.internalGameDateObject.setUTCHours(hours, min, sec, ms);
        return this.copyInternalStateToMainState();
    }
    setGameMilliseconds(ms) {
        "use strict";
        this.internalGameDateObject.setUTCMilliseconds(ms);
        return this.copyInternalStateToMainState();
    }
    setGameMinutes(min, sec, ms) {
        "use strict";
        this.internalGameDateObject.setUTCMinutes(min, sec, ms);
        return this.copyInternalStateToMainState();
    }
    setGameMonth(month, date) {
        "use strict";
        this.internalGameDateObject.setUTCMonth(month, date);
        return this.copyInternalStateToMainState();
    }
    setGameSeconds(sec, ms) {
        "use strict";
        this.internalGameDateObject.setUTCSeconds(sec, ms);
        return this.copyInternalStateToMainState();
    }
    getGameSeconds() {
        "use strict";
        return this.internalGameDateObject.getUTCSeconds();
    }
    getGameMonth() {
        "use strict";
        return this.internalGameDateObject.getUTCMonth();
    }
    getGameMinutes() {
        "use strict";
        return this.internalGameDateObject.getUTCMinutes();
    }
    getGameMilliseconds() {
        "use strict";
        return this.internalGameDateObject.getUTCMilliseconds();
    }
    getGameHours() {
        "use strict";
        return this.internalGameDateObject.getUTCHours();
    }
    getGameFullYear() {
        "use strict";
        return this.internalGameDateObject.getUTCFullYear();
    }
    getGameDay() {
        "use strict";
        return this.internalGameDateObject.getUTCDay();
    }
    getGameDate() {
        "use strict";
        return this.internalGameDateObject.getUTCDate();
    }
    recalculateGameTimeValue() {
        "use strict";
        return this.internalGameDateObject.setTime(this.constructor.convertTrueTimestampToGameTimestamp(this.valueOf()));
    }
    copyInternalStateToMainState() {
        "use strict";
        return this.setTime(this.constructor.convertGameTimestampToTrueTimestamp(this.internalGameDateObject.valueOf()));
    }
}
exports.default = GameTime;
GameTime.GAME_TIME_WEEKDAY_NAMES = Object.freeze([
    String.fromCodePoint(115, 117, 110, 110, 251, 110, 116, 97, 103),
    String.fromCodePoint(109, 226, 110, 111, 116, 97, 103),
    String.fromCodePoint(122, 105, 101, 115, 116, 97, 103),
    String.fromCodePoint(109, 105, 116, 116, 97, 119, 101, 104, 104, 97),
    String.fromCodePoint(106, 104, 111, 110, 97, 114, 101, 115, 116, 97, 103),
    String.fromCodePoint(102, 114, 238, 40, 106, 41, 97, 116, 97, 103),
    String.fromCodePoint(115, 117, 110, 110, 251, 110, 97, 98, 97, 110, 100),
]);
GameTime.GAME_TIME_MONTHS = Object.freeze([
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
]);
GameTime.GAME_TIME_OFFSET = NaN;

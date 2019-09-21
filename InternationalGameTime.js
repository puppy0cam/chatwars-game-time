"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GameTime_1 = __importDefault(require("./GameTime"));
class InternationalGameTime extends GameTime_1.default {
}
exports.default = InternationalGameTime;
InternationalGameTime.GAME_TIME_OFFSET = 33281420544000;

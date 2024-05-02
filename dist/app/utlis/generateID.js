"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePID = void 0;
function generatePID() {
    // Generate a random number between 100000 and 999999
    const randomPID = Math.floor(Math.random() * 900000) + 100000;
    return randomPID;
}
exports.generatePID = generatePID;

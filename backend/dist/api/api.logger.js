"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpLog = void 0;
const chalk_1 = require("chalk");
const computeResponseTime = (startTime) => {
    const endTime = process.hrtime(startTime);
    return Math.round(endTime[0] * 1000 + endTime[1] / 1000000);
};
const httpLog = ({ service, method, url, startTime, status, statusText, }) => {
    const serviceName = chalk_1.blue(`[${service}] - `);
    const currentDate = new Date();
    const dateString = currentDate.getMonth() < 10
        ? `0${currentDate.toLocaleDateString()}`
        : currentDate.toLocaleDateString();
    const timeString = currentDate.toLocaleTimeString();
    const dateTimeString = [dateString, timeString].join(', ');
    const httpMethodString = chalk_1.yellow(`[${method.toUpperCase()}]`);
    const urlString = chalk_1.blue(url);
    let responseString;
    if (200 <= status && status <= 299) {
        responseString = chalk_1.green(`- Response: ${status} ${statusText}`);
    }
    else {
        responseString = chalk_1.red(`- Response: ${status} ${statusText}`);
    }
    const responseTimeString = chalk_1.yellow(`+${computeResponseTime(startTime)}ms`);
    console.log(serviceName +
        [
            dateTimeString,
            httpMethodString,
            urlString,
            responseString,
            responseTimeString,
        ].join(' '));
};
exports.httpLog = httpLog;
//# sourceMappingURL=api.logger.js.map
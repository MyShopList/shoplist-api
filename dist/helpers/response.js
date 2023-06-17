"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failureRes = exports.successRes = void 0;
const successRes = (message, data) => {
    return {
        success: true,
        message: message,
        data: data
    };
};
exports.successRes = successRes;
const failureRes = (message) => {
    return {
        success: false,
        message: message,
        data: {}
    };
};
exports.failureRes = failureRes;
//# sourceMappingURL=response.js.map
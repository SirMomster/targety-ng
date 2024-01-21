const base = require("../../jest.config.base.js");

module.exports = {
    ...base,
    transform: {
        "^.+\\.[jt]sx?$": "../../jest-preprocess.js",
    },
    name: "targety-ng-logger",
    roots: ["<rootDir>/src", "<rootDir>/__tests__"],
    displayName: "Targety Logger",
    setupFiles: ["./__tests__/testSetup.js"],
};

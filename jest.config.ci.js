const base = require("./jest.config.base.js");

module.exports = {
    ...base,
    projects: ["<rootDir>/packages/*/jest.config.js"],
    collectCoverage: false,
};

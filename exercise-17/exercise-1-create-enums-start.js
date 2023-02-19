"use strict";
/**
 * START: Follow the instructions below.
 */
exports.__esModule = true;
// The objects in the `countries` array use strings as the values of the
// `currency` properties.
// Complete this numeric enum so that it can be used instead of strings.
// Hint: Use the string values in the `currency` properties as the enum members.
var Currency;
(function (Currency) {
    Currency["Dollar"] = "Dollar";
    Currency["Euro"] = "Euro";
})(Currency || (Currency = {}));
// Replace the string values for the `currency` properties below with
var countries = [
    {
        name: "France",
        currency: Currency.Euro
    },
    {
        name: "United States of America",
        currency: Currency.Euro
    },
    {
        name: "Italy",
        currency: Currency.Euro
    },
    {
        name: "New Zealand",
        currency: Currency.Euro
    },
];
// Create a string enum named `LanguageStatus`. Use it to replace the
// string values for the `status` properties in the objects below.
var LanguageStatus;
(function (LanguageStatus) {
    LanguageStatus["Primary"] = "primary";
    LanguageStatus["Secondary"] = "secondary";
})(LanguageStatus || (LanguageStatus = {}));
var countryLanguages = [
    { language: "Spanish", status: LanguageStatus.Primary },
    { language: "English", status: LanguageStatus.Secondary },
];
'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = "amzn1.ask.skill.7b180522-436d-436d-ba97-e3d5a93fe45f";  // TODO replace with your app ID (OPTIONAL).

var languageStrings = {
    "en": {
        "translation": {
            "FACTS": [
                "Cabernet Sauvignon is actually a genetic crossing of red Cabernet Franc and white Sauvignon Blanc.",
                "The first bonded winery in California is Buena Vista Winery in Sonoma.",
                "Zinfandel is an American synonym for a grape originally from Croatia.",
                "Straccamyosis, the common yeast used for making bread, is also widely used in fermenting grapes.",
                "The most predominately planted grape in France is Merlot.",
                "Over 80% of all vines in Europe and America are planted on American rootstock to prevent a root louse infestation.",
                "The grape species known as Vitis Vinifera, which is most commonly used for making wine, was first discovered in the Caucasus Mountains in the country of Georgia.",
                "most red wine gets its color from grape skins in a process known as maceration.",
                "A grape vine, in the right conditions, can grow roots more than 25 feet deep.",
                "Each grape bunch, on average, will produce one glass of wine.",
                "Each grape vine, on average, will produce one-to-two bottles of wine.",
                "The first American Viticultural Area, or A.V.A., was established in the state of Missouri.",
                "California produces over 80% of all wine produced in the U.S.A.",
                "Cava is made using the same methods as in Champagne, but with different grapes: Macabayo, Parreeyada, and Cherello",
                "A tradional oak barrel, or barreeck, holds approximately 60 gallons or 25 cases of wine.",
                "A bottle of sparkling wine can contain 5 atmospheres of pressure, or the equivalent of a truck tire.",
                "In Australia, Shiraz is the preferred synonym for Syrah and named after the ancient Persian city from where it was first discovered.",
                "The Salta Province in Argentina is both the highest wine region in elevation and closest to the equator.",
                "Ice wine grapes are both harvested and crushed while frozen.",
                "Cote du Rhone wines are, by law, required to be fermented in concrete vessels.",
                "All five Bordeaux 'First growth' producers were classified in 1855, except one. Chateau Mouton-Rothschild was controversally added in 1972.",
                "All vitis Vinifera varietals genetically originate from an ancient grape called Casanova... which makes terrible wine."
            ],
            "SKILL_NAME" : "Wine Facts",
            "GET_FACT_MESSAGE" : "Here's your fact: ",
            "HELP_MESSAGE" : "You can say tell me a wine fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = "amzn1.ask.skill.7b180522-436d-436d-ba97-e3d5a93fe45f";
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        var factArr = this.t('FACTS');
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};

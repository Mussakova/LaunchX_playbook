const reader = require("./lib/utils/reader");
const explorers = reader.readJsonFile("explorers.json");
const explorerService = require('./lib/services/explorerSevice')
const fizzbuzzService = require('./lib/services/fizzbuzzService')

// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ, if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property trick and the score value. TODO

const explorersInNode = explorerService.filterByMission(explorers, "node")
const validationExplorerTrick = explorersInNode.forEach(element => {
    fizzbuzzService.applyValidationInExplorer(element)
})
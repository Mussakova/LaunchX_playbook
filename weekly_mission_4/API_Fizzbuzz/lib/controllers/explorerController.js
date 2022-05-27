const explorerService = require('../../../Refactoring/lib/services/explorerSevice')
const fizzbuzzService = require('../../../Refactoring/lib/services/fizzbuzzService')
const reader = require('../../../Refactoring/lib/utils/reader')

// const explorersReaderRq = require('../../../Refactoring/explorers.json') // Sintaxis soportada por Jest para testing
// let x = reader.readJsonFile('../../../Refactoring/explorers.json')
// console.log(x);
// console.log(explorersReaderRq);

class explorerController{
    static getExplorerByMission(mission){
        // const explorersReaderq = require('../../../Refactoring/explorers.json') // Sintaxis soportada por Jest para testing
        // const explorersReaderq = reader.readJsonFile('../../../Refactoring/package.json')//Sintaxis soportada solo por node
        const gettingExplorerByMission = explorerService.filterByMission(explorersReaderq, mission)
        return gettingExplorerByMission
    }

    static getExplorersUsernamesByMission(mission){
        const explorersReaderq = reader.readJsonFile('../../../Refactoring/explorers.json')
        // const explorersReaderq = require('../../../Refactoring/explorers.json')
        return explorerService.getExplorersUsernamesByMission(explorersReaderq, mission)
    }
    static getExplorersAmonutByMission(mission){
        const explorersReaderq = reader.readJsonFile('../../../Refactoring/explorers.json')
        // const explorersReaderq = require('../../../Refactoring/explorers.json')
        return explorerService.getAmountOfExplorersByMission(explorersReaderq, mission)
    }
}
// console.log(explorerController.getExplorerByMission('java'));
// console.log(explorerController.getExplorersAmonutByMission('java'));
// console.log(explorerController.getExplorersUsernamesByMission('java'));
module.exports = explorerController
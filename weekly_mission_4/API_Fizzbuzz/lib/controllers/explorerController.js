const explorerService = require('../../../Refactoring/lib/services/explorerSevice')
const fizzbuzzService = require('../../../Refactoring/lib/services/fizzbuzzService')
const reader = require('../../../Refactoring/lib/utils/reader')

class explorerController{
    static getExplorerByMission(mission){
        const explorersReaderq = require('../../../Refactoring/explorers.json')
        const gettingExplorerByMission = explorerService.filterByMission(explorersReaderq, mission)
        return gettingExplorerByMission
    }

    static getExplorersUsernamesByMission(mission){
        const explorersReaderq = require('../../../Refactoring/explorers.json')
        return explorerService.getExplorersUsernamesByMission(explorersReaderq, mission)
    }
    static getExplorersAmonutByMission(mission){
        const explorersReaderq = require('../../../Refactoring/explorers.json')
        return explorerService.getAmountOfExplorersByMission(explorersReaderq, mission)
    }
}
module.exports = explorerController
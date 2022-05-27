const explorerService = require('../../../Refactoring/lib/services/explorerSevice')
const fizzbuzzService = require('../../../Refactoring/lib/services/fizzbuzzService')
const explorersReaderq = require('../../../Refactoring/explorers.json')

class explorerController{
    static getExplorerByMission(mission){
        const gettingExplorerByMission = explorerService.filterByMission(explorersReaderq, mission)
        return gettingExplorerByMission
    }

    static getExplorersUsernamesByMission(mission){
        return explorerService.getExplorersUsernamesByMission(explorersReaderq, mission)
    }
    static getExplorersAmonutByMission(mission){
        return explorerService.getAmountOfExplorersByMission(explorersReaderq, mission)
    }
}
module.exports = explorerController
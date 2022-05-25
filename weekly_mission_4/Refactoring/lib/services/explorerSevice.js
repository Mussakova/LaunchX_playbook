class explorerService{
    static filterByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer)=> explorer.mission === mission)
        return explorerByMission
    }
    
    static getAmountOfExplorersByMission(explorers, mission){

    }

    static getExplorersUsernamesByMission(explorers, mission){

    }
}

module.exports = explorerService
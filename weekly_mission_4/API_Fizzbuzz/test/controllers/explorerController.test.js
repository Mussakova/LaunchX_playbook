const explorerService = require("../../../Refactoring/lib/services/explorerSevice")
const explorers = require('../../../Refactoring/explorers.json')
const explorerController = require("../../lib/controllers/explorerController")

// const x = require("../../../Refactoring/lib/utils/reader")
// console.log(x.readJsonFile(('../../../Refactoring/explorers.json')));

// const testGetExplorersUsernamesByMission = explorerController.getExplorersUsernamesByMission('node')
// console.log(testGetExplorersUsernamesByMission);
// const testgetExplorersAmonutByMission = explorerController.getExplorersAmonutByMission('node')
// console.log(testgetExplorersAmonutByMission);
// const testgetExplorerByMission = explorerController.getExplorerByMission('node')
// console.log(testgetExplorerByMission);

describe('Pruebas del Explorer Controller',()=>{
    test('1. Probando getExplorerByMission', ()=>{
        const testgetExplorerByMission = explorerController.getExplorerByMission('node')
        expect(testgetExplorerByMission[1].mission).toBe('node')
    }),
    test('2. Probando getExplorersUsernamesByMission', ()=>{
            const testGetExplorersUsernamesByMission = explorerController.getExplorersUsernamesByMission('node')
            expect(testGetExplorersUsernamesByMission[1]).toMatch(/ajolonauta/)
        }),
    test('3. Probando getExplorersAmonutByMission', ()=>{
            const testgetExplorersAmonutByMission = explorerController.getExplorersAmonutByMission('node')
            expect(testgetExplorersAmonutByMission).toBe(10)
        })
})
// const { assert, expect } = require("chai")
// const { deployments, ethers, network } = require("hardhat")
// const { TASK_COMPILE_SOLIDITY_EMIT_ARTIFACTS } = require("hardhat/builtin-tasks/task-names")
// const { isCallTrace } = require("hardhat/internal/hardhat-network/stack-traces/message-trace")
// const { developmentChains, networkConfig } = require("../../helper-hardhat-config")

// developmentChains.includes(network.name)
//     ? describe.skip
//     : describe("Raffle staging tests", async function () {
//           let raffle, raffleEntranceFee, deployer

//           beforeEach(async function () {
//               deployer = (await getNamedAccounts()).deployer
//               raffle = await ethers.getContract("Raffle", deployer)
//               raffleEntranceFee = await raffle.getEntranceFee()
//           })

//           describe("fulfillRandomWords", function () {
//               it("works with chainlink keepers and chainlink VRF, we get a random winner", async function () {
//                   // enter the raffle
//                   console.log("Setting up test...")
//                   const startingTimeStamp = await raffle.getLatestTimeStamp()
//                   const accounts = await ethers.getSigners()
//                   console.log("Setting up Listener...")
//                   await new Promise(async (resolve, reject) => {
//                       //setup listener, before entering raffle in case blockchain moves waay too fast
//                       raffle.once("WinnerPicked", async () => {
//                           console.log("WinnerPicked, event fired!")
//                           try {
//                               const recentWinner = await raffle.getRecentWinner()
//                               const raffleState = await raffle.getRaffleState()
//                               const winnnerEndingBalance = await accounts[0].getBalance()
//                               const endingTimeStamp = await raffle.getLatestTimeStamp()
//                               //asserts
//                               await expect(raffle.getPlayers(0)).to.be.reverted
//                               assert.equal(recentWinner.toString, accounts[0].address)
//                               assert.equal(raffleState, 0)
//                               assert.equal(
//                                   winnnerEndingBalance.toString(),
//                                   winnerStartingBalance.add(raffleEntranceFee).toString()
//                               )
//                               assert.equal(endingTimeStamp > startingTimeStamp)
//                               resolve()
//                           } catch (error) {
//                               console.log(error)
//                               reject(error)
//                           }
//                       })
//                       // await enter raffle
//                       console.log("Entering Raffle...")
//                       await raffle.enterRaffle({ value: raffleEntranceFee })
//                       console.log("entered raffle")
//                       const winnerStartingBalance = await accounts[0].getBalance()
//                   })
//               })
//           })
//       })

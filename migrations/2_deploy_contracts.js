var Certification = artifacts.require("./Certification.sol");
var Institution = artifacts.require("./Institution.sol");

module.exports = async function(deployer) {
  // deployer.deploy(Certification);

  // Deploy Institution Contract
  await deployer.deploy(Institution, {gas: 6721975})
  const institution = await Institution.deployed()

  // Deploy Certification Contract
  await deployer.deploy(Certification, institution.address)
  const certification = await Certification.deployed()
};

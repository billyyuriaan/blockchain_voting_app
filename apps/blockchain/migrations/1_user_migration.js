var User = artifacts.require("User");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(User);
};

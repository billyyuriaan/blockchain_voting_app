// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract User {
  address private user;

    // event for EVM logging
    event UserSet(address indexed oldUser, address indexed newUser);

    // modifier to check if caller is owner
    modifier isOwner() {
        // If the first argument of 'require' evaluates to 'false', execution terminates and all
        // changes to the state and to Ether balances are reverted.
        // This used to consume all gas in old EVM versions, but not anymore.
        // It is often a good idea to use 'require' to check if functions are called correctly.
        // As a second argument, you can also provide an explanation about what went wrong.
        require(msg.sender == user, "Caller is not owner");
        _;
    }

    constructor() {
        user = msg.sender; // 'msg.sender' is sender of current call, contract deployer for a constructor
        emit UserSet(address(0), user);
    }

    function changeOwner(address newUser) public isOwner {
        emit UserSet(user, newUser);
        user = newUser;
    }
    
    function getUser() external view returns (address) {
        return user;
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

/**
 * This is an access control role for entities that may spend tokens
 */
abstract contract SpenderRole {
  using EnumerableSet for EnumerableSet.AddressSet;

  event SpenderAdded(address indexed account);
  event SpenderRemoved(address indexed account);

  EnumerableSet.AddressSet private _spenders;

  constructor() {
    _addSpender(msg.sender);
  }

  modifier onlySpender() {
    require(isSpender(msg.sender));
    _;
  }

  function isSpender(address account) public view returns (bool) {
    return _spenders.contains(account);
  }

  function addSpender(address account) public onlySpender {
    _addSpender(account);
  }

  function renounceSpender() public {
    _removeSpender(msg.sender);
  }

  function _addSpender(address account) internal {
    _spenders.add(account);
    emit SpenderAdded(account);
  }

  function _removeSpender(address account) internal {
    _spenders.remove(account);
    emit SpenderRemoved(account);
  }
}

/**
 * @dev ERC20 spender logic
 */
abstract contract ERC20Spendable is ERC20, SpenderRole {
  /**
   * @dev Function to mint tokens
   * @param from The address that will spend the tokens
   * @param value The amount of tokens to spend
   * @return A boolean that indicates if the operation was successful
   */
  function spend(
    address from,
    uint256 value
  )
    public
    onlySpender
    returns (bool)
  {
    _burn(from, value);
    return true;
  }
}

contract ToadToken is ERC20, ERC20Spendable {

    constructor() ERC20("ToadToken", "TOAD"){
        _mint(msg.sender, 1000000000000000000*10**6);
    }

    function mintCoins(address account, uint256 amount) public {
        _mint(account, amount);
    }
}
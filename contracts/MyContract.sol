pragma solidity ^0.4.4;

contract MyContract {
    string m_name;

    constructor(string name) public {
        m_name = name;
    }

    function getName() public view returns (string){
        return m_name;
    }
}
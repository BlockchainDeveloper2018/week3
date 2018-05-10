pragma solidity ^0.4.4;

contract MyContract {
    string m_name;

    constructor(string name) public {
        m_name = name;
    }

    function modifyName(string new_name) public payable {
        m_name = new_name;
    }

    function getName() public view returns (string){
        return m_name;
    }
}
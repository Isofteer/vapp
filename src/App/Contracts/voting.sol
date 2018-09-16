pragma solidity ^0.4.18;

contract  VotingApp_01
{
    
      address public chairperson;
      
constructor () public 
         {
           chairperson = msg.sender;
           CreateUser(chairperson,'Super','Admin',1);
           
         }
    
         struct User {
            bytes32 firstName;
            bytes32 surname;
            uint privilage;
        }
        
         address [] public UserAccounts;
         
         mapping (address => User) Users;
         
     function CreateUser   (address _address,bytes32 _firstName,bytes32 _surname, uint _privilage) public   {
         
          var user = Users[_address];
              user.firstName = _firstName;
              user.surname   = _surname;
              user.privilage = _privilage;
         
             UserAccounts.push(_address);
     }
     
     
     function GetUsers   () public view returns (address [],bytes32 [],bytes32 [],uint[])   {
         
         address[]  memory _address = new address[](UserAccounts.length);
         bytes32 [] memory _firstName = new bytes32[](UserAccounts.length);
         bytes32 [] memory _surname = new bytes32[](UserAccounts.length);
         uint [] memory    _privilages = new uint[](UserAccounts.length);
         
          for (uint i = 0; i < UserAccounts.length; i++) 
          {
            User storage _user = Users[UserAccounts[i]];
            _address[i] = UserAccounts[i];
            _firstName[i] = _user.firstName;
            _surname[i] = _user.surname;
            _privilages[i] = _user.privilage;
        }
        
        return (_address, _firstName,_surname,_privilages);
         
     }
     function Login (address _address, bytes32 _password) public view returns  (bytes32 ,bytes32,uint){
     
         return (Users[_address].firstName,Users[_address].surname,Users[_address].privilage);
     
     }
}
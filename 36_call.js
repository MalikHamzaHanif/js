function setUserName(username){
this.username=username;
}


function getUserData(username,age,id){
    // setUserName(username); //we will not get username in our getuserdata with this b/c aftere execution its context get removed
    setUserName.call(this,username); //to hold the referense 
    this.age=age;

    this.id=id;
}


console.log(new getUserData("hamza",34,4555));

function setUserName(username){
this.username=username;
}


function getUserData(username,age,id){
    // setUserName(username);
    setUserName.call(this,username);
    this.age=age;

    this.id=id;
}


console.log(new getUserData("hamza",34,4555));

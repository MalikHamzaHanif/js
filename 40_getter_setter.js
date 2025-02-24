class Animal{
    constructor(type,legs){
        this.type=type;
        this._legs=legs;
    }

    get legs(){
        return this._legs;
    }
    set legs(leg){
        this._legs=leg;
    }
}

const cat=new Animal("Animal",4)
console.log(cat.legs);
cat.legs=8;
console.log(cat.legs);


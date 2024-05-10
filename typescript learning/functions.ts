function addTwo(num:number):number{
    return num +2;
    // return "hello"
}
addTwo(5);

function getUpper(val : string){
    return val.toUpperCase();

}

getUpper("Hello");

function signUpUser ( user:string, email:string, isPaid:boolean){

}
signUpUser("Hello", "eg@gmail.com", true);

let loginUser =(name:string,email:string,isPaid:boolean = false)=>{

}
loginUser("Hello", "email");

function getValue (myVal : number){
    if (myVal > 5) {
        return true;
    }else{
        return "200 OK";
    }
}

const getHello = (s:string):string=>{
return "Hello";
}

const heros = ["thor","spiderman", "superman"];

heros.map((hero):string=>{
    return `hero is ${hero}`;
})

export{}
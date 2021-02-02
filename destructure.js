const person = {
    name: 'Jack William',
    age : 17,
    job: 'facebooker',
    gfName : 'Ema Watson',
    address : 'Kochu Khet',
    phone :'01711555555',
    frends :['Tom hanks', 'tom cruise','ed sheren']
}
//destructure koretese 
const {phone, gfName, address,salary } = person;//access object property
 //const gfName = person.gfName;
// const phone = person.phone;


const complexObject = {
    name:'fsdsdf',
    info:{
        address:'kola bagan',
        leader :'Tiger Leader'
    }
}
const {leader} = complexObject.info;
console.log(leader);
// console.log(gfName, phone,salary, address);
// console.log(gfName, phone,salary, address);
// console.log(gfName, phone);
// console.log(gfName, phone);

const friends =['sakib khan', 'arman khan', 'Salman khan', 'sharukh khan'];

const [chotoFriend, nextFriend, ...resfriends] = friends; //get ascending order array element
console.log(chotoFriend,nextFriend);
console.log(resfriends);
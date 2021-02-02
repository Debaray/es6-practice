//... means spread element

const ages = [12,14,16,13,17];
const ages2 = [15,16,12];
const ages3 = [25,36,22,29];
const allAges = ages.concat(ages2).concat([5555]).concat(ages3);

//const allAges2 = [ages, ages2,5555, ages3];
const allAges2 = [...ages, ...ages2,5555, ...ages3];//concat multiple arrays
console.log(allAges);
console.log(allAges2);

const business = 650;
const minister = 450;
const socid = 250;

const takaPoisa = [650,450,250,1000];
//const maximum = Math.max(business,minister,socid);
const maximum = Math.max(...takaPoisa);
console.log(maximum);
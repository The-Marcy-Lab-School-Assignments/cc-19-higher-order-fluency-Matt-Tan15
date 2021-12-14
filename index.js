//write your code here
const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:22}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:21}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:21},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:21}];

//question 1
const averageAge = (arr) => {
    const ages = arr.reduce((a,b) => a + b.age, 0);
    return Math.round(ages / arr.length);
};

// console.log(averageAge(alumni));

//question 2
const bananaBread = (arr) => {
   return arr.map(alums => ({
       name : alums.name,
       job: alums.job,
       language : alums.language,
       age: alums.age,
       bananaBread : `${alums.name} got bananaBread at ${alums.job}`
   }));
};

// console.log(bananaBread(alumni));

//question 3
const ninetiesBabies = (arr) => {
    return arr.filter(person => person.age > 21);
};

// console.log(ninetiesBabies(alumni));

//question 4
const addSchool = (arr) => {
    return arr.map(alums => ({
       name : alums.name,
       job: alums.job,
       language : alums.language,
       age: alums.age,
       school : "The Marcy Lab School"
   }));
};

// console.log(addSchool(alumni));

//question 5
const allUseJavaScript = (arr) => {
    return arr.every(person => person.language === "JavaScript");
};

// console.log(allUseJavaScript(alumni));

const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin']

//question 6
const noVowel = (arr) => arr.map(word => word.replace(/[aeiou]/gi,'x'));
// console.log(noVowel(animals));

//question 7
const onlyVowelA = (arr) => arr.filter(word => word.includes('a'));
// console.log(onlyVowelA(animals));

//question 8
const longerThanSeven = (arr) => arr.some(word => word.length > 7);
// console.log(longerThanSeven(animals));

//question 9
const allFour = (arr) => arr.every(word => word.length === 4)
// console.log(allFour(animals));

//question 10
const concatStrings = (arr) => arr.join(" ");
// console.log(concatStrings(animals));
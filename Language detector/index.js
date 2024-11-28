const langs=require('langs')
const franc=require('franc')
// const color=require('color')

const input=process.argv[2];
const code=franc(input)
//console.log(code)
if(code==='und')
    console.log("Sorry can not guess")
else{
    const lang=langs.where("3",code);
    //console.log(lang)
    console.log(`The guessed language is ${lang.name}`)
}
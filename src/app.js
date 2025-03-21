

//Domain name generator
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'viernes', 'skynet'];
let extensions = ["com", "es", "net"];

for (let first of pronoun){
  for (let second of adj){
    for (let third of noun){
      for (let dot of extensions){

        if (dot == third.slice(third.length - dot.length,third.length)){
          console.log(first+second+third.slice(0,third.length - dot.length) +"."+dot);
        }else
        {
          console.log(first+second+third+"."+dot);
        }
      }
    }
  }
}


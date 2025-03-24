

//Domain name generator
let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'viernes', 'skynet'];
let extensions = ["com", "es", "net"];

for (let pronoun of pronouns){
  for (let adj of adjs){
    for (let noun of nouns){
      for (let extension of extensions){

        if (extension == noun.slice(noun.length - extension.length,noun.length)){
          console.log(pronoun+adj+noun.slice(0,noun.length - extension.length) +"."+extension);
        }else
        {
          console.log(pronoun+adj+noun+"."+extension);
        }
      }
    }
  }
}


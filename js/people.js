const contentName = require('./names.js')
const contentHobby = require('./hobbies.js')

function people (){
    const fullName = contentName('Alessandro', 'Frisone')
    const fullHobbies = contentHobby('Calcio', 'Nuoto', 'Scacchi')
    return {
        fullName,
        fullHobbies
    };
}
people()
const peopleElm = people()
console.log(peopleElm)
function scuberGreetingForFeet(someValue){
  // Write your code here!
  let result
  if (someValue <= 400){
    result = 'This one is on me!'
  }
  else if (someValue <= 2000 ){
    result = 'That will be twenty bucks.'
  }
  else if (someValue <= 2500 ){
    result = 'I will gladly take your thirty bucks.'
  }
  else if (someValue > 2500 ){
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(someCity){
  // Write your code here!
let  city = someCity === 'NYC' ? 'Ok, sounds good.' : 'No go.'
return city
}

function switchOnCharmFromTip(someTip){
  // Write your code here!
  let tip;
  switch (someTip) {
    case 'generous':
      tip = 'Thank you so much.'
      break;
    case 'not as generous':
      tip = 'Thank you.'
      break;
  
    default:
      tip = 'Bye.'
      break;
  }
  return tip
}
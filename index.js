function scuberGreetingForFeet(){
  function scuberGreetingForFeet(feet){
    if (feet<=400) {
      return 'This one is on me!';
    }
    if (feet >2500) {
      return 'No can do.';
    } else if (feet >=2000) {
      return 'I will gladly take your thirty bucks.';
    }
  }
function ternaryCheckCity(){
  function ternaryCheckCity(city){
    return city === 'NYC'?'Ok, sounds good.' :'No go.'
  }
}
function switchOnCharmFromTip(){
  function switchOnCharmFromTip(tip){
    switch(tip){
      case 'generous':
        return 'Thank yo so much.'
      case 'not so geenrous':
        return 'Thank you.'
      default:
        return 'Bye'
    }
  }
}
let home = 0
let away = 0



function reset(){
  console.log('did it work?')
}

// function Home(){
//   home ++
//   if(home >= 8){
//     return alert('You Win')
//   }
//   console.log(home)
// }

function Away(){
  away ++
  if(away >= 8){
    return alert('You Win')
  }
  console.log(away)
}

function baskets(){
  home ++
  document.getElementById("baskets").textContent = home.toString();
  if (home >=8){
    return alert('You Win')
  }
}

function baskets2(){
  away ++
  document.getElementById("baskets2").textContent = away.toString();
  if (away >=8){
    return alert ('You Win')
  }
}
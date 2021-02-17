'use strict';
let score=0;
let yourname=prompt ('enter your name');
function printGreeting(nome)
{
  alert('Welcome'+' '+ nome);
}
printGreeting (yourname);

let loveswim = prompt('Do i love swimming?y/yes').toLowerCase();
//console.log(loveswim);

const swimFunction = function (swim) {
  loveswim = swim.toLowerCase();

  while ((loveswim!=='yes' && loveswim!=='y') && (loveswim!=='n'&& loveswim!=='no')&&loveswim==='') {
    //console.log('invalid answer')
    alert('invalid answer');
    loveswim=prompt('Do i love swimming?y/yes');
  }

  if(loveswim==='y'|| loveswim==='yes')
  {
  //console.log('hell yeaa')
    alert('hell yeaa');
    score++;
    console.log(score);
  }
  else
  {
    if(loveswim==='n' || loveswim==='no')
      alert('wrong answer');
  }

};

swimFunction(loveswim);



let dive = prompt('Have i ever dive? y/yes').toLowerCase();
//console.log(dive);

const diive=function (question2)
{
  dive=question2.toLowerCase();

  while ((dive!=='yes' && dive!=='y') && (dive!=='n'&& dive!=='no')&&dive==='') {
  //console.log('invalid answer')

    alert('invalid answer');
    dive=prompt('Have i ever dive?y/yes');
  }

  if (dive==='no' || dive==='n') {
    alert('never in my life');
    score++;
    console.log(score);
  } else {
    if (dive==='yes' || dive ==='y')
      alert('wrong answer');
  }

};

diive(dive);

let likedive = prompt('Do i like diving?y/yes').toLowerCase();
//console.log(likedive);

const liikedive=function(question3){
  likedive=question3.toLowerCase();

  while ((likedive!=='yes' && likedive!=='y') && (likedive!=='n'&& likedive!=='no')&& likedive==='') {
    //console.log('invalid answer')
    alert('invalid answer');
    likedive=prompt('Do i like diving?y/yes');
  }

  if (likedive==='no'|| likedive==='n') {
    alert('yes i dont like diving');
    score++;
    console.log(score);
  } else {
    if(likedive==='y'||likedive==='yes')
      alert('you dont know me well!!');
  }

};
liikedive(likedive);


let divesuit = prompt('Have i ever wore a diving suit?y/yes').toLowerCase();
//console.log(divesuit);
const divee=function(question4)
{
  divesuit=question4.toLowerCase();
  while ((divesuit!=='yes' && divesuit!=='y') && (divesuit!=='n'&& divesuit!=='no')&& divesuit==='') {
    //console.log('invalid answer')
    alert('invalid answer');
    divesuit=prompt('Have i ever wore a diving suit?y/yes').toLowerCase;
  }

  if (divesuit==='no'||divesuit==='n') {
    alert('haha! tricky question. nooo?');
  } else {
    if(divesuit==='y'||divesuit==='yes')
      alert('comfiest thing ever');
    score++;
    console.log(score);
  }

};
divee(divesuit);


let Coral = prompt('Do i like Coral?y/yes').toLowerCase();
//console.log(Coral);

const cooral=function(question5)
{
  Coral=question5.toLowerCase();
  while ((Coral!=='yes' && Coral!=='y') && (Coral!=='n'&& Coral!=='no')&& Coral==='') {
    //console.log('invalid answer')
    alert('invalid answer');
    Coral=prompt('Do i like Coral?y/yes').toLowerCase();
  }
  if (Coral==='no'|| Coral==='n') {
    alert('why i would not like them');
  } else {
    if(Coral==='yes'||Coral==='y')
      alert('yess, it is full of colors');
    score++;
    console.log(score);
  }

};
cooral(Coral);

let Age = prompt('How old i am?');
const myage = function(question6)
{
  Age=question6.toLowerCase();

  for(let i=0; i<3 ; i++)

    if(Number(Age)===25)
    {
      alert('yes i am');
      score++;
      console.log(score);
      break;
      //console.log(Age);
    }
    else
    {
      if (Number(Age)>25){
        alert('too high');
        Age=prompt('How old i am?');
      }
      if(Number(Age)<25)
      { alert('too low');
        Age=prompt('How old i am?');
      }
    }

};
myage(Age);

alert('i am 25');

let arr=['mansaf','mlokheyeh','msakhan'];
alert('mansaf mlokheyeh msakhan');
let dish=prompt('what is my favourite dish from this list ');
const food= function(question7)
{
  dish=question7.toLowerCase();
  for(let i=0;i<5;i++){
    if (dish===arr[0]) {
      alert('who doesnt love mansaf!!');
      score++;
      console.log(score);
      break;
    } else {
      dish=prompt ('what is my favourite dish from this list ');
    }
  }

};
food(dish);
console.log('your score is-->',score,'out of 7');
alert('your score is-->'+score+'out of 7');

function bye(nime)
{
  alert('goodbye'+' '+ nime);
}
bye (yourname);

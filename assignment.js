//github.com/MariamChowdhury/assignment03
//first problem
function kilometerToMeter(kilometer){
 var meter= 1000*kilometer;
 return meter;
}
var result=kilometerToMeter(7);
if(result>0){
  console.log(result);
}
else{
  console.log("Invalid Input!");
}
//second problem
function budgetCalculator(watch,mobile,laptop){
  var watchPrice=50*watch;
  var mobilePrice=100*mobile;
  var laptopPrice=500*laptop;
  var total=watchPrice+mobilePrice+laptopPrice;
  return total;
}
var totalPrice=budgetCalculator(1,1,1);
console.log(totalPrice);
//third problem
function hotelCost(days)
{var fare=0;
  if (days<=10){
    fare=days*100;  
  }
  else if(days<=20){
    var firstTenDays=10*100;
    var remaining=days-10;
    var secondTenDays=remaining*80;
    fare=firstTenDays+secondTenDays;
  }
  else{
    var firstTenDays=10*100;
    var secondTenDays=10*80;
    var remaining=days-20;
    var restDays=remaining*50;
    fare=firstTenDays+secondTenDays+restDays;
  }
  return fare;
}
var count=hotelCost(15);
if (count>0){
  console.log(count);
}
else{
  console.log("Invalid Input!");
}
// fourth problem
function megaFriend(name)
  {
    var highest = name[0].length;
    var answer =   name[0];
    for (var i = 1; i < name.length; i++) {
        var max= name[i].length;
        if (max> highest) {
            answer = name[i];
            highest= max;
        }
    }
    return answer;
}
var highestString=megaFriend(["asif", "faizur", "jesi"]);
console.log(highestString);

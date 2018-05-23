//task1
"use strict"
function count()
{
    var text = document.getElementById("countText").value;
    var regex = /\d+\.\d+|[+*/-]|\d+/gim;

    var arrMatch = text.match(regex); // array filled matches
    var res = +arrMatch[0];
    console.table(arrMatch);


    arrMatch.forEach((element,i,arrMatch) => {
        switch(element)
        {
            case "+": res += +arrMatch[i+1];break;
            case "-": res -= +arrMatch[i+1];break;
            case "*": res *= +arrMatch[i+1];break;
            case "/": res /= +arrMatch[i+1];break;
            case "=": break;
        }
    });
    alert(res);
}

//task2
function deleteRepeats()
{
  var text = document.getElementById("delete").value;
  var regex = /[^\s.?,;:!]+/gi;
  var arrMatch = text.match(regex);
  var firstWord ="";
  var result = text;

  if(arrMatch == null) { alert(result); }
  firstWord = arrMatch[0];

  for(var j=0; j<firstWord.length; j++) {
    var searchChar = new RegExp(firstWord[j], "i");
    var count = 0;
    for(var i=0; i<arrMatch.length; i++) {
      if(searchChar.test(arrMatch[i])) {
        count++;
      }
    }

    if(count === arrMatch.length) {
      result = result.replace(new RegExp(firstWord[j], "gi"), "");
    }
  }
  alert(result)
}

//task3

function DateParse()
{
  var year = document.getElementById('year').value;
  var month = document.getElementById('day').value;
  var day = document.getElementById('month').value;
  var hour = document.getElementById('hour').value;
  var minute = document.getElementById('min').value;
  var second = document.getElementById('sec').value;
  var mask = document.getElementById('mask').value;
  

  //var date = new Date(year,month,day,hour,minute,second);
  //console.log(month);

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];


  var masks =
  {
    yyyy : year,
    yy : year.substring(year.length/2,year.length),
    MMMM : monthNames[new Date(year,month,day).getMonth()] ,
    MMM : new Date(year,month,day).toString().split(' ')[1],
    MM : month,
    M : month[1],
    dd : day,
    d : day[1],
    HH: new Date(year + "-" + month + "-" + day + " " + hour + ":" + minute  + " PM").getHours(),
    H : new Date(year + "-" + month + "-" + day + " " + hour + ":" + minute  + " PM").getHours()%10,
    hh :new Date(year + "-" + month + "-" + day + " " + hour + ":" + minute  + " AM").getHours() ,
    h : new Date(year + "-" + month + "-" + day + " " + hour + ":" + minute  + " AM").getHours()%10 ,
    mm : minute,
    m : minute[1],
    ss : second,
    s : second[1]
  }

  var res = mask;

  if(res.indexOf("MMMM")!=-1 || res.indexOf("MMM")!=-1) 
    {
    res = res.replace(/MMMM/g, masks.MMMM);
    res = res.replace(/MMM/g, masks.MMM);
    }
  if(res.indexOf("MM")!=-1 || res.indexOf("M")!=-1) 
    {
      res = res.replace(/MM/g,masks.MM);
      res = res.replace(/M[\s\W]/g, masks.M);
    }

  res = res.replace(/yyyy/g,masks.yyyy);
  res = res.replace(/yy/g,masks.yy);
  res = res.replace(/dd/g,masks.dd);
  res = res.replace(/d/g,masks.d);
  res = res.replace(/HH/g,masks.HH);
  res = res.replace(/H/g,masks.H);
  res = res.replace(/hh/g,masks.hh);
  res = res.replace(/h/g,masks.h);
  res= res.replace(/mm/g,masks.mm);
  res= res.replace(/m/g,masks.m);
  res = res.replace(/ss/g,masks.ss);
  res = res.replace(/s/g,masks.s);
  alert(res);
}
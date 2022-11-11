//<----------------------------Cách 1------------------------------->
// var date = new Date();

// var year = date.toLocaleString("default",{year: "numeric"})
// var month = date.toLocaleString("default",{month: "2-digit"})
// var day = date.toLocaleString("default",{day: "2-digit"})
   
// var formatteddate = day+"/"+month+"/"+year
// console.log(formatteddate);

// <--------------------------------Cách 2-------------------------------->

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10)
{
dd="0"+dd;
}

if(mm<10)
{
mm="0"+mm;
}
today = mm+"-"+dd+"-"+yyyy;
console.log(today);
today = dd+"/"+mm+"/"+yyyy;
console.log(today);


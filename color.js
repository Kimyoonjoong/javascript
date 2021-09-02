var Links={
  setcolor:function color(color){
  //  var alist=document.querySelectorAll('a');
  //  i=0;
  //  while(i<alist.length){
  //    alist[i].style.color=color;
  //    i++;
  //  }
  $('a').css('color',color);
    }
  }
var Body={
setcolor:function (color){
//document.querySelector('body').style.color=color;
$('body').css('color',color);
},
setBackgroundcolor:function (color){
//document.querySelector('body').style.backgroundColor=color;
$('body').css('backgroundColor',color);
}
}
function nightdayHander(self){

  if(self.value==='night'){
  Body.setBackgroundcolor('black');
  Body.setcolor('white');
  self.value='day';

  Links.setcolor('powderblue');
  }
  else{
    Body.setBackgroundcolor('white');
    Body.setcolor('black');
    self.value='night';

    Links.setcolor('blue');
  }
}

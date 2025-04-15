var container=document.getElementsByClassName('container');
var kuang=container[0].getElementsByClassName('kuang');
var xiaohe=match[0].getElementsByClassName('xiaohe');
var xiaohe1=match[0].getElementsByClassName('xiaohe1');
var xiaohe2=match[0].getElementsByClassName('xiaohe2');
function show1(){
xiaohe1[0].style.display="none";
xiaohe[0].style.display="block";
xiaohe2[0].style.display="none";
}
function show2(){
xiaohe[0].style.display="none";
xiaohe1[0].style.display="block";
xiaohe2[0].style.display="none";
}
function show3(){
xiaohe[0]. style.display="none";
xiaohe2[0].style.display="block";
xiaohe1[0].style.display="none";
}
var img=['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpeg'];
let x=0;
//let y=img.length-1;

function mnr() {
x=x+1;
document.im.src=img[x];
if(x==img.length-1){
x=-1;
}
return x;
}
y=mnr();
function mntr() {
y=y-1;
document.im.src=img[y];
if(y==0){
y=img.length;
}


}



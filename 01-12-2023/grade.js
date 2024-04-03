let total_num=75;
let grade;
if(total_num>90){
    grade='A+';
}else if(total_num>80 && total_num<90){
    grade='A';
}else if(total_num>70 && total_num<80){
    grade='B'
}else if(total_num>60 && total_num<70){
    grade='c'
}else{
    grade='D'
}
console.log(grade)
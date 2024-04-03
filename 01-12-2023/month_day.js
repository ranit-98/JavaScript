function noOfDay(month){
    let day;
    if(month==='jan'){
        day=31;
    }else if(month==='feb'){
        day=28;
    }else if(month==='mar'){
        day=31;
    }else if(month==='apr'){
        day=30;
    }else if(month==='may'){
        day=31;
    }else if(month==='jun'){
        day=30;
    }else if(month==='jul'){
        day=31;
    }else if(month==='aug'){
        day=31;
    }else if(month==='sep'){
        day=30;
    }else if(month==='oct'){
        day=31;
    }else if(month==='nov'){
        day=30;
    }else{
        day=31;
    }
    console.log(month+" has "+ day+" days")
}

let month='feb'
noOfDay(month)
function isLeap(year) {
    if(year%4!=0){
        return false;
    }
    else if(year%4 == 0 && year%100!=0){
        return true;
    }
    else if(year%4 == 0 && year%100==0 && year%400==0){
        return true;
    }
    return false;
}

(isLeap(2000)==true) ? "Leap year." : "Not leap year.";

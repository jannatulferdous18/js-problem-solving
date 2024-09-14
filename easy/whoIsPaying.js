function whosPaying(nameArr) {
    var name = nameArr[(Math.floor(Math.random() * nameArr.length))];
    console.log(name + " is going to buy lunch today!");
}

nameArr = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
whosPaying(nameArr);

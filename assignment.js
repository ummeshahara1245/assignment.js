// https://github.com/ummeshahara1245/assignment.js

// kilometerToMeter start
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(10);
// console.log(result);
// kilometerToMeter end

// budgetCalculator start
function budgetCalculator(watch, mobile, laptop) {
    var total = watch + mobile + laptop;
    return total;
}
var totalBudget = budgetCalculator((2 * 50), (3 * 100), (2 * 500));
// console.log(totalBudget);

//   budgetCalculator end


// hotelCost start
function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    }
    else if (day <= 20) {
        var first10 = 10 * 100;
        var remaining = day - 10;
        var second20 = remaining * 80;
        cost = first10 + second20;
    }
    else {
        var first10 = 10 * 100;
        var second20 = 10 * 80;
        var remaining = day - 20;
        var third30 = remaining * 50;
        cost = first10 + second20 + third30;
    }
    return cost;
}
var count = hotelCost(22);
// console.log(count);
// hotelCost end

// megaFriend start
function megaFriends(friendsName) {
    var max = friendsName[0].length;
    friendsName.map(v => max = Math.max(max, v.length));
    result = friendsName.filter(v => v.length == max);
    return result;
}

// console.log(megaFriends(['Sadaf', 'Sahara', 'Ummaysahara','Samreen','Parleen']));

 // megaFriend end



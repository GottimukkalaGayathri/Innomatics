function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (pin !== enteredPin) return "Incorrect PIN";
    if (amount > balance) return "Insufficient Funds";
    if (amount % 100 !== 0) return "Enter amount in multiples of 100";
    return `Withdrawal successful. New balance: $${balance - amount}`;
}

function calculateFinalAmount(orderAmount) {
    let discount = orderAmount > 1000 ? 0.2 : orderAmount >= 500 ? 0.1 : 0;
    let discountedPrice = orderAmount - (orderAmount * discount);
    let shipping = discountedPrice > 50 ? 0 : 10;
    return discountedPrice + shipping;
}

function calculateGrade(marks, attendance) {
    if (attendance > 90) marks += 5;
    return marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : marks >= 60 ? "D" : "F";
}

function trafficLightControl(density) {
    return density === "Heavy Traffic" ? 60 : density === "Moderate Traffic" ? 40 : 20;
}
function calculateTicketPrice(age, showTime) {
    let price = 12;
    if (showTime < 17) price *= 0.8;
    if (age > 60) price *= 0.7;
    if (age < 12) price *= 0.6;
    return price;
}

function isEligibleForJob(age, experience, qualification) {
    return age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree";
}

function applyCoupon(orderAmount, couponCode) {
    if (couponCode === "DISCOUNT10" && orderAmount > 500) return orderAmount * 0.9;
    if (couponCode === "FREESHIP" && orderAmount > 200) return orderAmount;
    return orderAmount;
}

function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (planType === "VIP" || (wantsTrainer && wantsDietPlan)) return "VIP - $80/month";
    if (planType === "Premium" || wantsTrainer) return "Premium - $50/month";
    return "Basic - $20/month";
}

function calculateElectricityBill(units, timeOfDay) {
    let rate = units > 300 ? 3 : units > 100 ? 4 : 5;
    if (timeOfDay >= 20 || timeOfDay < 8) rate *= 1.1;
    return units * rate;
}

function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let price = 300 + (classType === "Business" ? 200 : classType === "First" ? 500 : 0);
    if (luggageWeight > 20) price += Math.ceil((luggageWeight - 20) / 10) * 50;
    if (isStudent) price *= 0.85;
    if (isSenior) price *= 0.9;
    return price;
}
console.log(atmWithdrawal(5000, 1000, 1234, 1234));
console.log(calculateFinalAmount(1200));  
console.log(calculateGrade(85, 95)); 
console.log(trafficLightControl("Moderate Traffic"));  
console.log(calculateTicketPrice(65, 16));  
console.log(isEligibleForJob(30, 3, "Bachelor's Degree"));  
console.log(applyCoupon(600, "DISCOUNT10")); 
console.log(choosePlan("Basic", true, false));
console.log(calculateElectricityBill(250, 22));  
console.log(calculateFlightFare("Economy", 25, true, false));  

const calculateDays = (start, end) => {
    const dateOne = new Date(start);
    const dateTwo = new Date(end);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.ceil(time / (1000 * 60 * 60 * 24));
    return days;
}

const interestCalculate = (amount, interest, difference) => {
    const final = (amount * interest * 0.01 / 365 * difference).toFixed(2);
    return final;
}

const calculation = () => {
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;
    const amount = document.getElementById("amount").value;
    const interest = document.getElementById("interest").value;
    const Difference = calculateDays(start, end);
    const result = interestCalculate(amount, interest, Difference);
    document.getElementById("output").innerHTML=result;
}
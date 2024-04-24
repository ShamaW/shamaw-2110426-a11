const dayOfTheWeek = (date = new Date()) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return days[date.getDay()];
}

const monthOfTheYear = (date = new Date()) => {
    const months = ['January', 'Februrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return months[date.getMonth()];
}

try {
    document.getElementById('day').innerText = dayOfTheWeek();
    document.getElementById('month').innerText = monthOfTheYear();
} catch(err) {}

// 
exports.dayOfTheWeek = dayOfTheWeek;
exports.monthOfTheYear = monthOfTheYear;

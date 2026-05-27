function calculateAttendance() {

    let total = parseInt(document.getElementById("total").value);
    let attended = parseInt(document.getElementById("attended").value);

    if (isNaN(total) || isNaN(attended)) {
        alert("Please enter all fields");
        return;
    }

    if (total <= 0 || attended > total || attended < 0) {
        alert("Invalid input");
        return;
    }

    let percentage = ((attended / total) * 100).toFixed(2);

    let status = "";
    if (percentage >= 75) status = "✅ Safe";
    else if (percentage >= 60) status = "⚠️ Warning";
    else status = "❌ Low";

    document.getElementById("result").innerHTML =
        `Attendance: ${percentage}% <br> ${status}`;
}
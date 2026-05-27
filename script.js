function calculateAttendance() {

    let total = parseInt(document.getElementById("total").value);
    let attended = parseInt(document.getElementById("attended").value);

    // Validation
    if (isNaN(total) || isNaN(attended)) {
        alert("Please enter all fields");
        return;
    }

    if (total <= 0) {
        alert("Total classes must be greater than 0");
        return;
    }

    if (attended < 0 || attended > total) {
        alert("Invalid attended classes");
        return;
    }

    // Calculation
    let percentage = ((attended / total) * 100).toFixed(2);

    // Status
    let status = "";
    let color = "";

    if (percentage >= 75) {
        status = "✅ Safe";
        color = "green";
    } 
    else if (percentage >= 60) {
        status = "⚠️ Warning";
        color = "orange";
    } 
    else {
        status = "❌ Low";
        color = "red";
    }

    // Output
    document.getElementById("result").innerHTML = `
        Attendance: ${percentage}% <br>
        Status: <span style="color:${color}">${status}</span>
    `;
}
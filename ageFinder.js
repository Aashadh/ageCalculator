document.addEventListener("DOMContentLoaded", () => {
  const calculateAge = () => {
    // Retrieve user input values
    const userYear = parseInt(document.getElementById("userYear").value);
    const userMonth = parseInt(document.getElementById("userMonth").value);
    const userDate = parseInt(document.getElementById("userDate").value);
    const futureYear = parseInt(document.getElementById("futureYear").value);

    // Current date variables
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-based month

    // Calculate current age
    let ageYear = currentYear - userYear;
    let ageMonth = currentMonth - userMonth;
    let ageDays = new Date().getDate() - userDate;

    // Adjust age calculation if current date is before birth date
    if (ageDays < 0) {
      ageMonth--;
      ageDays += 30; // Assuming 30 days per month for simplicity
    }
    if (ageMonth < 0) {
      ageYear--;
      ageMonth += 12;
    }

    // Display current age
    const currentAgeText = `Your current age is ${ageYear} years, ${ageMonth} months, and ${ageDays} days.`;
    document.getElementById("ageResult").textContent = currentAgeText;

    // Calculate and display future age
    if (!isNaN(futureYear)) {
      let futureAge = futureYear - userYear;
      document.getElementById(
        "futureAge"
      ).textContent = `Your age in ${futureYear} will be ${futureAge} years.`;
    }
  };

  // Add input event listeners to trigger age calculation
  const inputs = document.querySelectorAll(
    "#userYear, #userMonth, #userDate, #futureYear"
  );
  inputs.forEach((input) => {
    input.addEventListener("input", calculateAge);
  });

  // Initial age calculation if inputs have default values
  calculateAge();
});

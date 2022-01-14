const today = new Date;
const [year, month, day] = [today.getFullYear(), today.getMonth(), today.getDate()];

const ageInYears = () => {
  return (month === 0 && day < 28) ? year - 1988 : year - 1987;
}

document.getElementById("age-in-years").innerHTML = ageInYears();
document.getElementById("engineer-in-years").innerHTML = year - 2019;

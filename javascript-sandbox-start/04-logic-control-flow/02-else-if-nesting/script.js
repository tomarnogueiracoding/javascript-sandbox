const d = new Date(9, 11, 2026, 8, 0, 0);
const hour = d.getHours();

// if (hour < 12) {
//   console.log('Good morning');
// } else if (hour < 18) {
//   console.log('Good Afternoon');
// } else {
//   console.log('Good Night');
// }

// Nested If

if (hour < 12) {
  console.log('Good morning');
  if (hour === 6) {
    console.log('Wake up!');
  }
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

if (hour >= 8 && hour < 17) {
  console.log('It is work time');
}

if (hour === 6 || hour === 20) {
  console.log('Time to brush your teeth');
}

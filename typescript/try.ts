// // const t = "2024-09-17T00:00:00Z";

// // console.log(t.substring(0, 10));
// type Data = {
//   time: string;
//   speed: number;
//   did: string;
//   lat: number;
//   lng: number;
//   accel_x: number;
//   accel_y: number;
//   accel_z: number;
// };
// type ChartDataPoint = {
//   time: string;
//   avgSpeed: number;
// };

// const HOURS_TO_AGGREGATE = 2;
// const MINUTES_PER_HOUR = 60;
// const MILLISECONDS_PER_MINUTE = 60000;

// function generateTestData(
//   startDate: Date,
//   hours: number,
//   pointsPerMinute: number
// ): Data[] {
//   const data: Data[] = [];
//   const millisecondsPerMinute = 60000;

//   for (let i = 0; i < hours * 60; i++) {
//     for (let j = 0; j < pointsPerMinute; j++) {
//       const time = new Date(
//         startDate.getTime() +
//           i * millisecondsPerMinute +
//           j * (millisecondsPerMinute / pointsPerMinute)
//       );
//       data.push({
//         time: time.toISOString(),
//         speed: Math.random() * 100,
//         did: "990901",
//         lat: 22.281208 + (Math.random() - 0.5) * 0.001,
//         lng: 113.93967 + (Math.random() - 0.5) * 0.001,
//         accel_x: (Math.random() - 0.5) * 2,
//         accel_y: (Math.random() - 0.5) * 2,
//         accel_z: -9.78 + (Math.random() - 0.5),
//       });
//     }
//   }

//   return data;
// }
// const startDate = new Date("2024-09-03T00:00:00Z");
// const testData = generateTestData(startDate, 4, 20);

// const aggregateData = (data: Data[], startHour: number): ChartDataPoint[] => {
//   if (startHour < 0 || startHour > 23) {
//     throw new Error("Invalid start hour. Must be between 0 and 23.");
//   }

//   if (data.length === 0) {
//     return [];
//   }

//   const totalMinutes = HOURS_TO_AGGREGATE * MINUTES_PER_HOUR;

//   const now = new Date(data[0].time);
//   const y = now.getUTCFullYear();
//   const m = now.getUTCMonth();
//   const d = now.getUTCDate();
//   const startDate = new Date(Date.UTC(y, m, d, startHour));
//   const endDate = new Date(
//     startDate.getTime() + HOURS_TO_AGGREGATE * 60 * 60 * 1000
//   );

//   const filteredData = data.filter((d) => {
//     const date = new Date(d.time);
//     return date >= startDate && date < endDate;
//   });
//   const speedSums = new Array(totalMinutes).fill(0);
//   const counts = new Array(totalMinutes).fill(0);

//   filteredData.forEach((d) => {
//     const date = new Date(d.time);
//     const minutesSinceStart = Math.floor(
//       (date.getTime() - startDate.getTime()) / MILLISECONDS_PER_MINUTE
//     );

//     if (minutesSinceStart >= 0 && minutesSinceStart < totalMinutes) {
//       speedSums[minutesSinceStart] += d.speed;
//       counts[minutesSinceStart]++;
//     }
//   });

//   return Array.from({ length: totalMinutes }, (_, i) => {
//     const currentDate = new Date(
//       startDate.getTime() + i * MILLISECONDS_PER_MINUTE
//     );
//     return {
//       time: `${currentDate.getHours().toString().padStart(2, "0")}:${currentDate
//         .getMinutes()
//         .toString()
//         .padStart(2, "0")}`,
//       avgSpeed: counts[i]
//         ? parseFloat((speedSums[i] / counts[i]).toFixed(3))
//         : 0,
//     };
//   });
// };

// const d = aggregateData(testData, 4);
// console.log(d.length);

// Create a Date object
const d = new Date("2024-09-17T00:00:00Z");

console.log("1. Basic Date Information:");
console.log(`   Original Date: ${d}`);
console.log(`   ISO String: ${d.toISOString()}`);
console.log(`   Date String: ${d.toDateString()}`);
console.log(`   Time String: ${d.toTimeString()}`);
console.log(`   UTC String: ${d.toUTCString()}`);

console.log("\n2. Get Methods (Local Time):");
console.log(`   Full Year: ${d.getFullYear()}`);
console.log(`   Month: ${d.getMonth()} (0-11, 0 is January)`);
console.log(`   Date: ${d.getDate()}`);
console.log(`   Day: ${d.getDay()} (0-6, 0 is Sunday)`);
console.log(`   Hours: ${d.getHours()}`);
console.log(`   Minutes: ${d.getMinutes()}`);
console.log(`   Seconds: ${d.getSeconds()}`);
console.log(`   Milliseconds: ${d.getMilliseconds()}`);

console.log("\n3. Get Methods (UTC):");
console.log(`   UTC Full Year: ${d.getUTCFullYear()}`);
console.log(`   UTC Month: ${d.getUTCMonth()}`);
console.log(`   UTC Date: ${d.getUTCDate()}`);
console.log(`   UTC Day: ${d.getUTCDay()}`);
console.log(`   UTC Hours: ${d.getUTCHours()}`);
console.log(`   UTC Minutes: ${d.getUTCMinutes()}`);
console.log(`   UTC Seconds: ${d.getUTCSeconds()}`);
console.log(`   UTC Milliseconds: ${d.getUTCMilliseconds()}`);

console.log("\n4. Timestamp:");
console.log(`   Timestamp: ${d.getTime()}`);

console.log("\n5. Modifying the Date:");
d.setFullYear(2025);
console.log(`   After setFullYear(2025): ${d}`);
d.setMonth(0); // January
console.log(`   After setMonth(0): ${d}`);

console.log("\n6. Creating Dates in Different Ways:");
console.log(`   New Date(): ${new Date()}`);
console.log(`   Date.now(): ${Date.now()}`);
console.log(`   New Date("2024-09-17"): ${new Date("2024-09-17")}`);
console.log(`   New Date(2024, 8, 17): ${new Date(2024, 8, 17)}`);

console.log("\n7. Comparing Dates:");
const d1 = new Date("2024-09-17");
const d2 = new Date("2024-09-18");
console.log(`   d1 < d2: ${d1 < d2}`);
console.log(`   d1 > d2: ${d1 > d2}`);
console.log(`   d1 === d2: ${d1.getTime() === d2.getTime()}`);

console.log("\n8. Date Arithmetic:");
const tomorrow = new Date(d1);
tomorrow.setDate(d1.getDate() + 1);
console.log(`   Tomorrow: ${tomorrow}`);

console.log("\n9. Parsing Dates:");
console.log(`   Date.parse("2024-09-17"): ${Date.parse("2024-09-17")}`);

console.log("\n10. Getting Current Date Components:");
const now = new Date();
console.log(`   Current Year: ${now.getFullYear()}`);
console.log(`   Current Month: ${now.getMonth() + 1}`);
console.log(`   Current Date: ${now.getDate()}`);

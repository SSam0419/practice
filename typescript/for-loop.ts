let count = 1;

for (let i = 0; i < count; i++) {
  ++count;
  console.log({ i, count });
  if (count == 10) break;
}

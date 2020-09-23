for (let j = 0; j < process.argv.length - 2; j++) {
  let num = process.argv[j + 2];
  console.log(num)
  if (num >= 0) {
    setTimeout(() => process.stdout.write('\x07'), num * 1000);
  }
}
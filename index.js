let i,
  a = 100;
for (i = 1; i <= a; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log('amazon');
  } else if (i % 3 == 0) {
    console.log('google');
  } else if (i % 5 == 0) {
    console.log('facebook');
  }
}

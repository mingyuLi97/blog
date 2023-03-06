function bigNumAdd(a, b) {
  const arr = [];
  let num1 = String(a);
  let num2 = String(b);
  let n1 = num1.length - 1;
  let n2 = num2.length - 1;
  let carry = 0;
  while (n1 >= 0 || n2 >= 0 || carry) {
    let _a = 0;
    let _b = 0;
    if (n1 >= 0) {
      _a = +num1[n1--];
    }
    if (n2 >= 0) {
      _b = +num2[n2--];
    }
    const total = _a + _b + carry;

    if (total >= 10) {
      arr.unshift(total % 10);
      carry = 1;
    } else {
      arr.unshift(total);
      carry = 0;
    }
    console.log(arr);
  }

  return arr.join('');
}

console.log(
  bigNumAdd(
    '3782647863278468012934670',
    '23784678091370408971329048718239749083'
  )
);

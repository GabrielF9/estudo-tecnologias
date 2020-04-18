function bin2dec_v1(bin) {
  let decimal = 0;
  let reversed_bin = bin.split('').reverse().join('');

  for (let i = 0; i < bin.length; i++) {
    decimal += reversed_bin[i] * 2 ** i;
  }

  return decimal;
}

function bin2dec_v2(bin) {
  return bin.split('').reverse().map((b, i) => {
    return b === "1" ? 2 ** i : 0;
  }).reduce((a, b) => a + b, 0);
}

let bin = process.argv[2]
console.log(bin2dec_v1(bin))
console.log(bin2dec_v2(bin))
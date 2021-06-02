const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const toBinary = (dec) => parseInt(dec).toString(2);

const ipToBinaryNotation = (ip) => {
  const decSplit = ip.split(".");
  const binSplit = decSplit.map(
    (octet) => "00000000".slice(0, 8 - toBinary(octet).length) + toBinary(octet)
  );
  return binSplit.join(".");
};
const getIpClass = (binIp) => {
  const firstOctet = binIp.split(".")[0];
  if (firstOctet.slice(0, 1) === "0") return "A";
  if (firstOctet.slice(0, 2) === "10") return "B";
  if (firstOctet.slice(0, 3) === "110") return "C";
  if (firstOctet.slice(0, 4) === "1110") return "D";
  if (firstOctet.slice(0, 4) === "1111") return "E";
};

// __main__
readline.question(`What's your ip? -> `, (ip) => {
  const binIp = ipToBinaryNotation(ip);
  console.log(`\n Your IP in Binary Notation = ${binIp}`);
  console.log(`\n Your IP Class = ${getIpClass(binIp)}`);
  readline.close();
});

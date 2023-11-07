const crypto = require("crypto");

function createHashedPw(pw) {
  return crypto.createHash("sha512").update(pw).digest("base64");
}

console.log("pw 1234: ", createHashedPw("1234"));
console.log("pw 1235: ", createHashedPw("1235"));

const input = "1234";
const dbPw =
  "1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w==";

console.log("compare result: ", createHashedPw(input) == dbPw);

function createHashedPwWithSalt(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  console.log("salt:", salt);
  const iterations = 100;
  const keylen = 64;
  const digest = "sha512";
  return crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest)
    .toString("base64");
  // 암호화할 문자열, salt, 반복횟수, 키의 길이, 알고리즘
}

function comparePw(pw, salt) {
  const iterations = 100;
  const keylen = 64;
  const digest = "sha512";
  return crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, digest)
    .toString("base64");
}

const dbPwSalt =
  "PFM97dH/oJZk0sDS6qNJJvXZQdf2i9wYgShVFm+xBRWY+9LZQzSWQf6dvWbZEx7DWpmvGg6ClIjtiihWDwX3Og==";
const dbSalt = "3UVPDacUXVGzkivYv4HeIg==";
console.log("compare result with salt: ", comparePw(input, dbSalt) == dbPwSalt);

// console.log("pw 1234 with salt: ", createHashedPwWithSalt("1234"));

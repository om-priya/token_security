const crypto = require("crypto-js");

const encrypt_token = (token) => {
  const encrypted = crypto.AES.encrypt(
    token,
    process.env.ENCRYPT_TOKEN_KEY
  ).toString();
  return encrypted;
};

const decrypt_token = (encryptedToken) => {
  const decrypted = crypto.AES.decrypt(
    encryptedToken,
    process.env.ENCRYPT_TOKEN_KEY
  ).toString(crypto.enc.Utf8);
  return decrypted;
};

module.exports = { encrypt_token, decrypt_token };

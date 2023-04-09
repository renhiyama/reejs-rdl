// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// Copyright Joyent, Inc. and Node.js contributors. All rights reserved. MIT license.

import { ERR_CRYPTO_FIPS_FORCED } from "node:./internal/errors.ts";
import { crypto as constants } from "node:./internal_binding/constants.ts";
import { getOptionValue } from "node:./internal/options.ts";
import {
  getFipsCrypto,
  setFipsCrypto,
  timingSafeEqual,
} from "node:./internal_binding/crypto.ts";
import {
  checkPrime,
  checkPrimeSync,
  generatePrime,
  generatePrimeSync,
  randomBytes,
  randomFill,
  randomFillSync,
  randomInt,
  randomUUID,
} from "node:./internal/crypto/random.ts";







import { pbkdf2, pbkdf2Sync } from "node:./internal/crypto/pbkdf2.ts";




import { scrypt, scryptSync } from "node:./internal/crypto/scrypt.ts";
import { hkdf, hkdfSync } from "node:./internal/crypto/hkdf.ts";
import {
  generateKey,
  generateKeyPair,
  generateKeyPairSync,
  generateKeySync,
} from "node:./internal/crypto/keygen.ts";





















import {
  createPrivateKey,
  createPublicKey,
  createSecretKey,
  KeyObject,
} from "node:./internal/crypto/keys.ts";







import {
  DiffieHellman,
  diffieHellman,
  DiffieHellmanGroup,
  ECDH,
} from "node:./internal/crypto/diffiehellman.ts";
import {
  Cipheriv,
  Decipheriv,
  getCipherInfo,
  privateDecrypt,
  privateEncrypt,
  publicDecrypt,
  publicEncrypt,
} from "node:./internal/crypto/cipher.ts";






























import {
  Sign,
  signOneShot,
  Verify,
  verifyOneShot,
} from "node:./internal/crypto/sig.ts";









import { createHash, Hash, Hmac } from "node:./internal/crypto/hash.ts";
import { X509Certificate } from "node:./internal/crypto/x509.ts";




import {
  getCiphers,
  getCurves,
  getHashes,
  secureHeapUsed,
  setEngine,
} from "node:./internal/crypto/util.ts";

import Certificate from "node:./internal/crypto/certificate.ts";


const webcrypto = globalThis.crypto;
const fipsForced = getOptionValue("--force-fips");

























function createCipheriv(
  cipher,
  key,
  iv,
  options,
) {
  return new Cipheriv(cipher, key, iv, options);
}



















function createDecipheriv(
  algorithm,
  key,
  iv,
  options,
) {
  return new Decipheriv(algorithm, key, iv, options);
}





















function createDiffieHellman(
  sizeOrKey,
  keyEncoding,
  generator,
  generatorEncoding,
) {
  return new DiffieHellman(
    sizeOrKey,
    keyEncoding,
    generator,
    generatorEncoding,
  );
}

function createDiffieHellmanGroup(name) {
  return new DiffieHellmanGroup(name);
}

function createECDH(curve) {
  return new ECDH(curve);
}

function createHmac(
  hmac,
  key,
  options,
) {
  return Hmac(hmac, key, options);
}

function createSign(algorithm, options) {
  return new Sign(algorithm, options);
}

function createVerify(algorithm, options) {
  return new Verify(algorithm, options);
}

function setFipsForced(val) {
  if (val) {
    return;
  }

  throw new ERR_CRYPTO_FIPS_FORCED();
}

function getFipsForced() {
  return 1;
}

Object.defineProperty(constants, "defaultCipherList", {
  value: getOptionValue("--tls-cipher-list"),
});

const getDiffieHellman = createDiffieHellmanGroup;

const getFips = fipsForced ? getFipsForced : getFipsCrypto;
const setFips = fipsForced ? setFipsForced : setFipsCrypto;

const sign = signOneShot;
const verify = verifyOneShot;

export default {
  Certificate,
  checkPrime,
  checkPrimeSync,
  Cipheriv,
  constants,
  createCipheriv,
  createDecipheriv,
  createDiffieHellman,
  createDiffieHellmanGroup,
  createECDH,
  createHash,
  createHmac,
  createPrivateKey,
  createPublicKey,
  createSecretKey,
  createSign,
  createVerify,
  Decipheriv,
  DiffieHellman,
  diffieHellman,
  DiffieHellmanGroup,
  ECDH,
  generateKey,
  generateKeyPair,
  generateKeyPairSync,
  generateKeySync,
  generatePrime,
  generatePrimeSync,
  getCipherInfo,
  getCiphers,
  getCurves,
  getDiffieHellman,
  getFips,
  getHashes,
  Hash,
  hkdf,
  hkdfSync,
  Hmac,
  KeyObject,
  pbkdf2,
  pbkdf2Sync,
  privateDecrypt,
  privateEncrypt,
  publicDecrypt,
  publicEncrypt,
  randomBytes,
  randomFill,
  randomFillSync,
  randomInt,
  randomUUID,
  scrypt,
  scryptSync,
  secureHeapUsed,
  setEngine,
  setFips,
  Sign,
  sign,
  timingSafeEqual,
  Verify,
  verify,
  webcrypto,
  X509Certificate,
};





































































;

export {
  Certificate,
  checkPrime,
  checkPrimeSync,
  Cipheriv,
  constants,
  createCipheriv,
  createDecipheriv,
  createDiffieHellman,
  createDiffieHellmanGroup,
  createECDH,
  createHash,
  createHmac,
  createPrivateKey,
  createPublicKey,
  createSecretKey,
  createSign,
  createVerify,
  Decipheriv,
  DiffieHellman,
  diffieHellman,
  DiffieHellmanGroup,
  ECDH,
  generateKey,
  generateKeyPair,
  generateKeyPairSync,
  generateKeySync,
  generatePrime,
  generatePrimeSync,
  getCipherInfo,
  getCiphers,
  getCurves,
  getDiffieHellman,
  getFips,
  getHashes,
  Hash,
  hkdf,
  hkdfSync,
  Hmac,
  KeyObject,
  pbkdf2,
  pbkdf2Sync,
  privateDecrypt,
  privateEncrypt,
  publicDecrypt,
  publicEncrypt,
  randomBytes,
  randomFill,
  randomFillSync,
  randomInt,
  randomUUID,
  scrypt,
  scryptSync,
  secureHeapUsed,
  setEngine,
  setFips,
  Sign,
  sign,
  timingSafeEqual,
  Verify,
  verify,
  webcrypto,
  X509Certificate,
};

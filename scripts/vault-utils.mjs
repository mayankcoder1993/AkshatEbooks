import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16;
const SALT_LENGTH = 32;
const KEY_LENGTH = 32;
const ITERATIONS = 100000;

export function deriveKey(passphrase, salt) {
  return crypto.pbkdf2Sync(passphrase, salt, ITERATIONS, KEY_LENGTH, 'sha512');
}

export function encryptSecret(plaintext, passphrase) {
  const salt = crypto.randomBytes(SALT_LENGTH);
  const iv = crypto.randomBytes(IV_LENGTH);
  const key = deriveKey(passphrase, salt);
  
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  let encrypted = cipher.update(plaintext, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  const tag = cipher.getAuthTag();

  return {
    salt: salt.toString('hex'),
    iv: iv.toString('hex'),
    tag: tag.toString('hex'),
    ciphertext: encrypted
  };
}

export function decryptSecret(encryptedBundle, passphrase) {
  const salt = Buffer.from(encryptedBundle.salt, 'hex');
  const iv = Buffer.from(encryptedBundle.iv, 'hex');
  const tag = Buffer.from(encryptedBundle.tag, 'hex');
  const key = deriveKey(passphrase, salt);

  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(tag);
  let decrypted = decipher.update(encryptedBundle.ciphertext, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Self-test when executed directly
if (process.argv[1] && process.argv[1].endsWith('vault-utils.mjs')) {
  const secret = 'TEST-API-KEY-SECRET-12345';
  const pass = 'AkshatMasterKey';
  const enc = encryptSecret(secret, pass);
  const dec = decryptSecret(enc, pass);
  if (secret === dec) {
    console.log('✓ Vault crypto roundtrip self-test passed cleanly!');
  } else {
    console.error('✗ Vault crypto self-test failed');
    process.exit(1);
  }
}

import * as crypto from 'crypto'
const CryptoJS = require('crypto-js')
const promptSync = require('prompt-sync')({ sigint: true });

// Symmetric key generation

const value = crypto.randomBytes(32) // 32 bytes = 256 bits
const sharedKey = value.toString('hex')
// console.log('symmetric key', sharedKey)

// Symmetric key encryption

const message = "Future Proof Season 1"
const cipherText =  CryptoJS.AES.encrypt(message, sharedKey)
// console.log(message)
// console.log(cipherText)
// console.log(cipherText.toString())

// Symmetric key decryption

const bytes = CryptoJS.AES.decrypt(cipherText, sharedKey)
const plainText = bytes.toString(CryptoJS.enc.Utf8)
// console.log(plainText)

// Let's turn this into a program

let done = false

while (!done) {
    let input = promptSync('Enter E for encryption or D for decryption: ');
    input = String(input);

    switch (input) {
        case 'E':
            let message = promptSync('Enter a message: ');
            let cipherText = encrypt(message)
            console.log("Your message:", input)
            console.log("Your ciphertext:", cipherText.toString())
            break;
        case 'D':
            cipherText = promptSync('Enter a cipherText: ');
            const plainText = decrypt(cipherText)
            console.log("Your decrypted message:", plainText)
            break;
        default:
            console.log('Invalid input')
            break;
    }
}

function encrypt(input: String): any {
    const cipherText =  CryptoJS.AES.encrypt(input, sharedKey)
    return cipherText
}

function decrypt(cipherText: any): String {
    const bytes = CryptoJS.AES.decrypt(cipherText, sharedKey)
    return bytes.toString(CryptoJS.enc.Utf8)
}

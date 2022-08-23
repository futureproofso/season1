import * as CryptoJS from 'crypto-js'

// Build a merkle tree from a list of transactions

const txList = ['tx1', 'tx2', 'tx3', 'tx4']
const hash1 = CryptoJS.SHA256(txList[0] + txList[1]).toString()
const hash2 = CryptoJS.SHA256(txList[2] + txList[3]).toString()
const root = CryptoJS.SHA256(hash1 + hash2).toString()

console.log(
    `
          ${root.substring(0, 3)}...
     ${hash1.substring(0, 3)}...   ${hash2.substring(0, 3)}...
    ${txList[0]}  ${txList[1]}  ${txList[2]}  ${txList[3]}
    `
)
console.log('root\n', root)
console.log('L subtree\n', hash1)
console.log('R subtree\n', hash2)

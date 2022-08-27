import 'mocha'
import { expect } from 'chai'
import { BloomFilter } from '../src/bloom_filter'

describe('initialize bloom filter', () => {
    it('should have an empty list', () => {
        const bf = new BloomFilter()
        expect(bf.list.length).to.equal(0)
    })
})

describe('setup', () => {
    it('should initialize list with 0s at each of n indices and set hash count', () => {
        const bf = new BloomFilter()
        const hashCount = 3
        const listLength = 10
        bf.setup(listLength, hashCount)
        expect(bf.list.length).to.equal(listLength)
        for (let i = 0; i < listLength; i++) {
            expect(bf.list[i]).to.equal(0)
        }
        expect(bf.hashCount).to.equal(hashCount)
    })
})

describe('check', () => {
    it('probabilistically tells if element is in filter', () => {
        const bf = new BloomFilter()
        bf.setup(10, 3)
        bf.add('geeks')
        const result = bf.check('geeks')
        expect(result).to.be.true
        const result2 = bf.check('nerds')
        expect(result2).to.be.false
    })
})

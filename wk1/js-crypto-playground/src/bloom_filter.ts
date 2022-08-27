import * as murmur from 'murmurhash-js'

export class BloomFilter {
    hashCount = undefined
    list = []
    listLength = undefined

    /**
     * Initialize list with zero values and number of times to hash
     * @param n length of bloom filter list
     * @param m number of times to hash
     */
    setup(n: number, m: number) {
        this.listLength = n
        for (let i = 0; i < n; i++) {
            this.list[i] = 0
        }
        this.hashCount = m
    }

    add(element: string): void {
        for (let i = 0; i < this.hashCount; i++) {
            let out = murmur.murmur3(element, i)
            let location = out % this.listLength
            this.list[location] = 1
        }
    }

    check(element: string): boolean {
        let isInList = true
        for (let i = 0; i < this.hashCount; i++) {
            let out = murmur.murmur3(element, i)
            let location = out % this.listLength
            if (this.list[location] != 1) {
                isInList = false
                break;
            }
        }
        return isInList
    }
}

import { ethers } from 'hardhat'
import { namehash } from 'ethers/lib/utils'

import { INSRegistry, PublicResolver } from "../typechain"

async function main() {
    const registry = (await ethers.getContract("INSRegistry")) as INSRegistry
    // const resolver = (await ethers.getContract("PublicResolver")) as PublicResolver

    const label = 'hello'
    const name = label + '.io'
    const node = namehash(name)

    const resolverAddr = await registry.resolver(node)
    const resolverFactory = await ethers.getContractFactory("PublicResolver")
    const resolver = resolverFactory.attach(resolverAddr) as PublicResolver

    const owner = await resolver['addr(bytes32)'](node)

    console.log(`${name} resolved address is ${owner}`)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

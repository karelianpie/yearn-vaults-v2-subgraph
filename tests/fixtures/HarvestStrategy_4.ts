// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
import { createMockedFunction } from 'matchstick-as';
import {
  BigInt,
  ethereum,
  log,
  Address,
  Bytes,
  ByteArray,
} from '@graphprotocol/graph-ts';

export namespace HarvestStrategy_4 {
  export const VaultAddress = '0x5f18c75abdae578b483e5f43f12a39cf75b973a9';
  export const WantTokenAddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
  export const Block = '11685275';
  export const StrategyAddress = '0x4d7d4485fd600c61d840ccbec328bfd76a050f87';
  export const PricePerShare = '999953';
  export const TreasuryAddress = '0x93a62da5a14c80f265dabc077fcee437b1a0efde';
  export function mockChainState(): void {
    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'totalSupply',
      'totalSupply():(uint256)'
    ).returns([
      ethereum.Value.fromUnsignedBigInt(BigInt.fromString('589475199200')),
    ]);

    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'totalAssets',
      'totalAssets():(uint256)'
    ).returns([
      ethereum.Value.fromUnsignedBigInt(BigInt.fromString('589447991352')),
    ]);

    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'totalDebt',
      'totalDebt():(uint256)'
    ).returns([
      ethereum.Value.fromUnsignedBigInt(BigInt.fromString('559944200575')),
    ]);

    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'pricePerShare',
      'pricePerShare():(uint256)'
    ).returns([ethereum.Value.fromUnsignedBigInt(BigInt.fromString('999953'))]);

    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'performanceFee',
      'performanceFee():(uint256)'
    ).returns([ethereum.Value.fromUnsignedBigInt(BigInt.fromString('1000'))]);

    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'managementFee',
      'managementFee():(uint256)'
    ).returns([ethereum.Value.fromUnsignedBigInt(BigInt.fromString('200'))]);

    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'activation',
      'activation():(uint256)'
    ).returns([
      ethereum.Value.fromUnsignedBigInt(BigInt.fromString('1610909579')),
    ]);

    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'apiVersion',
      'apiVersion():(string)'
    ).returns([ethereum.Value.fromString('0.3.0')]);

    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'token',
      'token():(address)'
    ).returns([
      ethereum.Value.fromAddress(
        Address.fromString('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48')
      ),
    ]);

    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'rewards',
      'rewards():(address)'
    ).returns([
      ethereum.Value.fromAddress(
        Address.fromString('0x93A62dA5a14C80f265DAbC077fCEE437B1a0Efde')
      ),
    ]);

    createMockedFunction(
      Address.fromString('0x4d7d4485fd600c61d840ccbec328bfd76a050f87'),
      'doHealthCheck',
      'doHealthCheck():(bool)'
    ).reverts();

    createMockedFunction(
      Address.fromString('0x4d7d4485fd600c61d840ccbec328bfd76a050f87'),
      'healthCheck',
      'healthCheck():(address)'
    ).reverts();

    createMockedFunction(
      Address.fromString('0x4d7d4485fd600c61d840ccbec328bfd76a050f87'),
      'name',
      'name():(string)'
    ).returns([ethereum.Value.fromString('StrategyGenericLevCompFarm')]);

    createMockedFunction(
      Address.fromString('0x4d7d4485fd600c61d840ccbec328bfd76a050f87'),
      'want',
      'want():(address)'
    ).returns([
      ethereum.Value.fromAddress(
        Address.fromString('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48')
      ),
    ]);

    createMockedFunction(
      Address.fromString('0x4d7d4485fd600c61d840ccbec328bfd76a050f87'),
      'vault',
      'vault():(address)'
    ).returns([
      ethereum.Value.fromAddress(
        Address.fromString('0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9')
      ),
    ]);

    createMockedFunction(
      Address.fromString('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'),
      'decimals',
      'decimals():(uint8)'
    ).returns([ethereum.Value.fromUnsignedBigInt(BigInt.fromString('6'))]);

    createMockedFunction(
      Address.fromString('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'),
      'decimals',
      'decimals():(uint256)'
    ).returns([ethereum.Value.fromUnsignedBigInt(BigInt.fromString('6'))]);

    createMockedFunction(
      Address.fromString('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'),
      'balanceOf',
      'balanceOf(address):(uint256)'
    )
      .withArgs([
        ethereum.Value.fromAddress(
          Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9')
        ),
      ])
      .returns([
        ethereum.Value.fromUnsignedBigInt(BigInt.fromString('29503790777')),
      ]);

    createMockedFunction(
      Address.fromString('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'),
      'balanceOf',
      'balanceOf(address):(uint256)'
    )
      .withArgs([
        ethereum.Value.fromAddress(
          Address.fromString('0x4d7d4485fd600c61d840ccbec328bfd76a050f87')
        ),
      ])
      .returns([ethereum.Value.fromUnsignedBigInt(BigInt.fromString('0'))]);

    createMockedFunction(
      Address.fromString('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'),
      'symbol',
      'symbol():(string)'
    ).returns([ethereum.Value.fromString('USDC')]);

    createMockedFunction(
      Address.fromString('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'),
      'name',
      'name():(string)'
    ).returns([ethereum.Value.fromString('USD Coin')]);

    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'decimals',
      'decimals():(uint8)'
    ).returns([ethereum.Value.fromUnsignedBigInt(BigInt.fromString('6'))]);

    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'decimals',
      'decimals():(uint256)'
    ).returns([ethereum.Value.fromUnsignedBigInt(BigInt.fromString('6'))]);

    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'balanceOf',
      'balanceOf(address):(uint256)'
    )
      .withArgs([
        ethereum.Value.fromAddress(
          Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9')
        ),
      ])
      .returns([ethereum.Value.fromUnsignedBigInt(BigInt.fromString('0'))]);

    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'balanceOf',
      'balanceOf(address):(uint256)'
    )
      .withArgs([
        ethereum.Value.fromAddress(
          Address.fromString('0x4d7d4485fd600c61d840ccbec328bfd76a050f87')
        ),
      ])
      .returns([ethereum.Value.fromUnsignedBigInt(BigInt.fromString('0'))]);

    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'balanceOf',
      'balanceOf(address):(uint256)'
    )
      .withArgs([
        ethereum.Value.fromAddress(
          Address.fromString('0x93a62da5a14c80f265dabc077fcee437b1a0efde')
        ),
      ])
      .returns([
        ethereum.Value.fromUnsignedBigInt(BigInt.fromString('28243466')),
      ]);

    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'symbol',
      'symbol():(string)'
    ).returns([ethereum.Value.fromString('yvUSDC')]);

    createMockedFunction(
      Address.fromString('0x5f18c75abdae578b483e5f43f12a39cf75b973a9'),
      'name',
      'name():(string)'
    ).returns([ethereum.Value.fromString('USDC yVault')]);

    createMockedFunction(
      Address.fromString('0x83d95e0d5f402511db06817aff3f9ea88224b030'),
      'getNormalizedValueUsdc',
      'getNormalizedValueUsdc(address,uint256):(uint256)'
    )
      .withArgs([
        ethereum.Value.fromAddress(
          Address.fromString('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48')
        ),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromString('33043378')),
      ])
      .returns([ethereum.Value.fromUnsignedBigInt(BigInt.fromString('1'))]);

    createMockedFunction(
      Address.fromString('0x83d95e0d5f402511db06817aff3f9ea88224b030'),
      'getNormalizedValueUsdc',
      'getNormalizedValueUsdc(address,uint256):(uint256)'
    )
      .withArgs([
        ethereum.Value.fromAddress(
          Address.fromString('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48')
        ),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromString('3304410')),
      ])
      .returns([ethereum.Value.fromUnsignedBigInt(BigInt.fromString('1'))]);

    createMockedFunction(
      Address.fromString('0x83d95e0d5f402511db06817aff3f9ea88224b030'),
      'getNormalizedValueUsdc',
      'getNormalizedValueUsdc(address,uint256):(uint256)'
    )
      .withArgs([
        ethereum.Value.fromAddress(
          Address.fromString('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48')
        ),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromString('16569793')),
      ])
      .returns([ethereum.Value.fromUnsignedBigInt(BigInt.fromString('1'))]);

    createMockedFunction(
      Address.fromString('0x83d95e0d5f402511db06817aff3f9ea88224b030'),
      'try_getNormalizedValueUsdc',
      'getNormalizedValueUsdc(address,uint256):(uint256)'
    )
      .withArgs([
        ethereum.Value.fromAddress(
          Address.fromString('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48')
        ),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromString('33043378')),
      ])
      .returns([ethereum.Value.fromUnsignedBigInt(BigInt.fromString('1'))]);

    createMockedFunction(
      Address.fromString('0x83d95e0d5f402511db06817aff3f9ea88224b030'),
      'try_getNormalizedValueUsdc',
      'getNormalizedValueUsdc(address,uint256):(uint256)'
    )
      .withArgs([
        ethereum.Value.fromAddress(
          Address.fromString('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48')
        ),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromString('3304410')),
      ])
      .returns([ethereum.Value.fromUnsignedBigInt(BigInt.fromString('1'))]);

    createMockedFunction(
      Address.fromString('0x83d95e0d5f402511db06817aff3f9ea88224b030'),
      'try_getNormalizedValueUsdc',
      'getNormalizedValueUsdc(address,uint256):(uint256)'
    )
      .withArgs([
        ethereum.Value.fromAddress(
          Address.fromString('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48')
        ),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromString('16569793')),
      ])
      .returns([ethereum.Value.fromUnsignedBigInt(BigInt.fromString('1'))]);

    createMockedFunction(
      Address.fromString('0x83d95e0d5f402511db06817aff3f9ea88224b030'),
      'getPriceUsdcRecommended',
      'getPriceUsdcRecommended(address):(uint256)'
    )
      .withArgs([
        ethereum.Value.fromAddress(
          Address.fromString('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48')
        ),
      ])
      .returns([
        ethereum.Value.fromUnsignedBigInt(BigInt.fromString('1000000')),
      ]);
  }
}

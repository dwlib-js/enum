# Enum API

## Abstract
The module for implementing an enumeration.

## Install
`npm i --save @dwlib/enum`

## Usage
```javascript
// CJS
const Enum = require('@dwlib/enum');
const EnumContains = require('@dwlib/enum/EnumContains');
const EnumEntries = require('@dwlib/enum/EnumEntries');
const EnumEquals = require('@dwlib/enum/EnumEquals');
const EnumForEach = require('@dwlib/enum/EnumForEach');
const EnumGet = require('@dwlib/enum/EnumGet');
const EnumHas = require('@dwlib/enum/EnumHas');
const EnumIteratorNext = require('@dwlib/enum/EnumIteratorNext');
const EnumKeyOf = require('@dwlib/enum/EnumKeyOf');
const EnumKeys = require('@dwlib/enum/EnumKeys');
const EnumOf = require('@dwlib/enum/EnumOf');
const EnumSize = require('@dwlib/enum/EnumSize');
const EnumValues = require('@dwlib/enum/EnumValues');
const IsEnum = require('@dwlib/enum/IsEnum');
const IsEnumIterator = require('@dwlib/enum/IsEnumIterator');
// ESM
import Enum, {
  EnumContains,
  EnumEntries,
  EnumEquals,
  EnumForEach,
  EnumGet,
  EnumHas,
  EnumIteratorNext,
  EnumKeyOf,
  EnumKeys,
  EnumOf,
  EnumSize,
  EnumValues,
  IsEnum,
  IsEnumIterator
} from '@dwlib/enum';
import EnumContains from '@dwlib/enum/EnumContains';
import EnumEntries from '@dwlib/enum/EnumEntries';
import EnumEquals from '@dwlib/enum/EnumEquals';
import EnumForEach from '@dwlib/enum/EnumForEach';
import EnumGet from '@dwlib/enum/EnumGet';
import EnumHas from '@dwlib/enum/EnumHas';
import EnumIteratorNext from '@dwlib/enum/EnumIteratorNext';
import EnumKeyOf from '@dwlib/enum/EnumKeyOf';
import EnumKeys from '@dwlib/enum/EnumKeys';
import EnumOf from '@dwlib/enum/EnumOf';
import EnumSize from '@dwlib/enum/EnumSize';
import EnumValues from '@dwlib/enum/EnumValues';
import IsEnum from '@dwlib/enum/IsEnum';
import IsEnumIterator from '@dwlib/enum/IsEnumIterator';
```

## API
- `class Enum`
  - `static of(...keys: <string | symbol>[]) => Enum`
  - `constructor(constants: Enumerable<Object>?)`
  - `get size => number`
  - `contains(value: any) => boolean`
  - `entries() => EnumIterator`
  - `equals(other: any) => boolean`
  - `forEach(callback: (value: any, key: string | symbol, enumeration: Enum) => void) => void`
  - `get(key: string | symbol) => any`
  - `has(key: string | symbol) => boolean`
  - `keyOf(value: any) => string | symbol | undefined`
  - `keys() => EnumIterator`
  - `values() => EnumIterator`
- `class EnumIterator`
  - `next() => IteratorResult`

### Builtins
- `EnumContains(enumeration: Enum, value: any) => boolean`
- `EnumEntries(enumeration: Enum) => EnumIterator`
- `EnumEquals(enumeration: Enum, other: any) => boolean`
- `EnumForEach(enumeration: Enum, callback: (value: any, key: string | symbol, enumeration: Enum) => void) => void`
- `EnumGet(enumeration: Enum, key: string | symbol) => any`
- `EnumHas(enumeration: Enum, key: string | symbol) => boolean`
- `EnumIteratorNext(enumIterator: EnumIterator) => IteratorResult`
- `EnumKeyOf(enumeration: Enum, value: any) => string | symbol | undefined`
- `EnumKeys(enumeration: Enum) => EnumIterator`
- `EnumOf(...keys: <string | symbol>[]) => Enum`
- `EnumSize(enumeration: Enum) => number`
- `EnumValues(enumeration: Enum) => EnumIterator`
- `IsEnum(argument: any) => boolean`
- `IsEnumIterator(argument: any) => boolean`

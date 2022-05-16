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
- *class* Enum
  - *static* of([...keys])
  - constructor([constants])
  - *get* size
  - contains(value)
  - entries()
  - forEach(callback[, thisArgument])
  - get(key)
  - has(key)
  - keyOf(value)
  - keys()
  - values()

### Builtins
- EnumContains(enumeration, value)
- EnumEntries(enumeration)
- EnumForEach(enumeration, callback[, thisArgument])
- EnumGet(enumeration, key)
- EnumHas(enumeration, key)
- EnumIteratorNext(enumIterator)
- EnumKeyOf(enumeration, value)
- EnumKeys(enumeration)
- EnumOf([...keys])
- EnumSize(enumeration)
- EnumValues(enumeration)
- IsEnum(argument)
- IsEnumIterator(argument)

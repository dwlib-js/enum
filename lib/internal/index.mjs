import {
  RequireIntrinsic,
  UncurryThisIntrinsic
} from '#intrinsic';
import {
  IsCallable,
  IsObject,
  ToPropertyKey
} from '#type';
import {
  HasInternalSlot,
  RequireInternalSlot,
  SetInternalSlot
} from '#internal-slot';

const IteratorPrototype = RequireIntrinsic('IteratorPrototype');
const Map = RequireIntrinsic('Map');
const MapEntries = UncurryThisIntrinsic('Map.prototype.entries');
const MapGet = UncurryThisIntrinsic('Map.prototype.get');
const MapHas = UncurryThisIntrinsic('Map.prototype.has');
const MapKeys = UncurryThisIntrinsic('Map.prototype.keys');
const MapSet = UncurryThisIntrinsic('Map.prototype.set');
const MapSize = UncurryThisIntrinsic('get Map.prototype.size');
const MapValues = UncurryThisIntrinsic('Map.prototype.values');
const MapIteratorNext = UncurryThisIntrinsic('MapIteratorPrototype.next');
const ObjectCreate = RequireIntrinsic('Object.create');
const ObjectPropertyIsEnumerable = UncurryThisIntrinsic(
  'Object.prototype.propertyIsEnumerable'
);
const ReflectApply = RequireIntrinsic('Reflect.apply');
const ReflectDefineProperty = RequireIntrinsic('Reflect.defineProperty');
const ReflectOwnKeys = RequireIntrinsic('Reflect.ownKeys');
const String = RequireIntrinsic('String');
const Symbol = RequireIntrinsic('Symbol');
const SymbolHasInstance = RequireIntrinsic('@@hasInstance');
const SymbolIterator = RequireIntrinsic('@@iterator');
const SymbolToStringTag = RequireIntrinsic('@@toStringTag');
const TypeError = RequireIntrinsic('TypeError');

const $Map = Symbol('[[Map]]');
const $MapIterator = Symbol('[[MapIterator]]');

const EnumContains = (enumeration, value) => {
  const map = RequireInternalSlot(enumeration, $Map);
  const iterator = MapValues(map);
  let iteratorResult = MapIteratorNext(iterator);
  if (value !== value) {
    while (!iteratorResult.done) {
      const nextValue = iteratorResult.value;
      if (nextValue !== nextValue) {
        return true;
      }
      iteratorResult = MapIteratorNext(iterator);
    }
  } else {
    while (!iteratorResult.done) {
      const nextValue = iteratorResult.value;
      if (nextValue === value) {
        return true;
      }
      iteratorResult = MapIteratorNext(iterator);
    }
  }
  return false;
}

const EnumEntries = enumeration => {
  const map = RequireInternalSlot(enumeration, $Map);
  const mapIterator = MapEntries(map);
  const enumIterator = ObjectCreate(EnumIteratorPrototype);
  SetInternalSlot(enumIterator, $MapIterator, mapIterator);
  return enumIterator;
}

const EnumForEach = (enumeration, callback, thisArgument) => {
  const map = RequireInternalSlot(enumeration, $Map);
  if (!IsCallable(callback)) {
    throw new TypeError('callback is not callable');
  }
  const iterator = MapEntries(map);
  let iteratorResult = MapIteratorNext(iterator);
  while (!iteratorResult.done) {
    const entry = iteratorResult.value;
    const key = entry[0];
    const value = entry[1];
    ReflectApply(callback, thisArgument, [value, key, enumeration]);
    iteratorResult = MapIteratorNext(iterator);
  }
}

const EnumGet = (enumeration, key) => {
  const map = RequireInternalSlot(enumeration, $Map);
  key = ToPropertyKey(key);
  return MapGet(map, key);
}

const EnumHas = (enumeration, key) => {
  const map = RequireInternalSlot(enumeration, $Map);
  key = ToPropertyKey(key);
  return MapHas(map, key);
}

const EnumKeyOf = (enumeration, value) => {
  const map = RequireInternalSlot(enumeration, $Map);
  const iterator = MapEntries(map);
  let iteratorResult = MapIteratorNext(iterator);
  if (value !== value) {
    while (!iteratorResult.done) {
      const entry = iteratorResult.value;
      const nextValue = entry[1];
      if (nextValue !== nextValue) {
        return entry[0];
      }
      iteratorResult = MapIteratorNext(iterator);
    }
  } else {
    while (!iteratorResult.done) {
      const entry = iteratorResult.value;
      const nextValue = entry[1];
      if (nextValue === value) {
        return entry[0];
      }
      iteratorResult = MapIteratorNext(iterator);
    }
  }
  return undefined;
}

const EnumKeys = enumeration => {
  const map = RequireInternalSlot(enumeration, $Map);
  const mapIterator = MapKeys(map);
  const enumIterator = ObjectCreate(EnumIteratorPrototype);
  SetInternalSlot(enumIterator, $MapIterator, mapIterator);
  return enumIterator;
}

const EnumSize = enumeration => {
  const map = RequireInternalSlot(enumeration, $Map);
  return MapSize(map);
}

const EnumValues = enumeration => {
  const map = RequireInternalSlot(enumeration, $Map);
  const mapIterator = MapValues(map);
  const enumIterator = ObjectCreate(EnumIteratorPrototype);
  SetInternalSlot(enumIterator, $MapIterator, mapIterator);
  return enumIterator;
}

const EnumIteratorNext = enumIterator => {
  const mapIterator = RequireInternalSlot(enumIterator, $MapIterator);
  return MapIteratorNext(mapIterator);
}

const IsEnum = argument => (
  IsObject(argument) && HasInternalSlot(argument, $Map)
);

const IsEnumIterator = argument => (
  IsObject(argument) && HasInternalSlot(argument, $MapIterator)
);

const EnumIteratorPrototype = ObjectCreate(IteratorPrototype, {
  next: {
    value: function next() {
      return EnumIteratorNext(this);
    }
  }
});
ReflectDefineProperty(EnumIteratorPrototype, SymbolToStringTag, {
  value: 'Enum Iterator'
});

class Enum {
  static of(...keys) {
    const keyCount = keys.length;
    const map = new Map();
    for (let i = 0; i < keyCount; i++) {
      let key = keys[i];
      key = ToPropertyKey(key);
      const symbolName = String(key);
      const symbol = Symbol(symbolName);
      MapSet(map, key, symbol);
    }
    const enumeration = ObjectCreate(EnumPrototype);
    SetInternalSlot(enumeration, $Map, map);
    return enumeration;
  }

  constructor(constants) {
    const map = new Map();
    if (constants != null) {
      if (!IsObject(constants)) {
        throw new TypeError('constants is not an object');
      }
      const keys = ReflectOwnKeys(constants);
      const keyCount = keys.length;
      for (let i = 0; i < keyCount; i++) {
        const key = keys[i];
        if (ObjectPropertyIsEnumerable(constants, key)) {
          const value = constants[key];
          MapSet(map, key, value);
        }
      }
    }
    SetInternalSlot(this, $Map, map);
  }

  get size() {
    return EnumSize(this);
  }

  contains(value) {
    return EnumContains(this, value);
  }

  entries() {
    return EnumEntries(this);
  }

  forEach(callback, thisArgument) {
    return EnumForEach(this, callback, thisArgument);
  }

  get(key) {
    return EnumGet(this, key);
  }

  has(key) {
    return EnumHas(this, key);
  }

  keyOf(value) {
    return EnumKeyOf(this, value);
  }

  keys() {
    return EnumKeys(this);
  }

  values() {
    return EnumValues(this);
  }
}
ReflectDefineProperty(Enum, SymbolHasInstance, {
  value: IsEnum
});

const EnumOf = Enum.of;
const EnumPrototype = Enum.prototype;
const EnumPrototypeEntries = EnumPrototype.entries;
ReflectDefineProperty(EnumPrototype, SymbolIterator, {
  value: EnumPrototypeEntries
});
ReflectDefineProperty(EnumPrototype, SymbolToStringTag, {
  value: 'Enum'
});

export {
  Enum,
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
};

type Flattern<T> = T extends Array<infer V> ? Flattern<V> : T;

type Atom = string | number | boolean | bigint;
// type Nested<T> = (T | (T | T[])[])[]
type Nested = Array<Atom | Nested>

function flattern<T extends Atom>(arr: Nested) : Array<Atom> {
  return (new Array<Atom>()).concat(...arr.map(x => Array.isArray(x) ? flattern(x) : x))
} 

flattern([1,2,['3',[4]]])
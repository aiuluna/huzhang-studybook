// 泛型

function identity<Type>(arg: Type): Type {
  return arg;
}

// class GenericNumber<NumType> {
//   zeroValue: NumType;
//   add: (x: NumType, y: NumType) => NumType;
// }

// const gn = new GenericNumber<number>();
// gn.zeroValue = 1;
// gn.add = (a,b) => a + b;

class GenericNumber<T> {
  private zeroValue: T;

  constructor(v: T) {
    this.zeroValue = v;
  }

  public add(x: number, y: number) {
    return x + y;
  };
}

// 泛型增加约束
interface lengthWise {
  length: number;
}

function loggingIdentity<Type extends lengthWise>(arg: Type): Type {
  console.log(arg.length)
  return arg;
}

// keyof
type tPoint = {
  x: number;
  y: number;
}
type P = keyof tPoint;
// P = 'x' | 'y'

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key): Type[Key] {
  return obj[key];
}
var obj = { a: 1, b: 2, c: 3, d: 4 };
getProperty(obj, "a"); // 1



function create<Type>(c: { new(): Type }): Type {
  return new c();
}


class Zookeeper {
  nametag: string = 'Mikle'
}

class BeeKeeper {
  nametag: string = 'ZHANGSAN'
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: Zookeeper = new Zookeeper();
}

function createInstance<A extends Animal>(a: {new (): A}): A {
  return new a();
}

createInstance(Lion).keeper.nametag;
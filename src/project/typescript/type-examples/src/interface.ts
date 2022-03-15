
// 接口可以声明合并
interface Box {
  weight: number;
  height: number;
}

interface Box {
  scale: number;
}

let box: Box = {
  weight: 1,
  height: 2,
  scale: 3
}



// 接口能被继承， type可以合并
interface Animal {
  name: string;
}

type Animal_1 = {
  name: string
}

interface Bear extends Animal {
  honey: string;
}

type Bear_1 = Animal_1 & {
  honey: string;
}
type Point = {
  x: number,
  y: string
}

const pt: Point = {
  x: 1,
  y: '2'
}


const o : {
  a: string,
  b?:{
    c: string
  }
} = {a: "1"}

console.log(o.b?.c)
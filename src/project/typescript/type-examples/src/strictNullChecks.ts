function doSomething(x: string | null) {
  // 非空断言 !
  console.log('hello' + x!.toUpperCase())
}


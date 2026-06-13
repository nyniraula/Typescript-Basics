function doSome<T extends string | boolean>(value: T) {
  console.log(value);
}

doSome(12);

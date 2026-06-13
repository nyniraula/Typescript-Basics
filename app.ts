function doSome(value: number, cb: (value: number) => void) {
  cb(value);
}

doSome(2, (data: number) => {
  console.log(data);
});

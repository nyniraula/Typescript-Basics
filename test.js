function doSome(value, cb) {
  cb(value);
}

const fn = (data) => {
  console.log(data * 2);
};

doSome(2, fn);

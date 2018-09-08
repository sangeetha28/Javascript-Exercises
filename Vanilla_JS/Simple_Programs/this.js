function a() {
  var aa = this;
  console.log("A - THIS REFERS TO", this);
  function b() {
    var bb = this;
    console.log("B - THIS REFERS TO", this);
    console.log(aa === bb);
  }
  b();
}

a();

//
cbHell = () => {
  function call(name, cb) {
    setTimeout(function () {
      console.log("name", name);
      cb(name);
    }, 1000);
  }

  function back(cb) {
    setTimeout(function () {
      console.log("back");
      cb("back");
    }, 1000);
  }

  function hello(cb) {
    setTimeout(function () {
      cb("callback hell");
    }, 1000);
  }

  call("kim", function (name) {
    console.log(name + " 안녕");
    back(function (txt) {
      console.log(txt + "을 실행했구나");
      hello(function (msg) {
        console.log("여기는 " + msg);
      });
    });
  });
};

//
promise = () => {
  function call(name) {
    return new Promise((res, rej) => {
      setTimeout(function () {
        console.log("name", name);
        res(name);
      }, 1000);
    });
  }

  function back() {
    return new Promise((res, rej) => {
      setTimeout(function () {
        console.log("back");
        res("back");
      }, 1000);
    });
  }

  function hell() {
    return new Promise((res, rej) => {
      setTimeout(function () {
        console.log("callback hell");
        res("callback hell");
      }, 1000);
    });
  }

  call("kim")
    .then((callResult) => {
      console.log(callResult + " 반가워");
      return back();
    })
    .then((backResult) => {
      console.log(backResult + "을 실행했구나");
      return hell();
    })
    .then((hellResult) => {
      console.log("여기는 " + hellResult);
    });

  async function exec() {
    const callResult = await call("kim");
    console.log(callResult + " 반가워");
    const backResult = await back();
    console.log(backResult + "을 실행했구나");
    const hellResult = await hell();
    console.log("여기는 " + hellResult);
  }
  exec();
};
// promise();

//
changeColorPrac = () => {
  changeColor = (color) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        // document.body.style.backgroundColor = color;
        console.log(color);
        res();
      }, 1000);
    });
  };

  changeColor("red")
    .then(() => {
      return changeColor("orange");
    })
    .then(() => {
      return changeColor("yellow");
    })
    .then(() => {
      return changeColor("green");
    })
    .then(() => {
      return changeColor("blue");
    });

  async function exec() {
    await changeColor("red");
    await changeColor("orange");
    await changeColor("yellow");
    await changeColor("green");
    await changeColor("blue");
  }
  // exec();
};
changeColorPrac();

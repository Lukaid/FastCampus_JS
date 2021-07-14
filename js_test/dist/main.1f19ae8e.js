// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
// JS 데이터
// 데이터는 원래 new와 전역객체로 생성자를 만들어서 생성해야 함
// 근데 줜나 번거로우니까 자주 쓰는거는 걍 아래처럼 씀, 이걸 리터럴 방식이라고 부름
// string: "", '', ``
// number, boolean, undefined, null
// Array: []
// Object: {}
// const result = 'hello world!'.indexOf('lukaid')
// console.log(result)
// const str = '0123'
// console.log('0 1 2 3'.length)
// const str = 'hello world!'
// const str = '       lukaid@kau.kr '
// console.log(str.indexOf('world') !== -1)
// console.log(str.slice(6, -1))
// console.log(str.replace(' world!', ''))
// console.log(str.match(/.+(?=@)/)[0]) // 배열의 0번 항
// console.log(str.trim())
// const pi = 3.142592
// console.log(pi)
// const str = pi.toFixed(2)
// console.log(str)
// console.log(typeof str)
// const integer = parseInt(str)
// const float = parseFloat(str)
// console.log(integer)
// console.log(float)
// console.log(typeof integer, typeof float)
// 수학객체는 눈치껏 알아서
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']
// console.log(numbers[1])
// console.log(fruits[2])
// console.log([1, 2, 3].length)
// console.log([].length)
// console.log(numbers.find(el => el > 2))
// console.log(numbers.concat(fruits))
// console.log(numbers.concat(fruits).length)
// const test = numbers.concat(fruits)
// console.log(test)
// console.log(numbers)
// console.log(fruits)
// // 이건 array의 forEach 문법으로 외우자, 순서대로 element, index, array가 callback 함수로 드가고 다 필요한건 아님, 매개변수 이름은 내 맘대로 바까도 됨
// fruits.forEach(function (element, index, array) {
//     console.log(element, index, array)
// })
// .map()
// const a = fruits.forEach((fruit, idx) => {
//     console.log(`${fruit}-${idx}`)
// })
// console.log(a)
// // map 은 array를 반환, return이 꼭 필요
// // const b = fruits.map(function (fruit, idx) {
// //     return `${fruit}-${idx}`
// // })
// // 객체 데이터가 드간 배열 반환
// const b = fruits.map((fruit, idx) => ({
//     id: idx,
//     name: fruit
// }))
// console.log(b)
// const a = numbers.map(number => number < 3)
// console.log(a)
// // filter, true만 출력
// const b = numbers.filter(number => number < 3)
// console.log(b)
// const a = fruits.find(fruit => /^B/.test(fruit))
// console.log(a)
// const b = fruits.findIndex(fruit => /^B/.test(fruit))
// console.log(b)
// const a = numbers.includes(3)
// console.log(a)
// const b = fruits.includes('lukaid')
// console.log(b)
// .push() .unshift() .reverse() .splice()
// 원본 수정됨!!
// numbers.push(5) // append
// console.log(numbers)
// numbers.unshift(0) // 앞에 append
// console.log(numbers)
// numbers.reverse()
// fruits.reverse()
// console.log(numbers)
// console.log(fruits)
// numbers.splice(2, 1) // splice(idx, 지울 개수, 추가할 아이템)
// console.log(numbers)
// numbers.splice(2, 0, 99)
// console.log(numbers)
// prototype 이 없는 method 는 정적(static) 메소드
// {}.assign() 이렇게 사용 불가
// const userAge = {
//     // key: value
//     name: 'Lukaid',
//     age: 29
// }
// const userEmail = {
//     name: 'Lukaid',
//     email: 'dltjddn0115@naver.com'
// }
// userAge.assign() 이렇게 사용 불가, prototype이 아님
// const target = Object.assign(userAge, userEmail)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge) // userAge를 반환한 것이 target, 두 변수 모두 같은 메모리 주소를 가르킴
// 첫번째 인수에 빈 객체를 넣으면 원본 객체는 유지됨
// const target = Object.assign({}, userAge, userEmail)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge) // userAge를 반환한 것이 target, 두 변수 모두 같은 메모리 주소를 가르킴
// const a = { k:123 }
// const b = { k:123 }
// console.log(a === b) // 내용이 같아도, 다른 객체임, 메모리 주소가 다름
// const c = '1'
// const d = '1'
// console.log(c === d)
var user = {
  // key: value
  name: 'Lukaid',
  age: 29,
  email: 'dltjddn0115@naver.com'
}; // const keys = Object.keys(user)
// console.log(keys)
// console.log(user['email'])
// const values = keys.map(key => user[key])
// console.log(values)
// 구조 분해 할당

var lukaid = user.name,
    age = user.age,
    _user$address = user.address,
    address = _user$address === void 0 ? 'korea' : _user$address; // 객체 데이터에서 내가 원하는 value만 key로 꺼내 묵으면 됨

console.log("\uC0AC\uC6A9\uC790\uC758 \uC774\uB984\uC740 ".concat(lukaid, "\uC785\uB2C8\uB2E4."));
console.log("".concat(lukaid, "\uC758 \uB098\uC774\uB294 ").concat(age, "\uC138 \uC785\uB2C8\uB2E4."));
console.log("".concat(lukaid, "\uC758 \uC774\uBA54\uC77C \uC8FC\uC18C\uB294 ").concat(user.email, "\uC785\uB2C8\uB2E4."));
console.log(address); // 객체 데이터 뿐 아니라 배열 데이터에도 사용 가능
// 배열은 순서를 꼭 지켜야 됨

var fruits = ['Apple', 'Banana', 'Cherry'];
var a = fruits[0],
    b = fruits[1],
    c = fruits[2],
    d = fruits[3];
console.log(a, b, c, d);
},{}],"../../.nvm/versions/node/v14.17.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65387" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../.nvm/versions/node/v14.17.1/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map
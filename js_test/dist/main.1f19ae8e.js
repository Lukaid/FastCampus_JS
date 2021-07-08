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
var _this = this;

// import getType from './getType'
// import getRandom from './getRandom'
// console.log(typeof "Hello World")
// console.log(typeof 123)
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof {})
// console.log(typeof [])
// console.log(getType(123))
// console.log(getType(false))
// console.log(getType(null))
// console.log(getType({}))
// console.log(getType([]))
// 산술연산자
// console.log(1+2)
// console.log(1-2)
// console.log(1*2)
// console.log(1/2)
// console.log(1%2)
// 할당연산자
// const a = 2; // const는 재할당이 불가능
// let b = 3; // let은 재할당 가능
// b += 1
// b -= 1
// b *= 2
// b /= 3
// b %= 2
// console.log(a, b)
// 비교연산자
// const a = 1
// const b = 3
// console.log(a === b) // 일치는 세개..?
// function isEqual(x, y) {
//   return x === y
// }
// console.log(isEqual(1, 1))
// console.log(isEqual(2, '2'))
// console.log(a !== b)
// 논리연산자
// const a = 1===1
// const b = 'AB'==='AB'
// const c = false
// console.log(a)
// console.log(b)
// console.log(c)
// console.log('&& :', a && b)
// console.log('&& :', a && b && c)
// console.log('|| : ', a || b || c)
// console.log('! : ', !a)
// 삼항연산자
// const a = 1 < 2
// if (a) {
//   console.log('참')
// } else {
//   console.log('거짓')
// }
// console.log(a ? '참' : '거짓')
// 조건문
// const a = getRandom()
// if (a === 0) {
//   console.log('a is 0')
// } else if (a === 2) {
//   console.log('a is 2')
// } else if (a === 4) {
//   console.log('a is 4')
// }else {
//   console.log('rest .. ')
// }
// // 조건문 switch
// switch (a) {
//   case 0:
//     console.log('a is 0')
//     break
//   case 2:
//     console.log('a is 2')
//     break
//   case 4:
//     console.log('a is 4')
//     break
//   default:
//     console.log('rest ...')
// }
// 반복문 
// for (시작조건; 종료조건; 변화조건) {}
// 종료조건이 false면 종료, while문 같은건가?
// const ulEl = document.querySelector('ul')
// for (let i = 0; i < 10; i += 1) {
//   const li = document.createElement('li')
//   li.textContent = `list-${i + 1}`
//   if (i % 2 === 1) {
//     li.addEventListener('click', function () {
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)
// }
// 변수 유효범위 (Variable Scope)
// var 함수레벨의 유효범위, let, const 블록레벨의 유효범위
// 블록레벨의 유효범위를 만드는 것이 더 효과적임
// function scope() {
//   if (true) {
//     var a = 123
//   }
//   console.log(a)
// }
// scope()
// 형 변환
// == 는 동등연산자, 형변환이 일어남, 안쓰는 것을 권장함
// const a = 1
// const b = '1'
// console.log(a == b)
// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...
// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN
// if (1) {
//   console.log(123)
// }
// 함수 복습
// return후 함수 종료
// 함수 선언, 기명함수
// function sum(x, y) {
//   return x + y
// } 
// //함수 표현, 익명함수
// const sum_2 = function (x, y) {
//   return x + y
// } 
// console.log(sum(1, 3) + sum(4, 12))
// const a = sum(1, 3)
// const b = sum(4, 12)
// console.log(a + b)
// console.log(sum_2(1, 2))
// function test() {
//   console.log(arguments)
//   return arguments[0] + arguments[1]
// } 
// console.log(test(7, 3))
// 화살표 함수
// () => {} vs function () {}
// const double = function (x) {
//   return x * 2
// }
// console.log('double: ', double(7))
// const doubleArrow = (x, y) => x * 2 + y
// console.log('doubleArrow: ', doubleArrow(7, 2))
// 즉시 실행 함수
// IIFE, Immediately-Invoked Function Expression
// const a = 7
// function double() {
//   console.log(a*2)
// }
// double();
// // (function) ()
// (function () {
//   console.log(a*2)
// }) ();
// (function () ) 권장
// (function () {
//   console.log(a*2)
// } () );
// 호이스팅 (Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 걍 함수먼저 읽고 나머지 읽는듯
// 익명함수(함수표현)으로는 이거 불가
// const a = 7
// double()
// function double () {
//   console.log(a*2)
// }
// 타이머함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행, ms
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료
// const timer = setInterval(() => {
//   console.log('Lukaid')
// }, 1000)
// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//   clearInterval(timer)
// })
// 콜백
// 함수의 인수로 사용되는 함수
// setTimeout(함수, 시간)
// function timeout(callback) {
//   setTimeout(() => {
//     console.log('Lukaid!')
//     callback()
//   }, 3000)
// }
// timeout(()=>{
//   console.log('Done!')
// })
// 생성자 함수
// 객체 데이터의 구조
// firstName: 'SeongWoo', -> property
// function이 드가 있으면 method
// 얘네를 통틀어 member라고 함
// const lukaid = {
//   firstName: 'SeongWoo',
//   lastName: 'Lee',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(lukaid.getFullName())
// const amy = {
//   firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// console.log(amy.getFullName())
// 객체 데이터가 생성되는 생성자 함수, 생성자 함수는 pascal case로 작성
// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }
// const lukaid = new User('SeongWoo', 'Lee')
// const Amy = new User('Amy', 'Clarke')
// const Neo = new User('Neo', 'Smith')
// // const lukaid(인스턴스) = new User('SeongWoo', 'Lee')
// console.log(lukaid.getFullName())
// console.log(Amy.getFullName())
// console.log(Neo.getFullName())
// this
// 일반(normal) 함수는 호출 위치에서 따라 this 정의!
// 화살표(arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!
var lukaid = {
  name: 'SeongWoo',
  normal: function normal() {
    console.log(this.name);
  },
  arrow: function arrow() {
    console.log(_this.name);
  }
};
lukaid.normal(); // 메소드 호출

lukaid.arrow();
var amy = {
  name: 'Amy',
  normal: lukaid.normal,
  // 함수 할당이라 괄호 안침..
  arrow: lukaid.arrow
};
amy.normal();
amy.arrow();
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55214" + '/');

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
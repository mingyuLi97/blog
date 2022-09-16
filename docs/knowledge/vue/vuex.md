# vuex

## 基本属性

1. state => 基本数据(数据源存放地)
2. getters => 从基本数据派生出来的数据
3. mutations => 提交更改数据的方法，同步
4. actions => 用于执行异步提交
5. modules => 模块化 Vuex

## 为什么 mutations 不能写异步

**可以写，但不推荐** 每个 mutation 执行完成后都会在 vue-devtools 同步状态，方便调试，如果写异步就会导致跟踪错误。
为了代码的可读性、健壮性不推荐 mutations 写异步代码

**标准流程**：使用 this.dispatch 触发 action 中的方法，Action 里面提交 mutation 方法， mutation 修改 state 上的状态。

## 为什么要有模块

因为 state 使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。所以将 store 分割成模块（module）。每个模块拥有自己的 state、mutations、actions、getters，甚至是嵌套子模块，从上至下进行同样方式的分割。

## 严格模式

```javascript
const store = new Vuex.Store({
  strict: true
});
```

在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。
在 Vuex.Store 构造器选项中开启,如下

## 持久化存储解决方案

1. state 存入 localStorage, 每次执行 mutations 时，将修改的地方同步到 localStorage
2. `beforeunload` 事件（页面卸载之前）一次性将 state 存储在 localStorage
3. [vuex-persistedstate 插件](https://github.com/robinvdvleuten/vuex-persistedstate)

## 原理

1. 通过 `Vue.mixin({beforeCreate: initVuex})` 将 $store 挂载到所有实例上
2. 将用户传入的 state 通过 `new Vue()` 的方式，将其变为响应式
3. 通过 `Object.defineProperty` 给 getter 增加响应式

::: details vuex [源码](https://www.bilibili.com/video/BV1TB4y1T7Vx?spm_id_from=333.337.search-card.all.click&vd_source=90f72d18968e9c13d70200bc4fd4291e)

```javascript
let Vue;
const _forEach = (obj, callback) => {
  Object.keys(obj).forEach(key => {
    callback(key, obj[key]);
  });
};
class ModuleConnection {
  constructor(options) {
    this.register([], options);
  }
  register(path, rootModule) {
    let newModule = {
      _raw: rootModule,
      _children: {},
      state: rootModule.state
    };
    if (path.length === 0) {
      this.root = newModule; //注册根模块，一开始传进来的模块
    } else {
      path.slice(0, -1).reduce((root, current) => {
        return this.root._children[current];
      }, this.root);
      this.root._children[path[path.length - 1]] = newModule;
    }
    //如果这个模块还有其他的子模块的话，递归注册模块
    if (rootModule.modules) {
      _forEach(rootModule.modules, (moduleName, module) => {
        this.register(path.concat(moduleName), module);
      });
    }
  }
}
const installModule = (store, state, path, rootModule) => {
  if (path.length > 0) {
    let parent = path.slice(0, -1).reduce((state, current) => {
      return state[current];
    }, state);
    Vue.set(parent, path[path.length - 1], rootModule.state);
  }

  let getters = rootModule._raw.getters;
  if (getters) {
    //
    _forEach(getters, (getterName, fn) => {
      Object.defineProperty(store.getters, getterName, {
        get: () => {
          return fn(rootModule.state);
        }
      });
    });
  }

  let mutations = rootModule._raw.mutations;
  if (mutations) {
    _forEach(mutations, (mutationName, fn) => {
      let arr =
        store.mutations[mutationName] || (store.mutations[mutationName] = []);
      arr.push(payload => {
        fn(rootModule.state, payload);
      });
    });
  }

  let actions = rootModule._raw.actions;
  if (actions) {
    _forEach(actions, (actionsName, fn) => {
      let arr = store.actions[actionsName] || (store.actions[actionsName] = []);
      arr.push(payload => {
        fn(store, payload);
      });
    });
  }

  _forEach(rootModule._children, (moduleName, module) => {
    installModule(store, state, path.concat(moduleName), module);
  });
};
class Store {
  constructor(options) {
    this._s = new Vue({
      data() {
        return {
          state: options.state //把state变成可监控的对象
        };
      }
    });
    this.getters = {};
    this.mutation = {};
    this.actions = {};
    // 把getters属性定义到 this.getters中，并根据状态的变化，重新执行此函数
    // _forEach(getters, (getterName, value) => {
    //     Object.defineProperty(this.getters, getterName, {
    //         get: () => {
    //             return value(this.state)
    //         },
    //         enumerable: true
    //     });
    // });

    // let mutations = options.mutations || {};
    // // this.mutations = {};
    // _forEach(mutations, (mutationName, value) => {
    //     // 先把用户传过来的mutation放到store上
    //     this.mutations[mutationName] = (payload) => {
    //         value.call(this, this.state, payload);
    //     }
    // })

    // let actions = options.actions || {};
    // // this.actions = {};
    // _forEach(actions, (actionName, value) => {
    //     this.actions[actionName] = (payload) => {
    //         value.call(this, this, payload);
    //     }
    // })
    //vuex模块化
    this.modules = new ModuleConnection(options);
    installModule(this, this.state, [], this.modules.root);
  }
  commit = (type, payload) => {
    this.mutation[type].forEach(fn => fn(payload));
  };
  dispatch = (type, payload) => {
    this.actions[type].forEach(fn => fn(payload));
  };
  get state() {
    return this._s.state;
  }
}
const install = _Vue => {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      //需要给每个组件都注册一个this.$store的属性
      //需要判断是父组件还是子组件，如果是子组件，应该吧父组件的store增加给子组件
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store;
      } else {
        this.$store = this.$parent && this.$parent.$store;
      }
    }
  });
};
//使用的时候是这样的
// export default new Vuex.Store({
//     modules:{},
//     state:{},
//     actions:{},
//     getters:{},
//     mutations:{}
// })
// new Vue({
//     store
// })
export default {
  install,
  Store
};
```

:::

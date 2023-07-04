class Publisher {
  constructor() {
    this.topics = {};
  }

  subscribe(k, cb) {
    if (!this.topics[k]) {
      this.topics[k] = [];
    }
    this.topics[k].push(cb);
  }

  publish(k, ...args) {
    if (Array.isArray(this.topics[k])) {
      this.topics[k].forEach(cb => cb.apply(null, args));
    }
  }

  unsubscribe(k) {
    this.topics[k].length = [];
  }
}

const publisher = new Publisher();

publisher.subscribe('name', name => {
  console.log('name is ', name);
});

publisher.subscribe('name', name => {
  console.log('name1 is ', name);
});

publisher.subscribe('age', age => {
  console.log('age is ', age);
});

publisher.subscribe('age', age => {
  console.log('age1 is ', age);
});

publisher.publish('name', 'limy'); //name is  limy; name1 is  limy
publisher.publish('age', '18'); // age is  18; age1 is  18

publisher.unsubscribe('age');

publisher.publish('name', 'limy'); // name is  limy; name1 is  limy
publisher.publish('age', '18'); //

class EventEmitter {
  constructor() {
    this._events = {};
  }
  on(k, handler) {
    if (!this._events[k]) {
      this._events[k] = [];
    }
    this._events[k].push(handler);
  }

  off(k, handler) {
    if (!Array.isArray(this._events[k])) return;
    const idx = this._events[k].indexOf(handler);
    if (idx !== -1) {
      this._events[k].splice(idx, 1);
    }
  }

  emit(k, ...args) {
    if (!Array.isArray(this._events[k])) return;
    this._events[k].forEach(handler => handler.apply(this, args));
  }

  once(k, handler) {
    if (!this._events[k]) {
      this._events[k] = [];
    }
    const fn = (...args) => {
      handler.apply(this, args);
      this.off(k, fn);
    };
    this.on(k, fn);
  }
}

const events = new EventEmitter();
console.log(`------------------EventEmitter-----------------`);

function showName(name) {
  console.log(`showName `, name);
}

events.on('name', name => console.log('name is ', name));
events.on('name', showName);
events.once('name', name => console.log('once name is ', name));

events.emit('name', 'argName'); // name is  argName; showName  argName; once name is  argName
events.off('name', showName);
events.emit('name', 'argName'); // name is  argName

class Subject {
  constructor() {
    this.observers = [];
  }

  add(observer) {
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach(ob => ob.update());
  }

  delete(ob) {
    for (let i = 0; i < this.observers.length; i++) {
      if (this.observers[i] === ob) {
        this.observers.splice(i, 1);
      }
    }
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  update() {
    console.log(`[observer] name is`, this.name);
  }
}

const sub = new Subject();
const ob1 = new Observer('ob1');
const ob2 = new Observer('ob2');

sub.add(ob1);
sub.add(ob2);
sub.notify(); //[observer] name is ob1; [observer] name is ob2

sub.delete(ob1);
sub.notify(); //[observer] name is ob2

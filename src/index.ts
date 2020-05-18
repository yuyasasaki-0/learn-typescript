import { cpus } from 'os';

const sayHello = (name: string): void => {
  console.log('Hello, ' + name);
};

const myName = 'yuya';
sayHello(myName);

interface Queue<TP> {
  data: TP[];
  push: (t: TP) => void;
  pop: () => TP | undefined;
}

type Monkey = {
  name: string;
  color: string;
};

interface NewMonkey extends Monkey {
  name: string;
  color: string;
}

class MonkeyQueue implements Queue<Monkey> {
  data: Array<Monkey>;

  constructor() {
    this.data = [];
  }

  push(obj: Monkey): void {
    this.data.push(obj);
  }

  pop(): Monkey | undefined {
    return this.data.shift();
  }
}

const myQueue = new MonkeyQueue();

myQueue.push({ name: 'M1', color: 'red' });
myQueue.push({ name: 'M2', color: 'Green' });

myQueue.data.map(monkey => {
  sayHello(monkey.name);
});

const myMonkey = {};

class Job {
  public title: string;

  constructor(title: string) {
    this.title = title;
  }
}

type JobCollection = Array<Job>;

interface AnotherJobCollection extends Array<Job> {}

class OneMoreJobCollection extends Array<Job> {
  constructor() {
    super();
  }
}

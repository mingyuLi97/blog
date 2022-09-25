interface Visitor {
  visitCPU(cpu: CPU): void;
  visitHardDisk(hardDisk: HardDisk): void;
}

class UpdateVisitor implements Visitor {
  visitCPU(cpu: CPU): void {
    cpu.command = '1 + 1 = 2';
  }
  visitHardDisk(hardDisk: HardDisk): void {
    hardDisk.command = '记住 1 + 1 = 2';
  }
}

abstract class Hardware {
  command: string;
  constructor(command: string) {
    this.command = command;
  }
  public run() {
    console.log(this.command);
  }

  public abstract accept(visitor: Visitor);
}

class CPU extends Hardware {
  constructor(command: string) {
    super(command);
  }

  public accept(visitor: Visitor) {
    visitor.visitCPU(this);
  }
}

class HardDisk extends Hardware {
  constructor(command: string) {
    super(command);
  }
  public accept(visitor: Visitor) {
    visitor.visitHardDisk(this);
  }
}

class Robot {
  private hardwares: Hardware[] = [];

  constructor() {
    this.hardwares.push(new CPU('1 + 1 = 1'));
    this.hardwares.push(new HardDisk('记住 1 + 1 = 1'));
  }

  public run() {
    this.hardwares.forEach(hardware => hardware.run());
  }

  public accept(visitor: Visitor) {
    this.hardwares.forEach(hardware => hardware.accept(visitor));
  }
}

const robot = new Robot();
robot.run();

robot.accept(new UpdateVisitor());

robot.run();

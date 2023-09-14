class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public door: boolean;
  public key: Key;
  private tenants: Person[] = [];

  public comeIn(person: Person): void {
    if (this.door) this.tenants.push(person);
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  
  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    } else {
      console.log("invalid Key");
    }
  }
}

const key = new Key();

const house = new MyHouse();
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};

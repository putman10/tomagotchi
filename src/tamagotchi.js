export class Critter {
  constructor(name){
    this.name = name;
    this.hunger = 50;
    this.attention = 50;
    this.rest = 50;
    this.alive = true;
  }

  passTime() {
      this.hunger--;
      this.attention--;
      this.rest--;

  }

  sleep(){
    this.rest += 20;
  }

  feed(){
    this.hunger += 20;
  }

  entertain(){
    this.attention += 20;
  }

  isDead() {
    debugger;
    if (this.hunger <= 0 || this.rest <= 0 || this.attention <= 0){
      this.alive = false;
    }
    else {
      this.passTime();
    }
  }
}

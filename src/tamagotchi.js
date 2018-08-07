export class Critter {
  constructor(name){
    this.name = name;
    this.hunger = 5;
    this.attention = 5;
    this.rest = 5;
    this.alive = true;
  }

  passTime() {
      this.hunger--;
      this.attention--;
      this.rest--;

  }

  entertain(){
    this.attention += 20;
    this.hunger--;
    this.rest--;
  }

  rest(){
    this.attention --;
    this.hunger--;
    this.rest += 20;
  }

  feed(){
    this.attention --;
    this.hunger += 20;
    this.rest--;
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

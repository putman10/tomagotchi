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
    if (this.hunger <= 0 || this.rest <= 0 || this.attention <= 0){
      this.alive = false;
    }
    else {
      this.passTime();
    }
  }



//curl -X POST -H 'Content-type: application/json' --data '{"text":"Allow me to reintroduce myself!"}' https://hooks.slack.com/services/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

}

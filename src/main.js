import {Critter} from './tamagotchi';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#create-tomagotchi").submit(function(event){
    event.preventDefault();
    let name = $("#name").val();
    let newCritter = new Critter(name);

    setInterval(function(){
      newCritter.isDead();
      if(newCritter.alive == false){
        alert("DEAD");
        clearInterval();
      }
    }, 2000);

    $("#feed").submit(function(event){
      event.preventDefault();
      newCritter.feed();
    })

    $("#rest").submit(function(event){
      event.preventDefault();
      newCritter.rest();
    })

    $("#play").submit(function(event){
      event.preventDefault();
      newCritter.entertain();
    })
  });
});

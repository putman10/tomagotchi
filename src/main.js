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
    let countDown = setInterval(deathChecker, 2000);

    function deathChecker() {
      newCritter.isDead();
      $("#restText").text(newCritter.rest);
      $("#feedText").text(newCritter.hunger);
      $("#playText").text(newCritter.attention);
      if(newCritter.alive == false){
        alert("DEAD");
        stopCountdown();
      }
    }

    function stopCountdown(){
      clearInterval(countDown);
    }

    $("#rest").click(function(){
      newCritter.sleep();
      $("#restText").text(newCritter.rest);
    })

    $("#feed").click(function(){
      newCritter.feed();
      $("#feedText").text(newCritter.hunger);
    })

    $("#play").click(function(){
      newCritter.entertain();
      $("#playText").text(newCritter.attention);
    })
  });
});

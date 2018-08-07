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
    var slackURL= "https://hooks.slack.com/services/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";
    var textForMessage = "Hello Javascript class my name is " + name + ". Will you play with me?";
    var slackMessage= {"text": textForMessage};
    messageSlack(slackURL, slackMessage);

    function messageSlack(url, payload) {
    $.post(url,JSON.stringify(payload), function(data){
      $('result').text(data);
    })
  }

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

import {Critter} from './tamagotchi';
import {SlackChannel} from './slack';
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
    var textForMessage = `Hello Javascript class my name is ` + name +`Will you feed me? My hunger is ` + newCritter.hunger +` Will you play with me?  My boredom is ` + newCritter.attention +` Will you put me to sleep, my fatigue is ` + newCritter.rest;
    var slackMessage= {"text": textForMessage,
    "attachments": [
        {
            "text": "Take care of me.",
            "fallback": "You are unable to play with me right now.",
            "callback_id": "wopr_game",
            "color": "#3AA3E3",
            "attachment_type": "default",
            "actions": [
                {
                    "name": "play",
                    "text": "Play",
                    "type": "button",
                    "value": "play"
                },
                {
                    "name": "rest",
                    "text": "Rest",
                    "type": "button",
                    "value": "rest"
                },
                {
                    "name": "rest",
                    "text": "Rest",
                    "type": "button",
                    "value": "rest"
                },
					{
                    "name": "neglect",
                    "text": "Neglect",
                    "style": "primary",
                    "type": "button",
                    "value": "neglect",
                    "confirm": {
                        "title": "Are you sure?",
                        "text": "Why are you so full of hate? Are you trying to kill me?",
                        "ok_text": "Yes",
                        "dismiss_text": "No"
                    }
                }
            ]
        }
    ]
  };
    messageSlack(slackURL, slackMessage);

    function messageSlack(url, payload) {
    $.post(url,JSON.stringify(payload), function(data){
      $('result').text(data);
    })
  }

  let newSlackChannel = new SlackChannel();  // create instance of WeatherService class
  let slackPromise = newSlackChannel.getSlackCommand();  // call the instance method and pass in user input

  slackPromise.then(function(response) {
    let body = JSON.parse(response);
console.log(body);
  }, function(error) {
console.log(error);
  });


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

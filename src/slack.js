export class SlackChannel {
  getSlackCommand() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://epicodus2018.slack.com/api/channels.history?token=xoxp-368357288052-369670835060-412416215072-272ddbd6cf915bd70ca2a751b07cb643&amp;channel=GC4AUDJMR`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

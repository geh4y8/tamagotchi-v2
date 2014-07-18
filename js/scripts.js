var Tamagotchi = {
  initialize: function(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  },
  timePasses: function(){
    this.foodLevel-=1,
    this.sleepLevel -=1,
    this.activityLevel -=1

  },
  isAlive: function(){
    if(this.foodLevel > 0 || this.sleepLevel > 0 || this.activityLevel > 0) {
      return true;
    } else {
      return false;
    }
  }
}

$(document).ready(function(){
  var test = Object.create(Tamagotchi);
  test.initialize("inputName")
  //test.name= "inputName";
  $("#feed-me").click(function(){
    test.foodLevel +=1;
  });
  $("#play-me").click(function(){
    test.foodLevel +=1;
  });
  $("#sleep-me").click(function(){
    test.foodLevel +=1;
  });

  var interval = window.setInterval(function() {
    console.log(test.foodLevel);
    test.timePasses();
    if (!test.isAlive()) {
      window.clearInterval(interval);
      alert('hey, you killed it, dude :(')
    }
  }, 1000)


console.log(test.foodLevel)

})

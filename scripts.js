window.addEventListener("load", function(){
  let posUpDown=0;
  let posRightLeft=0;

  // control buttons
  let takeoff = document.getElementById("takeoff");
  let landing = document.getElementById("landing");
  let missionAbort = document.getElementById("missionAbort");

// direction buttons
  let up = document.getElementById("up");
  let down = document.getElementById("down");
  let right = document.getElementById("right");
  let left = document.getElementById("left");

// takeoff
takeoff.addEventListener("click", function(event){
  if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
     document.getElementById("flightStatus").innerText="Shuttle in flight";
     document.getElementById("shuttleBackground").style.backgroundColor="blue";
     document.getElementById("spaceShuttleHeight").innerHTML=(Number(document.getElementById("spaceShuttleHeight").innerHTML)+10000).toString();
   }
});

// land
landing.addEventListener("click", function(event){
  alert("The shuttle is landing. Landing gear engaged.");
  document.getElementById("flightStatus").innerText="The shuttle has landed";
  document.getElementById("shuttleBackground").style.backgroundColor="green";
  document.getElementById("spaceShuttleHeight").innerHTML="0";
  posUpDown=0;
  posRightLeft=0;
  document.getElementById("rocket").style.top="0px";
  document.getElementById("rocket").style.left="0px";
});

// Abort mission
missionAbort.addEventListener("click", function(event){
  if (window.confirm("Confirm that you want to abort the mission.")) {
     document.getElementById("flightStatus").innerText="Mission aborted.";
     document.getElementById("shuttleBackground").style.backgroundColor="green";
     document.getElementById("spaceShuttleHeight").innerHTML="0";
     posUpDown=0;
     posRightLeft=0;
     document.getElementById("rocket").style.top="0px";
     document.getElementById("rocket").style.left="0px";
   }
});

// directions
up.addEventListener("click", function(event){
  posUpDown-=10;
  if (Number(document.getElementById("spaceShuttleHeight").innerHTML)<10000){
  document.getElementById("rocket").style.position="relative";
  document.getElementById("rocket").style.top=posUpDown.toString()+"px";
  document.getElementById("spaceShuttleHeight").innerHTML=(Number(document.getElementById("spaceShuttleHeight").innerHTML)+10000).toString();
  } else {
  posUpDown+=10;
  }
});

down.addEventListener("click", function(event){
  posUpDown+=10;
  if (Number(document.getElementById("spaceShuttleHeight").innerHTML)>-250000){
  document.getElementById("rocket").style.position="relative";
  document.getElementById("rocket").style.top=posUpDown.toString()+"px";
  document.getElementById("spaceShuttleHeight").innerHTML=(Number(document.getElementById("spaceShuttleHeight").innerHTML)-10000).toString();
  } else {
  posUpDown-=10;
  }
});

right.addEventListener("click", function(event){
  posRightLeft+=10;
  if (posRightLeft<=250){
  document.getElementById("rocket").style.position="relative";
  document.getElementById("rocket").style.left=posRightLeft.toString()+"px";
  } else {
  posRightLeft-=10;
  }
});

left.addEventListener("click", function(event){
  posRightLeft-=10;
  if (posRightLeft>=-250){
  document.getElementById("rocket").style.position="relative";
  document.getElementById("rocket").style.left=posRightLeft.toString()+"px";
} else {
  posRightLeft+=10;
}
});

});

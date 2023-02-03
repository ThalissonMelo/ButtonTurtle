let turtle = null

function createTurtleElement() {
  let moveSprite = new Image();
  moveSprite.src = 'https://i.imgur.com/EoFhQWR.png';

  let idle_sprite = new Image();
  idle_sprite.src = 'https://i.imgur.com/cTNlvjD.png';

  turtle = document.getElementById('canvas').createTurtle(idle_sprite, 1, moveSprite, 3, 0.1)
}

document.getElementById("start-turtle").addEventListener("click", function(){
  createTurtleElement();
});

document.getElementById("forward-50").addEventListener("click", function(){
  turtle.forward(50)
});

document.getElementById("right-90").addEventListener("click", function(){
  turtle.right(90)
});

document.getElementById("left-90").addEventListener("click", function(){
  turtle.left(90)
});

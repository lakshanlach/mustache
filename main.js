noseX=0
noseY=0

function preload() {
mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup() {
    Canvas = createCanvas(1024 , 1024)
    Canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()

    posenet = ml5.poseNet(video , modelLoaded)
    posenet.on("pose" , gotPoses)
}

function modelLoaded() {
    console.log('modelloaded')
}

function gotPoses(results) {
  if (results.length > 0) {
      console.log(results)
      noseX = results[0].pose.nose.x-15
      noseY = results[0].pose.nose.y
  }
}

function draw() {
    image(video, 0, 0, 300, 300)
    image(mustache, noseX, noseY, 30, 30)
}

function take_snapshot() {
    save("mustache or lipstick.png")
}

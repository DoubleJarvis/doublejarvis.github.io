document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello from js")
  console.log("Parallaxing...")
  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene, {
    relativeInput: true
  });
  parallaxInstance.friction(0.2, 0.2);
})
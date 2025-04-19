function stopScroll() {
    document.getElementById("marquee").stop();
  }
  
  function startScroll() {
    document.getElementById("marquee").start();
  }
  
  document.getElementById("linkSelect").addEventListener("change", function () {
    if (this.value !== "") {
      window.open(this.value, "_blank");
    }
  });
  
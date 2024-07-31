class Column {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.queue = [];
  }
  moveTo(loc, yoffset = 1, framecount = 20) {
    for (let index = 1; index <= framecount; index++) {
      var t = index / framecount;
      var u = Math.sin(t * Math.PI);

      this.queue.push({
        x: lerp(this.x, loc.x, t),
        y: lerp(this.y, loc.y, t) + ((u * this.width) / 2) * yoffset,
      });
    }
  }

  draw(ctx) {
    let changed = false;
    if (this.queue.length > 0) {
      var { x, y } = this.queue.shift();
      this.x = x;
      this.y = y;
      changed = true;
    }
    var left = this.x - this.width / 2;
    var top = this.y - this.height;
    var right = this.x + this.width / 2;

    ctx.beginPath();
    ctx.fillStyle = "rgb(127, 246, 77)";
    ctx.moveTo(left, top);
    ctx.lineTo(left, this.y);

    ctx.ellipse(
      this.x,
      this.y,
      this.width / 2,
      this.width / 4,
      0,
      Math.PI,
      Math.PI * 2,
      true
    );
    ctx.lineTo(right, this.y);
    ctx.ellipse(
      this.x,
      top,
      this.width / 2,
      this.width / 4,
      0,
      0,
      Math.PI * 2,
      true
    );
    ctx.fill();
    ctx.stroke();
    return changed;
  }
}

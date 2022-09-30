export function drawArrow(ctx, fromx, fromy, tox, toy, arrowWidth, color){
  var headlen = 10;
  var angle = Math.atan2(toy-fromy,tox-fromx);

  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;

  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);
  ctx.lineWidth = arrowWidth;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(tox, toy);
  ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),
             toy-headlen*Math.sin(angle-Math.PI/7));

  ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/7),
             toy-headlen*Math.sin(angle+Math.PI/7));

  ctx.lineTo(tox, toy);
  ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/7),
             toy-headlen*Math.sin(angle-Math.PI/7));

  ctx.stroke();
  ctx.fill();
  ctx.closePath();
}

export function drawRefLine(ctx, vetor, escala, distanciaEscala, planW, planH) {
    ctx.beginPath();
    ctx.strokeStyle = vetor.color;
    ctx.setLineDash([18, 18]);
    ctx.lineDashOffset = -18;
    ctx.lineWidth = 1;
    ctx.moveTo(planW/2 + (distanciaEscala * vetor.i) / escala, planH/2 - (distanciaEscala * vetor.j) / escala);
    ctx.lineTo(planW/2 + (distanciaEscala * vetor.i) / escala, planH/2);
    ctx.moveTo(planW/2 + (distanciaEscala * vetor.i) /escala, planH/2 - (distanciaEscala * vetor.j) / escala);
    ctx.lineTo(planW/2, planH/2 - (distanciaEscala * vetor.j) / escala);
    ctx.stroke();
    ctx.closePath();
}
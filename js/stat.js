'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_STYLE = '16px PT Mono';
var TEXT_HEIGHT = 20;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;

  ctx.beginPath();
  ctx.moveTo(x, CLOUD_HEIGHT + y);
  ctx.quadraticCurveTo(-CLOUD_WIDTH * 4.8 / 100 + x, CLOUD_HEIGHT * 74.1 / 100 + y, CLOUD_WIDTH * 5.5 / 100 + x, CLOUD_HEIGHT * 55.6 / 100 + y);
  ctx.quadraticCurveTo(CLOUD_WIDTH * 11.9 / 100 + x, CLOUD_HEIGHT * 7.4 / 100 + y, CLOUD_WIDTH * 42.9 / 100 + x, CLOUD_HEIGHT * 14.8 / 100 + y);
  ctx.quadraticCurveTo(CLOUD_WIDTH * 73.8 / 100 + x, -CLOUD_HEIGHT * 7.4 / 100 + y, CLOUD_WIDTH * 90.5 / 100 + x, CLOUD_HEIGHT * 29.6 / 100 + y);
  ctx.quadraticCurveTo(CLOUD_WIDTH * 119 / 100 + x, CLOUD_HEIGHT * 55.6 / 100 + y, CLOUD_WIDTH + x, CLOUD_HEIGHT + y);
  ctx.fill();
  ctx.fillStyle = color;
  ctx.closePath();

};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getColor = function (name) {

  var color = 'rgba(255, 0, 0, 1)';

  if (name !== 'Вы') {
    color = 'hsl(255, ' + Math.floor(Math.random() * 101) + '%, 50%)';
  }

  return color;

};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = TEXT_STYLE;
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_WIDTH * 36 / 100, CLOUD_Y + CLOUD_HEIGHT * 22 / 100);
  ctx.fillText('Список результатов: ', CLOUD_X + CLOUD_WIDTH * 36 / 100, CLOUD_Y + CLOUD_HEIGHT * 30 / 100);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT + CLOUD_Y - GAP);
    ctx.fillStyle = getColor(names[i]);
    var result = Math.round((BAR_MAX_HEIGHT * times[i]) / maxTime);
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_HEIGHT + CLOUD_Y - GAP - TEXT_HEIGHT - result, BAR_WIDTH, result);
  }

};

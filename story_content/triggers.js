function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6GyU9YhMQ0M":
        Script1();
        break;
      case "6n6lOXDMKNX":
        Script2();
        break;
      case "5aV57ngE31L":
        Script3();
        break;
      case "6bHUAZ8p2rV":
        Script4();
        break;
      case "5lVxNoyvtCi":
        Script5();
        break;
      case "6mFExfJQTl1":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('5YREkg8u525');
const duration = 2000;
const easing = 'ease-in-out';
const id = '5acRnqLbgT9';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5YREkg8u525');
const duration = 2000;
const easing = 'ease-out';
const id = '6EnklHKKF6U';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5YREkg8u525');
const duration = 2000;
const easing = 'ease-in-out';
const id = '5acRnqLbgT9';
const shrinkAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 - shrinkAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  const target = object('5YREkg8u525');
const duration = 2000;
const easing = 'ease-out';
const id = '6EnklHKKF6U';
const growAmount = 0;
player.addForTriggers(
id,
target.animate([
{ scale: `${1 + growAmount}` }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  const target = object('5rd3Ogu6zVh');
const duration = 4000;
const easing = 'ease-out';
const id = '5t3c5MC4Ztc';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5rd3Ogu6zVh');
const duration = 4000;
const easing = 'ease-out';
const id = '5t3c5MC4Ztc';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};

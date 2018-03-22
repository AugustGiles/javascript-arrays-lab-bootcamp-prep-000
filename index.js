const app = "I don't do much.";

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"];
  return kittens;
}

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unpush(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0,2);
}

function removeFirstKitten() {
  return kittens.slice(-2);
}
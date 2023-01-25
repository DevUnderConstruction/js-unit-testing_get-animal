export function getAnimal(pet) {
  if (pet === "cats") {
    return "I totally love " + pet + "!";
  } else if (pet === "dogs") {
    return "I like " + pet + "!";
  }
  return "I do not like animals at all!";
}

console.log(getAnimal("cats"));

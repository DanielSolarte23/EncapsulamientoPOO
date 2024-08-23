function frontDoorPassword(word) {

    return word[0].toUpperCase() + word.slice(1).toLowerCase() + ", please";
  }

  console.log(frontDoorPassword("HOLA"));
  
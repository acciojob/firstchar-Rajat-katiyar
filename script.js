function firstChar(text) {
  // Trim leading and trailing spaces and iterate through the string
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      return text[i]; // Return the first non-space character
    }
  }
  return ''; // Return an empty string if no non-space character is found
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
// const text = prompt("Enter text:");
alert(firstChar(text));

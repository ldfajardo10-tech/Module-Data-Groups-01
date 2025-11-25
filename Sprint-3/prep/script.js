  //select the elements from the html file with query selector calling the id (#)
  const textarea = document.querySelector("#comment-input");
  const info = document.querySelector("#character-limit-info");
//get the limit of characters 
  const maxLength = Number(textarea.getAttribute("maxlength"));
// add the event listener with the "input" for typing in a text field.
  textarea.addEventListener("input", () => {
    const typed = textarea.value.length;
    const remaining = maxLength - typed;
    //create the string and print the result of the remaining characters
    info.textContent = `You have ${remaining} characters remaining`;
  });


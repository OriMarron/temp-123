import "./styles.css";

const choices = document.querySelectorAll("[aria-keyshortcuts]");

const handleKeyDown = (event) => {
  const keyCode = event.keyCode;
  const character = String.fromCharCode(keyCode);
  const choice = [...choices].find(
    (c) => c.getAttribute("aria-keyshortcuts") === character.toLowerCase()
  );
  // TODO: Select "choice"
  if (choice) {
    console.log(choice);
    // dsfgsdgdfs
    // sdgdsg
    // asdfsafda
  }
};

document.addEventListener("keydown", handleKeyDown);

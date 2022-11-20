function show_friends() {
  fetch("/friends")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

window.onload = show_friends();
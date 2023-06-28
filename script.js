const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");

const receiver = document.getElementById("receiver");

receiver.innerHTML = name;

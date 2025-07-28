function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.token) {
      console.log("Token:", data.token);
      alert("Login successful!");
    } else {
      alert("Login failed");
    }
  })
  .catch(err => console.error(err));
}

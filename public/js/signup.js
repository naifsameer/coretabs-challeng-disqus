/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// get signup form data
const signupData = () => {
  const inputVale = (id) => document.getElementById(id).value;
  const username = inputVale("input-username");
  const email = inputVale("input-email");
  const password = inputVale("input-password");
  return { username, email, password };
};

// send the data by fetch
const signupApi = () => {
  document.querySelector("#signup-btn").onclick = async (e) => {
    e.preventDefault();
    const formData = signupData();
    const response = await postData("/user/new", formData);
    console.log(response);

    if (response.result.ok) {
      // set the user to the session
      setToSession(response.username, response.id);
      // hide the signup form
      // TODO improve the style
      const element = document.querySelector(".signup-container");
      element.innerHTML = `
        <div style="color: green; font-size: 1.2em">
          You are now user in our disqus
        </div>
      `;
      setTimeout(() => {
        element.style.display = "none";
      }, 2000);
    }
  };
};

// sign up form container
const signup = () => {
  // TODO delete default value of the input
  const formContainer = `
<form>
  <div class="input-username">
    <input required type="text" name="username" id="input-username" value="test">
    <label for="input-username">User Name</label>
  </div>
  <div class="input-email">
    <input required type="email" name="email" id="input-email" value="test@gmail.com">
    <label for="input-email">Email</label>
  </div>
  <div class="input-password">
    <input required type="password" name="password" id="input-password" value="testpassowrd">
    <label for="input-password">Password</label>
  </div>
  <button id="signup-btn">Sing in</button>
</form>
`;
  document.querySelector(".signup-container").innerHTML = formContainer;
  signupApi();
};

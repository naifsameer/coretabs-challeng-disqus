/* eslint-disable no-lonely-if */
/* eslint-disable no-undef */
// get login form data
const loginData = () => {
  const inputVale = (id) => document.getElementById(id).value;
  const email = inputVale("input-login-email");
  const password = inputVale("input-login-password");
  return { email, password };
};

// send the data by fetch
const loginApi = () => {
  document.querySelector("#login-btn").onclick = async (e) => {
    e.preventDefault();
    const formData = loginData();
    // eslint-disable-next-line no-undef
    const response = await postData("/user/login", formData);
    // login element
    const element = document.querySelector(".login-container");
    console.log(response);

    if (response.ok) {
      // set the user to the session
      setToSession(response.username, response.id);
      // hide the signup form
      // TODO improve the style and add valid to the form
      element.innerHTML = `
        <div style="color: green; font-size: 1.2em">
          welcome back to disqus family
        </div>
      `;
      setTimeout(() => {
        element.style.display = "none";
      }, 2000);
    } else { // TODO improve the style here
      if (response.msg === "wrong email") {
        // email wrong
        element.children[0][0].style.border = "1px solid red";
      } else {
        // password wrong
        element.children[0][1].style.border = "1px solid red";
      }
    }
  };
};

// sign up form container
const login = () => {
  // TODO delete default value of the input
  const formContainer = `
<form>
  <div class="input-email">
    <input required type="email" name="email" id="input-login-email" value="test@gmail.com">
    <label for="input-email">Email</label>
  </div>
  <div class="input-password">
    <input required type="password" name="password" id="input-login-password" value="testpassowrd">
    <label for="input-password">Password</label>
  </div>
  <button id="login-btn">Sign in</button>
</form>
`;
  document.querySelector(".login-container").innerHTML = formContainer;
  loginApi();
};

login();

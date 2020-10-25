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
    console.log(response);
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

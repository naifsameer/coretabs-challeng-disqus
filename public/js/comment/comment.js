// eslint-disable-next-line quotes
// eslint-disable-next-line no-unused-vars
/** fetch data
 * @param {string} url
 * @param {object} data object
 * @returns {object} "status code" and "ok ==> ture || false"
*/
const postData =  async (url = "", data) => {
  if (!url) throw new Error("url is required");
  if (!data) throw new Error("data is required");

  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify(data),
  });
  console.log(response);
  const { status, ok } = response;
  return { status, ok };
};

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

// check the user if he sing in
const checkUser = (userID) => {
  // localStorage.setItem(userID, "some vale here");
  if (!localStorage.getItem(userID)) {
    signup();
  } else {
    window.console.table("your post done ");
  }
  console.log(localStorage);
};

checkUser("14112225");

// eslint-disable-next-line prefer-const
let sendBtn = document.querySelector("#post");

sendBtn.onclick = function (e) {
  e.preventDefault();
  const textarea = document.querySelector("textarea").value;
  // postData("/new", { textarea })
  //   .then((data) => console.log(JSON.stringify(data)))
  //   // JSON-string from `response.json()` call
  //   .catch((error) => console.error(error));
  console.log(textarea);
};

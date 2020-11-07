/* eslint-disable no-undef */
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

// check the user if he login
const checkUser = () => {
  const s = session.getItem("userId");
  if (s) {
    console.log("user is login");
    session.clear();
  } else {
    console.log("user not login or logout");
    signup();
  }
};

checkUser();

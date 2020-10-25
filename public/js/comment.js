/* eslint-disable no-undef */
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

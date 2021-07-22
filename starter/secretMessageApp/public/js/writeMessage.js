const messageRef = firebase.database().ref();

messageRef.push({
   message:"This was made with Javascript",
   passcode: "Javascript"
});
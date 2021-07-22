// const getMessages = () => {
//     const messagesRef = firebase.database().ref();
//     messagesRef.on('value', (snapshot) => {
//        const data = snapshot.val();
//        console.log(data);

//        for(let key in data) {
//            const message = data[key];
//            console.log(message);
//            if(myPass == message.passcode){
//             renderMessage(message);
//        }}
//     });
// }
// const findMessage = (myPass) => {
//     const messagesRef = firebase.database().ref();
//     const passcode = document.querySelector("#passcode").value;
//     messagesRef.on('value', (snapshot) => {
//        const data = snapshot.val();
//        console.log(data);

//        for(let key in data) {
//            const message = data[key];
//            console.log(message);
//            if(myPass == message.passcode){
//             renderMessage(message);
//        }}
//     });
// }

// document.querySelector("#viewMsg").addEventListener("click", getMessages);
// findMessage();


const display = (messageObject) => {
 console.log(messageObject);
 document.querySelector("#message").innerHTML = messageObject.message;
};

document.querySelector("#viewMsg").addEventListener("click", (e) => {
    const userPasscodeGuess = document.querySelector("#passcode").value;

    const messageRef = firebase.database().ref();
    messageRef.on("value", (snapshot) => {
          const data = snapshot.val();
          for(let key in data) {
              if(data[key].passcode == userPasscodeGuess){
                  display(data[key]);
              }
          }
        })

    });

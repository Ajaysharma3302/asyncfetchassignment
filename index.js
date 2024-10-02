let dummy_object = {
  id: 1,
  name: "ajay",
  email: "sharma0@gamil.com",
};

function getUserData(userID, callback) {
  // Use setTimeout to delay 2 sec
  setTimeout(() => {
    callback(dummy_object); // Pass the object to the callback
  }, 2000);
}

function displayUser(userData) {
  console.log(userData);
}

// Call getUserData with the userID and the displayUser (callback)
getUserData(dummy_object.id, displayUser);

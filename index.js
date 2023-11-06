function submit(){
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;

  var msg;

  msg = `<b>${name}</b>Thnak you for joining with us,we will contact with you through  email <b>${email}</b> and phone number <b>${phone}</b>`


  document.getElementById("content").innerHTML = msg;
}
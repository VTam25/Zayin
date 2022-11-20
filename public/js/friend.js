function show_friends() {
    fetch("/friends")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        const friends_arr = data[0].friends;
        const friendUL = document.getElementById("friends_list");
        console.log(friends_arr);

        for(const entry of friends_arr){
          console.log(entry);
          const newFriend = document.createElement("li");
          newFriend.classList.add("friend");
          friendUL.appendChild(newFriend);

          const newDiv = document.createElement("div");
          newDiv.classList.add("friend_div");

          const pic = document.createElement("img");
          pic.src = "../images/profilepicture.png";
          pic.id = ("profile");
          newDiv.appendChild(pic);

          const link = document.createElement("a");
          link.href = "../html/movie.html";
          link.innerHTML = entry.f_name;
          newDiv.appendChild(link);

          const brk = document.createElement("br");
          newDiv.appendChild(brk);

          newFriend.appendChild(newDiv);
        }
      });
  }

  window.onload = show_friends();
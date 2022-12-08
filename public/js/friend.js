function show_friends() {
    fetch("/friends")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data[0]);
        const friends_arr = data[0].friends;
        const friendUL = document.getElementById("friends_list");
        //console.log(friends_arr);

        for(const entry of friends_arr){
          //console.log(entry);
          const newFriend = document.createElement("li");
          newFriend.classList.add("friend");
          friendUL.appendChild(newFriend);

          const newDiv = document.createElement("div");
          newDiv.classList.add("friend_div");

          const pic = document.createElement("img");
          pic.src = "../images/profilepicture.png";
          pic.id = ("profile");
          newDiv.appendChild(pic);

          const text = document.createElement("a");
          text.innerHTML = entry.f_name;
          newDiv.appendChild(text);

          const brk = document.createElement("br");
          newDiv.appendChild(brk);

          newFriend.appendChild(newDiv);
        }
      });
  }

  window.onload = show_friends();

  const update = document.getElementById('add_btn');
  const search = document.getElementById('search_btn');

  update.addEventListener('click', () => {
    console.log("Clicked");
    const friend_name = document.getElementById("friend_name").value;
    console.log("in event");
    console.log(friend_name);
    fetch('/friends/add', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        f_name: friend_name,
        f_movies: []
      })
      }).then(res => {
        if (res.ok){
          return res.json();
        }
      })
      update.location.href = "../html/friends.html";
    });
  });


var counters = {};

function likePhoto(id) {
    if (!counters[id]) {
        counters[id] = 0;
    }
    counters[id]++;
    console.log(counters[id]);
    document.getElementById("likeCount" + id).innerHTML = counters[id];
}


var user = {
    username: "issaac.ss",
    name: "Isaac Salinas",
    posts: ["catPost1", "catPost2", "catPost3", "catPost4", "catPost4"],
    followers: ["James", "Bob", "Greg", "David", "Eve"],
    following: ["James", "Bob", "Greg", "David", "Eve"],
    profile_pic: "https://c.ndtvimg.com/2020-08/h5mk7js_cat-generic_625x300_28_August_20.jpg",
    bio: "Welcome to my Catstagram website",
    edit_profile: "Edit Profile"
    };

setTimeout(function(){ document.getElementById("username").innerHTML = user.username;}, 1000);
setTimeout(function(){ document.getElementById("name").innerHTML = user.name;}, 1000);
setTimeout(function(){ document.getElementById("posts").innerHTML = user.posts.length + " posts";}, 1000);
setTimeout(function(){ document.getElementById("followers").innerHTML = user.followers.length + " followers";}, 1000);
setTimeout(function(){ document.getElementById("following").innerHTML = user.followers.length + " following";}, 1000);
setTimeout(function(){ $("#profile_pic").attr("src", user.profile_pic);}, 1000);
setTimeout(function(){ document.getElementById("bio").innerHTML = user.bio;}, 1000);
setTimeout(function(){ document.getElementById("edit_profile").innerHTML = user.edit_profile;}, 1000);

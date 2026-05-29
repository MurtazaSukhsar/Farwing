const url = "https://www.blogger.com/feeds/4641752792856204932/posts/default?alt=json";

fetch(url)
  .then(res => {
    console.log("Status:", res.status);
    console.log("Headers:", Array.from(res.headers.entries()));
    return res.text();
  })
  .then(text => console.log("Text length:", text.length))
  .catch(err => console.error("Error:", err));

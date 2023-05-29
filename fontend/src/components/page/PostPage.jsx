import { useState } from "react";

function PostPage() {
  let [textPost, setTextPost] = useState({ title: "", text: "", date: null });
  let [file, setFile] = useState();
  const handleInput = (e) => {
    setTextPost({ ...textPost, [e.target.name]: e.target.value });
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePostPhoto = (e) => {
    if (file) {
      const now = Date.now();
      setTextPost({ ...textPost, date: now });
      const formData = new FormData();
      formData.append("file", file);
      formData.append("text", textPost);
      fetch(`http://localhost:8000/api/v1/media/post`, {
        method: "POST",
        body: formData,
      });
    }
  };
  return (
    <div>
      <h2>
        <form>
          <input type="file" name="filename" onChange={(e) => handleFile(e)} />
          <input
            type="text"
            name="tile"
            onInput={(e) => handleInput(e)}
            value={textPost.title}
            placeholder="title"
          />
          <input
            type="text"
            name="text"
            onInput={(e) => handleInput(e)}
            value={textPost.text}
            placeholder="text"
          />
          <button onClick={(e) => handlePostPhoto(e)}>Tạo</button>
        </form>
      </h2>
    </div>
  );
}

export default PostPage;

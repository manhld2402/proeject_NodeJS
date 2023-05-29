import { useEffect } from "react";
import CardPhoto from "../layout/CardPhoto";
import { useParams } from "react-router-dom";

function DetailPage() {
  //truyền vào photo_id
  let { id } = useParams();
  let photos = [
    { url: "/assits/image/coffe.jpg" },
    { url: "/assits/image/connan1.jpg" },
    { url: "/assits/image/connan2.jpg" },
    { url: "/assits/image/connan3.jpg" },
  ];
  //ở đây có user_id
  // useEffect(() => {
  //   fetch(`http://localhost:8000/api/v1/media`);
  // }, []);
  return (
    <div className="detailPage">
      <div>
        <img
          className="detailPhoto"
          src="/assits/image/connan1.jpg"
          alt="detailPhoto"
        />
        <div></div>
      </div>
      <div className="connectionPhoto">
        {photos.map((photo) => (
          <CardPhoto photo={photo} />
        ))}
      </div>
    </div>
  );
}

export default DetailPage;

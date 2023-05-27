import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardPhoto from "../layout/CardPhoto";
function HomePage() {
  let photos = [
    { url: "/assits/image/coffe.jpg" },
    { url: "/assits/image/connan1.jpg" },
    { url: "/assits/image/connan2.jpg" },
    { url: "/assits/image/connan3.jpg" },
    { url: "/assits/image/connan4.jpg" },
    { url: "/assits/image/connan5.jpg" },
    { url: "/assits/image/connan6.jpg" },
    { url: "/assits/image/connan7.jpg" },
    { url: "/assits/image/gau1.jpg" },
    { url: "/assits/image/gau2.jpg" },
    { url: "/assits/image/gau3.jpg" },
    { url: "/assits/image/gau4.jpg" },
    { url: "/assits/image/gau5.jpg" },
  ];
  const dispatch = useDispatch();
  // useEffect(() => {
  //   fetch(`http:localhost:8000/api/v1/photo`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       dispatch({ type: "LOAD_DATA", payload: data });
  //     });
  // }, []);
  const dataPhotos = useSelector((state) => state.dataPhotos);
  if (photos.length == 0) {
    return <div className="loader"></div>;
  } else {
    return (
      <div className="homePage">
        {photos.map((photo, index) => (
          <CardPhoto key={index} photo={photo} />
        ))}
      </div>
    );
  }
}

export default HomePage;

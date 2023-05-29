function CardPhoto({ photo }) {
  return (
    <div className="photoCard">
      <div className="mask"></div>
      <img className="photo" src={photo.url} alt="photo" />
    </div>
  );
}

export default CardPhoto;

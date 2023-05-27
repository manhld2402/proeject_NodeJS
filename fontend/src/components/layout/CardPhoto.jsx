function CardPhoto({ photo }) {
  return (
    <div className="photoCard">
      <img className="photo" src={photo.url} alt="photo" />
    </div>
  );
}

export default CardPhoto;

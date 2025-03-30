function Hero({ title, imageUrl, imageAlt }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={imageUrl} alt={imageAlt} />
    </div>
  );
}

export default Hero;

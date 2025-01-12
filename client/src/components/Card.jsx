const Card = ({ heading, details, image }) => {
    return (
        <section className="aside-fix">
            {image && <div>{image}</div>}
            <h2>{heading}</h2>
            <p>{details}</p>
        </section>
    )
};
  
export default Card;
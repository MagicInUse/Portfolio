import styles from './Card.module.css';

interface CardProps {
    heading: string;
    details: React.ReactNode;
    image?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ heading, details, image }) => {
    return (
        <section className={styles.card}>
            <h2>{heading}</h2>
            {image && <div className={styles.imageContainer}>{image}</div>}
            {details}
        </section>
    )
};
  
export default Card;
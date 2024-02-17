import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import styles from '../Favorite/Favorite.module.scss';
import { useSelector } from 'react-redux';
import { getFilteredCards, getFilteredCardsByFavorite } from '../../redux/store';
            

const Favorite = props => {
    const cards = useSelector(state => getFilteredCardsByFavorite(state, true));
    return (
        <>
        <PageTitle>Favorite</PageTitle>
        <article className={styles.column}>
            
            <ul className={styles.cards}>
                {cards.map(card =>
                    <Card
                        key={card.id} 
                        {...card}
                    />
                )}
            </ul>
        </article>
        </>
    )
}

export default Favorite;
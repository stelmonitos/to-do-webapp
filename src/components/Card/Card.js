import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
const Card = props => {

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(toggleCardFavorite(props.id));
    }

    return (
        <>
            <li className={styles.card}>{props.title}
                <button onClick={handleSubmit}><span className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)}/></button>
            </li>
        </>
    );
};

export default Card;
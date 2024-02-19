import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, deleteCard } from '../../redux/cardsReducer';
const Card = props => {

    const dispatch = useDispatch();

    const handleSubmit = () => {
        dispatch(toggleCardFavorite(props.id));
    }
    const handleDelete = () => {
        dispatch(deleteCard(props.id))
        console.log('delete', props.id);
    }
    return (
        <>
            <li className={styles.card}>
                {props.title}
                <div>
                    <button onClick={handleSubmit}><span className={clsx('fa fa-star-o', props.isFavorite && styles.isFavorite)}/></button>
                    <button onClick={handleDelete}><span className='fa fa-trash'></span></button>
                </div>
            </li>
        </>
    );
};

export default Card;
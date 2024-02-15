import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';

const SearchForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'UPDATE_SEARCHSTRING', payload: { searchString: e.target[0].value}});
    }

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." />
            <Button>
                <span className="fa fa-search"/>
            </Button>
        </form>
    );
};

export default SearchForm;
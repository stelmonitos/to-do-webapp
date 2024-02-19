import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';
import { useEffect } from 'react';

const SearchForm = () => {
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(updateSearchString(''));
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString( e.target[0].value ));
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
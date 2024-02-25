import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getColumnsByList } from '../../redux/columnsReducer';
import { getListById } from '../../redux/listsReducer';
import { useParams } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import { Navigate } from 'react-router-dom';

const List = () => {
    
    const { listId } = useParams();
    const columns = useSelector(lists => getColumnsByList(lists, listId));
    const listData = useSelector(lists => getListById(lists, listId));
    console.log(listData);
    if(!listData) return <Navigate to="/" />
        return (
            <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}</h2>
            </header>
                <p className={styles.description}>{listData.description}</p>
                <SearchForm />
                <section className={styles.columns}>
                {columns.map(column =>
                    <Column
                        key={column.id}
                        {...column}  
                    />
                )}
            </section>
            <ColumnForm listId={listId}/>
            </div>
        );
};

export default List;
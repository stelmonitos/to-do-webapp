import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import { useState } from "react";
import { addList } from "../../redux/store";
import styles from '../ColumnForm/ColumnForm.module.scss';

const ListForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
                <span>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
                <span>Description:</span><TextInput value={description} onChange={e => setDescription(e.target.value)}  />
                <Button>Add column</Button>
        </form>
    )
}

export default ListForm;
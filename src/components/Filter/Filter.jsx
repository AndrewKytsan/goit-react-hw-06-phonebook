import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from '../../store/phonebook/phonebook-selector';
import { changeFilter } from '../../store/phonebook/phonebook-actions';

import s from './Filter.module.scss';

function Filter() {
    const filterValue = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <form>
            <span className={s.filterLabel}>
                Find contacts by name
                <br />
                <input
                    className={s.filterInput}
                    type="text"
                    value={filterValue}
                    onChange={e => dispatch(changeFilter(e.target.value))}
                />
            </span>
        </form>
    );
}

export default Filter;

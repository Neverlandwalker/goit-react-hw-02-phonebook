import { PropTypes } from 'prop-types';
import { FilterWrap, FilterInput, FilterLabel } from 'components/FilterField/FilterField.styled';

export const FilterField = ({ value, onFilterChange }) => {
    return (
        <FilterWrap>
            <FilterLabel htmlFor="text">Find contacts by name</FilterLabel>
             <FilterInput
                type="text"
                name="filter"
                value={value}
                onChange={onFilterChange}
            />
        </FilterWrap>

    );
    
};

FilterField.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
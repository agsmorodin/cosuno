import React from 'react';

const Search = ({ filterValue, onSearch, placeholder }: {
    filterValue: string,
    onSearch: (_: string) => void,
    placeholder: string,
}) => {
    const onChange = (event: any) => onSearch(event.target.value);

    return (
        <div>
            <input
              className="form-control"
              type="text"
              value={filterValue}
              onChange={onChange}
              placeholder={placeholder}
            />
        </div>
    );
};

export default Search;

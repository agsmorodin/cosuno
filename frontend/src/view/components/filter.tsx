import React from 'react';

const Filter = ({
    items,
    onFilterChange,
}:
{
    items: {name: string; checked: boolean}[],
    onFilterChange: (_: string, __: boolean) => void
}) => {
    const handleOnChange = (event: any) => {
        const { target } = event;
        onFilterChange(target.name, target.checked);
    };

    return (
        <div className="filters-container">
            <p>Specialities:</p>
            <div className="form-check">
                {items.map((item) => (
                    <div key={item.name}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name={item.name}
                          checked={item.checked}
                          onChange={handleOnChange}
                        />
                        <label className="form-check-label" htmlFor={item.name}>{item.name}</label>
                    </div>
                    ))}
            </div>
        </div>
    );
};

export default Filter;

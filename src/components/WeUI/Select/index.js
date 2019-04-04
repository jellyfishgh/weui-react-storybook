import React from 'react'

const Select = ({ value, onChange, list }) => (
  <select
    className="weui-select"
    value={value}
    onChange={e => onChange(e.target.value)}
  >
    {list.map(({ label, value }) => (
      <option value={value} key={value}>
        {label}
      </option>
    ))}
  </select>
)

export default Select

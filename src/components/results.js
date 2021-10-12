import React from 'react'

const Results = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
      <p>{result.total}</p>
      ))}
    </div>
  )
};

export default Results
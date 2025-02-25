import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import '../../css/custom.css'; 

export default function SearchBarWrapper(props) {
  return (
    <div className="searchBar">
      <SearchBar  {...props}/>
    </div>
  );
}

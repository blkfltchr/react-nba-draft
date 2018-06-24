import React from "react";
import styled from "styled-components";

const Header = styled.header`
  border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-between;
  background: #ffffff;
`;

const InputWrapper = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 300px;
  text-align: center;
  font-size: 18px;
  color: black
`;

const SearchIcon = styled.i`
  position: absolute;
  display: inline;
  top: 383px;
  padding-left: 10px;
`;

const SearchBar = props => {
  return (
    <Header>
      <InputWrapper>
        <SearchIcon className="fas fa-search" />
        <SearchInput
          type="text"
          placeholder="Search by position"
          onKeyDown={props.searchCards}
        />
      </InputWrapper>
    </Header>
  );
};

export default SearchBar;

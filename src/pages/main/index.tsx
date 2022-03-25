import styled from "styled-components";

const SearchStyle = styled.div`
  background-color: #dad9ff;
  height: 320px;
`;
const CenterS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 180px 0;
`;
const InputStyle = styled.input`
  width: 370px;
  height: 28px;
  border: none;
`;
const FilterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ListStyle = styled.div`
  margin: 10px;
  display: inline-block;
  width: 50px;
`;

const MainPage = () => (
  <div>
    <SearchStyle className="search">
      <CenterS>
        <InputStyle type="text"></InputStyle>
      </CenterS>
    </SearchStyle>
    <div className="main">
      <FilterStyle className="filter">
        <ListStyle>프레임워크</ListStyle>
        <ListStyle>프레임워크</ListStyle>
        <ListStyle>프레임워크</ListStyle>
        <ListStyle>프레임워크</ListStyle>
        <ListStyle>프레임워크</ListStyle>
        <ListStyle>프레임워크</ListStyle>
        <ListStyle>프레임워크</ListStyle>
        <ListStyle>프레임워크</ListStyle>
        <ListStyle>프레임워크</ListStyle>
        <ListStyle>프레임워크</ListStyle>
      </FilterStyle>
    </div>
  </div>
);

export default MainPage;

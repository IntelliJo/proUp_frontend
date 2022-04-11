import styled from "styled-components";
import Layout from "../../components/Layout";

const TitleStyle = styled.div`
  margin: ${(props) => props.theme.marginSide};
  height: 15em;
  display: flex;
  align-items: center;
`;
const TitleFontStyle = styled.div`
font-size: 1.5em;
    font-weight: bold;
}`;
const ArticleStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 ${(props) => props.theme.marginSide} 25px;
    height: 2.8em;
    background-color: gainsboro;
    border-radius: 1em;
    padding: 0 1em;
  }`;

const FlexNumStyle = styled.div<{ flexNum: string }>`
  display:flex;
  flex: ${(props) => props.flexNum};
  justify-content: ${(props) => (props.flexNum === "1" ? "space-around" : "none")};
  
  }`;

const boardFree = () => {
  return (
    <Layout title="공지사항">
      <div>
        <TitleStyle>
          <TitleFontStyle>공지사항</TitleFontStyle>
        </TitleStyle>
        <div>
          {/* 글목록  */}
          <ArticleStyle>
            <FlexNumStyle flexNum="2">Article Title</FlexNumStyle>
            <FlexNumStyle flexNum="1">
              <div className="bor">create date</div>
              <div>username</div>
            </FlexNumStyle>
          </ArticleStyle>
        </div>
      </div>
    </Layout>
  );
};

export default boardFree;

import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Swapper = styled.div`
  width: 875px;
  height: 498px;
  /* background-color:#fff; */
  display: flex;
  align-items: center;
  @media (max-width: 770px) {
    display: flex;
    flex-direction:column;
  }
`;

export const DivImage = styled.div`
  width: 450px;
  height: 223px;
  position: relative;
  @media (max-width: 770px) {
    width: 100%;
    height: 100%;
  }

`;
export const ImgStatic = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImgMoved = styled.img`
  width: 100%;
  height: 100%;
  display: none;
`;

export const IconBtn360 = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  @media (max-width: 770px) {
    margin-right:12px;
  }
`;
export const IconBtnClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: none;
`;

export const SwapperDetail = styled.div`
  margin-left: 63px;
  @media (max-width: 770px) {
    margin-top:63px;
  }
`;
export const Code = styled.p`
  font-size: 10px;
  color: #271a45;
  font-weight: 300;
  line-height: 100%;
`;
export const Title = styled.h1`
  color: #271a45;
  padding: 15px 0px;
  font-weight: 600;
  line-height: 100%;
`;
export const Price = styled.p`
  color: #271a45;
  opacity: 0.8;
  margin-bottom: 20px;
`;
export const BtnAdd = styled.button`
  padding: 8px 16px;
  line-height: 16px;
  font-size: 12px;
  border-radius: 999px;
  border: 0.5px solid #271a45;
  background-color: transparent;
  color: #271a45;
  text-transform: uppercase;
  cursor: pointer;

  transition: all 0.2s ease;
  :hover {
    background-color: #b3a5d7;
  }
`;

import { useState } from "react";
import {
  Container,
  Swapper,
  ImgMoved,
  ImgStatic,
  DivImage,
  IconBtn360,
  IconBtnClose,
  SwapperDetail,
  Code,
  Title,
  Price,
  BtnAdd,
} from "./styles";

import img1 from "../../assets/sofagif.gif";
import img2 from "../../assets/sofastatic.png";
import moved from "../../assets/360.svg";
import closed from "../../assets/closed.svg";

function Home() {

  return (
    <Container>
      <Swapper>
        <DivImage>
          <ImgStatic src={img1}  />
          <ImgMoved src={img2} />
          <IconBtn360>
            <img src={moved} />
          </IconBtn360>
          <IconBtnClose>
            <img src={closed} />
          </IconBtnClose>
        </DivImage>
        <SwapperDetail>
          <Code>CÓDIGO: 420204</Code>
          <Title>Sofá Margot II - Rosé</Title>
          <Price>R$4.000</Price>
          <BtnAdd>Adicionar à cesta</BtnAdd>
        </SwapperDetail>
      </Swapper>
    </Container>
  );
}

export default Home;

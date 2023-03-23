import { useState } from "react";
import {
  Container,
  Swapper,
  ImgStatic,
  DivImage,
  IconBtn360,
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
  const [imagem, setImagem] = useState(img2);
  const [icon, setIcon] = useState(moved);

  function ToggleImage() {
    imagem === img1 ? setImagem(img2) : setImagem(img1);
    icon === moved ? setIcon(closed) : setIcon(moved);
  }

  return (
    <Container>
      
      <Swapper>
        <DivImage>
          <ImgStatic src={imagem} alt="static"/>
          <IconBtn360 onClick={() => ToggleImage()}>
            <img src={icon} alt="360"/>
          </IconBtn360>
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

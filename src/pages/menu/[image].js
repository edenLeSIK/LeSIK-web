import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import balance1 from "@/assets/menu/balance1.png";
import balance2 from "@/assets/menu/balance2.png";
import diet1 from "@/assets/menu/diet1.png";
import diet2 from "@/assets/menu/diet2.png";
rom "@/assets/balance1.png";

const images = {
  balance1,
  balance2,
  diet1,
  diet2,
};

const Menu = () => {
  const router = useRouter();
  const { image } = router.query;

  if (image && images[image]) {
    return (
      <Container>
        <Image src={images[image]} alt={image} />
      </Container>
    );
  }
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;

  img {
    width: 100%;
    max-width: 430px;
    height: auto;
  }
`;

export default Menu;

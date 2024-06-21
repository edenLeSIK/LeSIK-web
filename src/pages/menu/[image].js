import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import { background } from "@/styles/theme";
import balance1 from "@/assets/balance1.png";
import balance2 from "@/assets/balance1.png";
import diet1 from "@/assets/balance1.png";
import diet2 from "@/assets/balance1.png";

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
        <Image src={images[image]} alt={image} width={500} height={500} />
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
  height: 100vh;
  background: ${background};
`;

export default Menu;

import styled from "styled-components";
import logoImage from "@images/public.avif";

const Home = () => {
  return (
    <StyledHome>
      <StyledGreeting>Welcome to Northwind Traders</StyledGreeting>
      <StyledDescription>Running on Cloudflare's D1</StyledDescription>
      <StyledLogo src={logoImage} alt="logo.avif" />
      <StyledParagraph>
        This is a demo of the Northwind dataset, running on&nbsp;
        <a href="https://workers.cloudflare.com/" target="_blank">
          Cloudflare Workers
        </a>
        , and D1 - Cloudflare's newest SQL database, running on SQLite.
      </StyledParagraph>
      <StyledParagraph>
        Read our&nbsp;
        <a href="https://blog.cloudflare.com/introducing-d1/" target="_blank">
          D1 announcement
        </a>
        &nbsp;to learn more about D1.
      </StyledParagraph>
      <StyledParagraph>
        This dataset was sourced from&nbsp;
        <a href="https://github.com/jpwhite3/northwind-SQLite3" target="_blank">
          northwind-SQLite3
        </a>
        .
      </StyledParagraph>
      <StyledParagraph>
        You can use the UI to explore Supplies, Orders, Customers, Employees and
        Products, or you can use search if you know what you're looking for.
      </StyledParagraph>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100%;
  height: 420px;
  padding: 48px;

  a,
  a:hover,
  a:visited {
    text-decoration: none;
  }
`;

const StyledGreeting = styled.p`
  font-size: 24px;
  line-height: 32px;
  padding: 0px;
  margin: 0px;
  color: ${({ theme }) => theme.text.main};
`;

const StyledDescription = styled.p`
  font-size: 18px;
  line-height: 28px;
  padding: 0px;
  margin: 8px 0px 0px 0px;
  color: ${({ theme }) => theme.text.second_light};
`;

const StyledLogo = styled.img`
  width: 384px;
  height: 216px;
  float: right;
  object-fit: scale-down;

  @media (max-width: 1023px) {
    width: 100%;
    height: 100%;
  }
`;

const StyledParagraph = styled.p`
  margin-top: 16px;
  font-size: 16px;
  line-height: 24px;
  a,
  a:hover,
  a:visited {
    color: ${({ theme }) => theme.text.links};
  }
`;

export default Home;

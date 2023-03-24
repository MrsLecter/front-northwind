import styled from "styled-components";

const WrapperSearch: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <StyledWrapperSearch>
      <StyledSearchContainer>{children}</StyledSearchContainer>
    </StyledWrapperSearch>
  );
};

const StyledWrapperSearch = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: ${({ theme }) => theme.background.grey};
`;

const StyledSearchContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.table.border};
  background-color: ${({ theme }) => theme.background.light};
`;

export default WrapperSearch;

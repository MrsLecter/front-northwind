import styled from "styled-components";

interface IDataObjectRowProps {
  data: [string, string];
}
const DataObjectRow: React.FC<IDataObjectRowProps> = ({ data }) => {
  return (
    <StyledObjectRow>
      <div>{data[0]}</div>
      <div>{data[1]}</div>
    </StyledObjectRow>
  );
};

const StyledObjectRow = styled.div`
  width: 100%;

  margin-bottom: 12px;
  div {
    height: 24px;
  }
  div:first-child {
    font-weight: 700;
    margin-bottom: 8px;
  }
`;

export default DataObjectRow;

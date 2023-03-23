import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import tableService from "../../../api/table-service";
import { getSupplierInfoFiltered } from "../../utils/functions";
import DataObjectRow from "./DataObjectRow/DataObjectRow";
import {
  StyledDetailedData,
  StyledDetailedHeader,
  StyledDetailedContainer,
  StyledColumn,
  StyledDetailedFooter,
} from "./DetailedData.styles";

const DetailedData: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [leftColumn, setLeftColumn] = useState<[string, string][]>([]);
  const [rightColumn, setRightColumn] = useState<[string, string][]>([]);
  // console.log(
  //   currentPath.split("/"),
  //   currentPath.split("/")[1],
  //   currentPath.split("/")[2]
  // );
  const currentHeader = currentPath.split("/")[1];
  const currentID = currentPath.split("/")[2];
  console.log("currentPath");

  useEffect(() => {
    const getDetailSuppliersInfo = async () => {
      const response = await tableService.getSupplierInfo({ id: +currentID });
      console.log("response", response);
      if (response.status === 200) {
        const [leftCol, rightCol] = getSupplierInfoFiltered(
          response.data.data[0]
        );
        setLeftColumn(leftCol);
        setRightColumn(rightCol);
        console.log("leftCol, rightCol", leftCol, rightCol);
      } else {
        setError(true);
      }
      return response;
    };
    setLoading(true);
    getDetailSuppliersInfo();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <StyledDetailedData>
      {isLoading && <p>Loading suppliers...</p>}
      {isError && <p>Error occured during request! Try again</p>}
      {!isLoading && !isError && (
        <>
          <StyledDetailedHeader>
            <span className="material-symbols-outlined">ballot</span>
            {currentHeader[0].toUpperCase() + currentHeader.substring(1)}
            &nbsp;information
          </StyledDetailedHeader>
          <StyledDetailedContainer>
            <StyledColumn>
              {leftColumn.map((item) => (
                <DataObjectRow data={item} />
              ))}
            </StyledColumn>
            <StyledColumn>
              {rightColumn.map((item) => (
                <DataObjectRow data={item} />
              ))}
            </StyledColumn>
          </StyledDetailedContainer>
          <StyledDetailedFooter>
            <button type="button" onClick={() => navigate(-1)}>
              Go back
            </button>
          </StyledDetailedFooter>
        </>
      )}
    </StyledDetailedData>
  );
};

export default DetailedData;

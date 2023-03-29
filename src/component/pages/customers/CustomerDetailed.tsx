import { useEffect, useState } from "react";
import tableService from "../../../api/table-service";
import { ICustomerInfo, TIncomeData } from "../../types/commonTypes";
import { DETAIL_URLS } from "../../../constants";
import { StyledDetailedData } from "../../common/detailedPageComponents/detailedPageComponents.styles";
import { getInfoFiltered } from "../../utils/functions";
import {
  DetailedFooter,
  DetailedHeader,
} from "../../common/detailedPageComponents/detailedPageComponents";
import {
  StyledDetailedContainer,
  StyledColumn,
} from "../../common/detailedPageComponents/detailedPageComponents.styles";
import {
  DataObjectLink,
  DataObjectRow,
} from "../../common/dataObjectRow/DataObjectRow";

const CustomerDetailed: React.FC = () => {
  const currentPath = location.pathname;
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [leftColumn, setLeftColumn] = useState<[string, string | number][]>([]);
  const [rightColumn, setRightColumn] = useState<[string, string | number][]>(
    []
  );

  const currentHeader = currentPath.split("/")[1] as TIncomeData;
  const currentID = currentPath.split("/")[2];
  console.log(currentPath, currentHeader, currentID);

  useEffect(() => {
    const getDetailedInfo = async () => {
      const response = await tableService.getDetailedInfo<ICustomerInfo>({
        id: currentID,
        url: DETAIL_URLS.customer,
      });
      console.log("response", response);
      if (response.status === 200) {
        console.log("currentHeader", currentHeader);
        const [leftCol, rightCol] = getInfoFiltered({
          data: response.data.data[0],
          info: "customer",
        });
        setLeftColumn(leftCol);
        setRightColumn(rightCol);
        console.log("leftCol, rightCol", leftCol, rightCol);
      } else {
        setError(true);
      }
      return response;
    };
    setLoading(true);
    getDetailedInfo();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <StyledDetailedData>
      {isLoading && <p>Loading detailed customer...</p>}
      {isError && <p>Error occured during request! Try again</p>}
      {!isLoading && !isError && (
        <>
          <DetailedHeader header={currentHeader} />
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
          <DetailedFooter />
        </>
      )}
    </StyledDetailedData>
  );
};

export default CustomerDetailed;

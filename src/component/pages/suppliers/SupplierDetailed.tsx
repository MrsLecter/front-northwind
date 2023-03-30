import { useEffect, useState } from "react";
import { ISupplierInfo, TIncomeData } from "../../types/commonTypes";
import { DETAIL_URLS } from "@const";
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
import { DataObjectRow } from "../../common/dataObjectRow/DataObjectRow";
import apiHandler from "../../utils/loggingProxy";

const SupplierDetailed: React.FC = () => {
  const currentPath = location.pathname;
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [leftColumn, setLeftColumn] = useState<[string, string | number][]>([]);
  const [rightColumn, setRightColumn] = useState<[string, string | number][]>(
    []
  );
  const currentHeader = currentPath.split("/")[1] as TIncomeData;
  const currentID = currentPath.split("/")[2];

  useEffect(() => {
    const getDetailedInfo = async () => {
      const response = await apiHandler.getDetailData<ISupplierInfo>({
        idParam: currentID,
        pageUrl: DETAIL_URLS.supplier,
      });
      if (response.status === 200) {
        const [leftCol, rightCol] = getInfoFiltered({
          data: response.data.data[0],
          info: "supplier",
        });
        setLeftColumn(leftCol);
        setRightColumn(rightCol);
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
      {isLoading && <p>Loading detailed supplier...</p>}
      {isError && <p>Error occured during request! Try again</p>}
      {!isLoading && !isError && (
        <>
          <DetailedHeader header={currentHeader} />
          <StyledDetailedContainer>
            <StyledColumn>
              {leftColumn &&
                leftColumn.map((item, index) => (
                  <DataObjectRow key={index} data={item} />
                ))}
            </StyledColumn>
            <StyledColumn>
              {rightColumn &&
                rightColumn.map((item, index) => (
                  <DataObjectRow key={index} data={item} />
                ))}
            </StyledColumn>
          </StyledDetailedContainer>

          <DetailedFooter />
        </>
      )}
    </StyledDetailedData>
  );
};

export default SupplierDetailed;

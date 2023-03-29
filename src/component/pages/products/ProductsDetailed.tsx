import { useEffect, useState } from "react";
import tableService from "../../../api/table-service";
import {
  IEmployeeInfo,
  IEmployeeInfoCustom,
  IProductInfo,
  ISupplierInfo,
  TIncomeData,
} from "../../types/commonTypes";
import { AppUrlEnum, DETAIL_URLS } from "../../../constants";
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

const ProductDetailed: React.FC = () => {
  const currentPath = location.pathname;
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [leftColumn, setLeftColumn] = useState<[string, string | number][]>([]);
  const [rightColumn, setRightColumn] = useState<[string, string | number][]>(
    []
  );
  const [reportsTo, setReportsTo] = useState<number>(0);

  const currentHeader = currentPath.split("/")[1] as TIncomeData;
  const currentID = currentPath.split("/")[2];
  console.log(currentPath, currentHeader, currentID);

  useEffect(() => {
    const getDetailedInfo = async () => {
      const response = await tableService.getDetailedInfo<IProductInfo>({
        id: currentID,
        url: DETAIL_URLS.product,
      });
      console.log("response", response);
      if (response.status === 200) {
        let responseObj = {
          id: response.data.data[0].supplierId,
          productName: response.data.data[0].productName,
          supplier: response.data.data[0].supplier,
          qtyPerUnit: response.data.data[0].qtyPerUnit,
          unitPrice: response.data.data[0].unitPrice,
          unitsInStock: response.data.data[0].unitsInStock,
          unitsInOrder: response.data.data[0].unitsInOrder,
          reorderLevel: response.data.data[0].reorderLevel,
          discontinued: response.data.data[0].discontinued,
        };
        setReportsTo(response.data.data[0].supplierId);
        const [leftCol, rightCol] = getInfoFiltered({
          data: responseObj,
          info: "product",
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
      {isLoading && <p>Loading detailed product...</p>}
      {isError && <p>Error occured during request! Try again</p>}
      {!isLoading && !isError && (
        <>
          <DetailedHeader header={currentHeader} />
          <StyledDetailedContainer>
            <StyledColumn>
              {leftColumn.map((item) =>
                item[0] === "Supplier" ? (
                  <DataObjectLink
                    link={AppUrlEnum.CURRENT_SUPPLIER + reportsTo}
                    data={item}
                  />
                ) : (
                  <DataObjectRow
                    isPrice={item[0] === "Unit Price"}
                    data={item}
                  />
                )
              )}
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

export default ProductDetailed;

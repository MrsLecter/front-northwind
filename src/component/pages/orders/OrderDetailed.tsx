import { useEffect, useState } from "react";
import tableService from "../../../api/table-service";
import {
  ICustomerInfo,
  IDetailedOrdersProducts,
  IEmployeeInfo,
  IEmployeeInfoCustom,
  IOrderInfo,
  IOrderInfoCustom,
  TIncomeData,
} from "../../types/commonTypes";
import {
  AppUrlEnum,
  DETAIL_URLS,
  HEADERS_PRODUCTS_IN_ORDER,
} from "../../../constants";
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
import { data } from "autoprefixer";
import { StandartTable } from "../../common/table/Table";
import { Link } from "react-router-dom";
import apiHandler from "../../utils/loggingProxy";

const OrderDetailed: React.FC = () => {
  const currentPath = location.pathname;
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [leftColumn, setLeftColumn] = useState<[string, string | number][]>([]);
  const [rightColumn, setRightColumn] = useState<[string, string | number][]>(
    []
  );
  const [reportTo, setReportTo] = useState<string>("");
  const [tableInfo, setTableInfo] = useState<IDetailedOrdersProducts[]>([]);

  const currentHeader = currentPath.split("/")[1] as TIncomeData;
  const currentID = currentPath.split("/")[2];

  useEffect(() => {
    const getDetailedInfo = async () => {
      const response = await apiHandler.getDetailData<IOrderInfo>({
        idParam: currentID,
        pageUrl: DETAIL_URLS.order,
      });
      console.log("response", response);
      if (response.status === 200) {
        const responseInfo = response.data.data[0];
        setTableInfo(response.data.productsInfo!);
        const responseObj: IOrderInfoCustom = {
          id: responseInfo.CustomerId,
          customerId: responseInfo.CustomerId,
          shipName: responseInfo.ShipName,
          totalProducts: responseInfo.TotalProducts,
          totalQuantity: responseInfo.TotalProductsItems,
          totalPrice: responseInfo.TotalProductsPrice,
          totalDiscount: responseInfo.TotalProductsDiscount,
          shipVia: responseInfo.CompanyShipper,
          freight: responseInfo.Freight,
          orderDate: responseInfo.OrderDate.substring(0, 10),
          requiredDate: responseInfo.RequiredDate.substring(0, 10),
          shippedDate: responseInfo.ShippedDate.substring(0, 10),
          shipCity: responseInfo.ShipCity,
          shipRegion: responseInfo.ShipRegion,
          shipPostalCode: responseInfo.PostalCode,
          shipCountry: responseInfo.ShipCountry,
        };
        setReportTo(responseInfo.CustomerId);
        const [leftCol, rightCol] = getInfoFiltered({
          data: responseObj,
          info: "order",
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
      {isLoading && <p>Loading detailed order ...</p>}
      {isError && <p>Error occured during request! Try again</p>}
      {!isLoading && !isError && (
        <>
          <DetailedHeader header={currentHeader} />
          <StyledDetailedContainer>
            <StyledColumn>
              {leftColumn &&
                leftColumn.map((item) =>
                  item[0] === "Customer Id" ? (
                    <DataObjectLink
                      link={AppUrlEnum.CURRENT_CUSTOMER + reportTo}
                      data={item}
                    />
                  ) : (
                    <DataObjectRow
                      data={item}
                      isPrice={
                        item[0] === "Total Price" ||
                        item[0] === "Total Discount" ||
                        item[0] === "Freight"
                      }
                    />
                  )
                )}
            </StyledColumn>
            <StyledColumn>
              {rightColumn &&
                rightColumn.map((item) => (
                  <DataObjectRow
                    data={item}
                    isPrice={
                      item[0] === "Total Price" ||
                      item[0] === "Total Discount" ||
                      item[0] === "Freight"
                    }
                  />
                ))}
            </StyledColumn>
          </StyledDetailedContainer>
          <DetailedHeader header={"Products in order"} withIcon={false} />
          <StandartTable>
            <thead>
              {HEADERS_PRODUCTS_IN_ORDER.map((item) => (
                <th>{item}</th>
              ))}
            </thead>
            <tbody>
              {tableInfo &&
                tableInfo.map((item) => {
                  return (
                    <tr key={item.ProductId}>
                      <td data-label={HEADERS_PRODUCTS_IN_ORDER[0]}>
                        <Link to={AppUrlEnum.CURRENT_PRODUCT + item.ProductId}>
                          {item.ProductName}
                        </Link>
                      </td>
                      <td data-label={HEADERS_PRODUCTS_IN_ORDER[1]}>
                        {item.Quantity}
                      </td>
                      <td data-label={HEADERS_PRODUCTS_IN_ORDER[2]}>
                        ${item.OrderPrice.toFixed(2)}
                      </td>
                      <td data-label={HEADERS_PRODUCTS_IN_ORDER[3]}>
                        ${item.TotalPrice.toFixed(2)}
                      </td>
                      <td data-label={HEADERS_PRODUCTS_IN_ORDER[4]}>
                        {item.Discount}%
                      </td>

                      <td></td>
                    </tr>
                  );
                })}
            </tbody>
          </StandartTable>
          <DetailedFooter />
        </>
      )}
    </StyledDetailedData>
  );
};

export default OrderDetailed;

import { useEffect, useState } from "react";
import tableService from "../../../api/table-service";
import {
  ICustomerInfo,
  IEmployeeInfo,
  IEmployeeInfoCustom,
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
import { data } from "autoprefixer";

const EmployeeDetailed: React.FC = () => {
  const currentPath = location.pathname;
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [leftColumn, setLeftColumn] = useState<[string, string | number][]>([]);
  const [rightColumn, setRightColumn] = useState<[string, string | number][]>(
    []
  );
  const [reportsTo, setReprtsTo] = useState<number>(0);

  const currentHeader = currentPath.split("/")[1] as TIncomeData;
  const currentID = currentPath.split("/")[2];
  console.log(currentPath, currentHeader, currentID);

  useEffect(() => {
    const getDetailedInfo = async () => {
      const response = await tableService.getDetailedInfo<IEmployeeInfo>({
        id: currentID,
        url: DETAIL_URLS.employee,
      });
      console.log("response", response);
      if (response.status === 200) {
        console.log("currentHeader", currentHeader);
        const dataReponse = response.data.data[0];
        setReprtsTo(+dataReponse.ReportsTo);
        const newObj: IEmployeeInfoCustom = {
          id: dataReponse.EmployeeID,
          name: `${dataReponse.FirstName} ${dataReponse.LastName}`,
          title: dataReponse.Title,
          titleOfCourtesy: dataReponse.TitleOfCourtesy,
          birthDate: dataReponse.BirthDate,
          hireDate: dataReponse.HireDate,
          address: dataReponse.Address,
          city: dataReponse.City,
          postalCode: dataReponse.PostalCode,
          country: dataReponse.Country,
          homePhone: dataReponse.HomePhone,
          extension: dataReponse.Extension,
          notes: dataReponse.Notes,
          reportsTo: dataReponse.reportsName,
        };
        const [leftCol, rightCol] = getInfoFiltered({
          data: newObj,
          info: "employee",
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
      {isLoading && <p>Loading detailed employee...</p>}
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
              {rightColumn.map((item) =>
                item[0] === "Resports To" && item[1] !== null ? (
                  <DataObjectLink
                    link={AppUrlEnum.CURRENT_EMPLOYEE + reportsTo}
                    data={item}
                  />
                ) : (
                  <DataObjectRow data={item} />
                )
              )}
            </StyledColumn>
          </StyledDetailedContainer>

          <DetailedFooter />
        </>
      )}
    </StyledDetailedData>
  );
};

export default EmployeeDetailed;

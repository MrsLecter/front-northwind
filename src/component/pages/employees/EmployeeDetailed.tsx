import { useEffect, useState } from "react";
import tableService from "../../../api/table-service";
import {
  ICustomerInfo,
  IEmployeeInfo,
  IEmployeeInfoCustom,
  TIncomeData,
} from "../../types/commonTypes";
import { AppUrlEnum, DETAIL_URLS } from "@const";
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
import apiHandler from "../../utils/loggingProxy";

const EmployeeDetailed: React.FC = () => {
  const currentPath = location.pathname;
  const [update, setUpdate] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [isError, setError] = useState<boolean>(false);
  const [leftColumn, setLeftColumn] = useState<[string, string | number][]>([]);
  const [rightColumn, setRightColumn] = useState<[string, string | number][]>(
    []
  );
  const [reportsTo, setReprtsTo] = useState<number>(0);

  const currentHeader = currentPath.split("/")[1] as TIncomeData;
  const currentID = currentPath.split("/")[2];

  useEffect(() => {
    setUpdate(false);
  });

  useEffect(() => {
    const getDetailedInfo = async () => {
      const response = await apiHandler.getDetailData<IEmployeeInfo>({
        idParam: currentID,
        pageUrl: DETAIL_URLS.employee,
      });

      if (response.status === 200) {
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
  }, [currentPath]);

  return (
    <StyledDetailedData>
      {isLoading && <p>Loading detailed employee...</p>}
      {isError && <p>Error occured during request! Try again</p>}
      {!isLoading && !isError && (
        <>
          <DetailedHeader header={currentHeader} />
          <StyledDetailedContainer>
            <StyledColumn>
              {leftColumn &&
                leftColumn.map((item) => <DataObjectRow data={item} />)}
            </StyledColumn>
            <StyledColumn>
              {rightColumn &&
                rightColumn.map((item) =>
                  item[0] === "Resports To" && item[1] !== null ? (
                    <DataObjectLink
                      handleChange={() => setUpdate(true)}
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

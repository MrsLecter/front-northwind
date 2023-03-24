import { useEffect, useState } from "react";
import tableService from "../../../api/table-service";
import { Link } from "react-router-dom";
import {
  AppUrlEnum,
  CELL_IMG_URL,
  HEADERS_SET,
  PAGE_URLS,
} from "../../../constants";
import { StandartTable } from "../../common/table/Table";
import { IEmployeesObject } from "../../types/commonTypes";
import WrapperTables from "../../wrappers/WrapperTables/WrapperTables";

const Employees: React.FC = () => {
  const [employeesData, setEmployeesData] = useState<IEmployeesObject[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
;

  useEffect(() => {
    const getData = async () => {
      const response = await tableService.getTableData<IEmployeesObject>({
        url: PAGE_URLS.employees,
        page: 1,
      });
      if (response.status === 200) {
        setEmployeesData(response.data.data);
        console.log(response.data.data);
      } else {
        setError(true);
      }
      console.log(response);
    };
    setLoading(true);
    getData();

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <WrapperTables
      isLoading={loading}
      isError={error}
      mainHeader={"Employees"}
      currentPage={1}
      maxPages={2}
    >
      {!loading && (
        <>
          <StandartTable img={true}>
            <thead>
              <th></th>
              {HEADERS_SET.suppliers.map((item) => (
                <th>{item}</th>
              ))}
            </thead>
            <tbody>
              {employeesData.map((object) => {
                return (
                  <tr key={object.id}>
                    <td data-label={""}>
                      <img
                        src={CELL_IMG_URL(object.name.replace(" ", "-"))}
                        alt="imageCell.svg"
                      />
                    </td>
                    <td data-label={HEADERS_SET.employees_small[0]}>
                      <Link to={AppUrlEnum.CURRENT_SUPPLIER + object.id}>
                        {object.name}
                      </Link>
                    </td>
                    <td data-label={HEADERS_SET.employees_small[1]}>
                      {object.title}
                    </td>
                    <td data-label={HEADERS_SET.employees_small[2]}>
                      {object.city}
                    </td>
                    <td data-label={HEADERS_SET.employees_small[3]}>
                      {object.phone}
                    </td>
                    <td data-label={HEADERS_SET.employees_small[4]}>
                      {object.country}
                    </td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </StandartTable>
        </>
      )}
    </WrapperTables>
  );
};

export default Employees;

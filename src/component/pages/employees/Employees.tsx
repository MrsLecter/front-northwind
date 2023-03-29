import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AppUrlEnum,
  CELL_IMG_URL,
  HEADERS_SET,
  PAGE_URLS,
} from "../../../constants";
import { StandartTable } from "../../common/table/Table";
import { IEmployeesObject } from "../../types/commonTypes";
import WrapperTables from "../../wrappers/wrapperTables/WrapperTables";
import Footer from "../../common/footer/Footer";
import apiHandler from "../../utils/loggingProxy";

const Employees: React.FC = () => {
  const [employeesData, setEmployeesData] = useState<IEmployeesObject[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageAmount, setPageAmount] = useState<number>(1);

  useEffect(() => {
    const getData = async () => {
      const response = await apiHandler.getTableData<IEmployeesObject>({
        pageUrl: PAGE_URLS.employees,
        pageNumber: currentPage,
      });
      if (response.status === 200) {
        setEmployeesData(response.data.data);
        setCurrentPage(parseInt(response.data.currentPage));
        setPageAmount(response.data.totalPages);
      } else {
        setError(true);
      }
    };
    setLoading(true);
    getData();

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [currentPage, pageAmount]);

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
              {HEADERS_SET.suppliers.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </thead>
            <tbody>
              {employeesData &&
                employeesData.map((object) => {
                  return (
                    <tr key={object.id}>
                      <td data-label={""}>
                        <img
                          src={CELL_IMG_URL(object.name)}
                          alt="imageCell.svg"
                        />
                      </td>
                      <td data-label={HEADERS_SET.employees_small[0]}>
                        <Link to={AppUrlEnum.CURRENT_EMPLOYEE + object.id}>
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
          <Footer
            currentPage={currentPage}
            totalPages={pageAmount}
            handleChangePage={setCurrentPage}
          />
        </>
      )}
      {!employeesData && <p>Content not loaded! Try again...</p>}
    </WrapperTables>
  );
};

export default Employees;

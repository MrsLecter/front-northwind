import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tableService from "../../../api/table-service";
import { AppUrlEnum, CELL_IMG_URL, HEADERS_SET, PAGE_URLS } from "@const";
import Footer from "../../common/footer/Footer";
import { StandartTable } from "../../common/table/Table";
import { ICustomersObject } from "../../types/commonTypes";
import apiHandler from "../../utils/loggingProxy";
import WrapperTables from "../../wrappers/wrapperTables/WrapperTables";

const Customers: React.FC = () => {
  const [customersData, setCustomersData] = useState<ICustomersObject[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageAmount, setPageAmount] = useState<number>(1);

  useEffect(() => {
    const getData = async () => {
      const response = await apiHandler.getTableData<ICustomersObject>({
        pageUrl: PAGE_URLS.customers,
        pageNumber: currentPage,
      });
      if (response.status === 200) {
        setCustomersData(response.data.data);
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
      mainHeader={"Customers"}
      currentPage={1}
      maxPages={2}
    >
      {!loading && (
        <>
          <StandartTable img={true}>
            <thead>
              <tr>
                <th />
                {HEADERS_SET.customers.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {customersData.map((object, index) => {
                return (
                  <tr key={index}>
                    <td data-label={""}>
                      <img
                        src={CELL_IMG_URL(object.name)}
                        alt="imageCell.svg"
                      />
                    </td>
                    <td data-label={HEADERS_SET.customers[0]}>
                      <Link to={AppUrlEnum.CURRENT_CUSTOMER + object.id}>
                        {object.company}
                      </Link>
                    </td>
                    <td data-label={HEADERS_SET.customers[1]}>{object.name}</td>
                    <td data-label={HEADERS_SET.customers[2]}>
                      {object.title}
                    </td>
                    <td data-label={HEADERS_SET.customers[3]}>{object.city}</td>
                    <td data-label={HEADERS_SET.customers[4]}>
                      {object.country}
                    </td>
                    <td />
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
      {!customersData && <p>Content not loaded! Try again...</p>}
    </WrapperTables>
  );
};

export default Customers;

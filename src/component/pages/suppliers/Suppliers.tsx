import { useEffect, useState } from "react";
import {
  AppUrlEnum,
  CELL_IMG_URL,
  HEADERS_SET,
  PAGE_URLS,
} from "../../../constants";
import { ISuppliersObject } from "../../types/commonTypes";
import { StandartTable } from "../../common/table/Table";
import WrapperTables from "../../wrappers/wrapperTables/WrapperTables";
import { Link } from "react-router-dom";
import Footer from "../../common/footer/Footer";
import apiHandler from "../../utils/loggingProxy";

const Suppliers: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageAmount, setPageAmount] = useState<number>(5);
  const [suppliersData, setSuppliersData] = useState<ISuppliersObject[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await apiHandler.getTableData<ISuppliersObject>({
        pageUrl: PAGE_URLS.suppliers,
        pageNumber: currentPage,
      });
      if (response.status === 200) {
        setSuppliersData(response.data.data);
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
  }, [currentPage]);

  return (
    <WrapperTables
      isLoading={loading}
      isError={error}
      mainHeader={"Suppliers"}
      currentPage={1}
      maxPages={2}
    >
      {!loading && !!suppliersData && (
        <>
          <StandartTable img={true}>
            <thead>
              <th></th>
              {HEADERS_SET.suppliers.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </thead>
            <tbody>
              {suppliersData &&
                suppliersData.map((object) => {
                  return (
                    <tr key={object.id}>
                      <td data-label={""}>
                        <img
                          src={CELL_IMG_URL(object.name)}
                          alt="imageCell.svg"
                        />
                      </td>
                      <td data-label={HEADERS_SET.suppliers_small[0]}>
                        <Link to={AppUrlEnum.CURRENT_SUPPLIER + object.id}>
                          {object.companyName}
                        </Link>
                      </td>
                      <td data-label={HEADERS_SET.suppliers_small[1]}>
                        {object.name}
                      </td>
                      <td data-label={HEADERS_SET.suppliers_small[2]}>
                        {object.title}
                      </td>
                      <td data-label={HEADERS_SET.suppliers_small[3]}>
                        {object.city}
                      </td>
                      <td data-label={HEADERS_SET.suppliers_small[4]}>
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

      {!suppliersData && <p>Content not loaded! Try again...</p>}
    </WrapperTables>
  );
};

export default Suppliers;

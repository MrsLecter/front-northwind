import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import tableService from "../../../api/table-service";
import {
  AppUrlEnum,
  CELL_IMG_URL,
  HEADERS_SET,
  PAGE_URLS,
} from "../../../constants";
import { ISQLQuery, ISuppliersObject } from "../../types/commonTypes";
import { StandartTable } from "../../common/table/Table";
import WrapperTables from "../../wrappers/wrapperTables/WrapperTables";
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import Footer from "../../common/footer/Footer";
import { logsSlice } from "../../store/reducers/logsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reducers.hook";
import useComponentWillMount from "../../hooks/useComponentWillMount";

const Suppliers: React.FC = () => {
  const renders = useRef<number>(0);
  const callbacks = useRef<number>(0);
  const dispatch = useAppDispatch();
  const { setLogList } = logsSlice.actions;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageAmount, setPageAmount] = useState<number>(5);
  const [suppliersData, setSuppliersData] = useState<ISuppliersObject[]>([]);
  // const [pageAmount, setPageAmount] = useState<number>(1);
  const [sql, setSql] = useState<ISQLQuery[]>([]);
  console.log("~~~refresh suppliers", renders.current);

  console.log(">>>>useCallback", callbacks.current);

  const apiCall = async () => {
    const response = await tableService.getTableData<ISuppliersObject>({
      url: PAGE_URLS.suppliers,
      page: currentPage,
    });
    if (response.status === 200) {
      setSuppliersData(response.data.data);
      setCurrentPage(parseInt(response.data.currentPage));
      setPageAmount(response.data.totalPages);
      setSql((prev) => response.data.sqlQueries);
      // dispatch(setLogList({ sqlQueries: response.data.sqlQueries }));
      console.log("first api call: ", response.data);
      return response.data;
    } else {
      setError(true);
    }
    console.log(response);
  };

  useEffect(() => {
    setLoading(true);
    apiCall();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    console.log(">>>use effect suppliers");
  }, []);

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
              {HEADERS_SET.suppliers.map((item) => (
                <th>{item}</th>
              ))}
            </thead>
            <tbody>
              {suppliersData.map((object) => {
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
        </>
      )}
      <Footer
        currentPage={currentPage}
        totalPages={pageAmount}
        handleChangePage={setCurrentPage}
      />
      {/* </> */}
      {/* )} */}

      {!suppliersData && <p>Content not loaded! Try again...</p>}
    </WrapperTables>
  );
};

export default Suppliers;

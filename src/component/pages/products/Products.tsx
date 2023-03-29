import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tableService from "../../../api/table-service";
import { AppUrlEnum, HEADERS_SET, PAGE_URLS } from "../../../constants";
import Footer from "../../common/footer/Footer";
import { StandartTable } from "../../common/table/Table";
import { useAppDispatch } from "../../hooks/reducers.hook";
import { logsSlice } from "../../store/reducers/logsSlice";
import { IProductsObject, ISQLQuery } from "../../types/commonTypes";
import WrapperTables from "../../wrappers/wrapperTables/WrapperTables";

const Products: React.FC = () => {
  const { setLogList } = logsSlice.actions;
  const dispatch = useAppDispatch();
  const [productsData, setProductsData] = useState<IProductsObject[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageAmount, setPageAmount] = useState<number>(1);
  const [sql, setSql] = useState<ISQLQuery[]>([]);
  if (productsData) dispatch(setLogList({ sqlQueries: sql }));
  console.log("refresh products", !!productsData);

  useEffect(() => {
    const getData = async () => {
      const response = await tableService.getTableData<IProductsObject>({
        url: PAGE_URLS.products,
        page: currentPage,
      });
      if (response.status === 200) {
        setProductsData((prev) => response.data.data);
        setCurrentPage((prev) => parseInt(response.data.currentPage));
        setPageAmount((prev) => response.data.totalPages);
        setSql((prev) => response.data.sqlQueries);
        console.log(response.data);
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
  }, [currentPage]);

  return (
    <WrapperTables
      isLoading={loading}
      isError={error}
      mainHeader={"Products"}
      currentPage={1}
      maxPages={2}
    >
      {!loading && !!productsData && (
        <>
          <StandartTable>
            <thead>
              {HEADERS_SET.products.map((item) => (
                <th>{item}</th>
              ))}
            </thead>
            <tbody>
              {productsData.map((object) => {
                return (
                  <tr key={object.id}>
                    <td data-label={HEADERS_SET.products_small[0]}>
                      <Link to={AppUrlEnum.CURRENT_PRODUCT + object.id}>
                        {object.name}
                      </Link>
                    </td>
                    <td data-label={HEADERS_SET.products_small[1]}>
                      {object.qt}
                    </td>
                    <td data-label={HEADERS_SET.products_small[2]}>
                      ${object.price}
                    </td>
                    <td data-label={HEADERS_SET.products_small[3]}>
                      {object.stock}
                    </td>
                    <td data-label={HEADERS_SET.products_small[4]}>
                      {object.orders}
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
      {!productsData && <p>Content not loaded! Try again...</p>}
    </WrapperTables>
  );
};

export default Products;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tableService from "../../../api/table-service";
import { AppUrlEnum, HEADERS_SET, PAGE_URLS } from "../../../constants";
import { StandartTable } from "../../common/table/Table";
import { IProductsObject } from "../../types/commonTypes";
import WrapperTables from "../../wrappers/WrapperTables/WrapperTables";

const Products: React.FC = () => {
  const [productsData, setProductsData] = useState<IProductsObject[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const response = await tableService.getTableData<IProductsObject>({
        url: PAGE_URLS.products,
        page: 1,
      });
      if (response.status === 200) {
        setProductsData(response.data.data);
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
      mainHeader={"Products"}
      currentPage={1}
      maxPages={2}
    >
      {!loading && productsData && (
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
                    <Link to={AppUrlEnum.CURRENT_SUPPLIER + object.id}>
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
                </tr>
              );
            })}
          </tbody>
        </StandartTable>
      )}
      {!productsData && <p>Content not loaded! Try again...</p>}
    </WrapperTables>
  );
};

export default Products;

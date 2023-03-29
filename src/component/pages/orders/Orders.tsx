import { useEffect, useState } from "react";
import tableService from "../../../api/table-service";
import { Link } from "react-router-dom";
import { AppUrlEnum, HEADERS_SET, PAGE_URLS } from "../../../constants";
import { StandartTable } from "../../common/table/Table";
import { IOrdersObject } from "../../types/commonTypes";
import WrapperTables from "../../wrappers/wrapperTables/WrapperTables";
import Footer from "../../common/footer/Footer";

const Orders: React.FC = () => {
  const [ordersData, setOrdersData] = useState<IOrdersObject[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageAmount, setPageAmount] = useState<number>(1);

  useEffect(() => {
    const getData = async () => {
      const response = await tableService.getTableData<IOrdersObject>({
        url: PAGE_URLS.orders,
        page: currentPage,
      });
      if (response.status === 200) {
        setOrdersData(response.data.data);
        setCurrentPage(parseInt(response.data.currentPage));
        setPageAmount(response.data.totalPages);
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
  }, [currentPage, pageAmount]);

  return (
    <WrapperTables
      isLoading={loading}
      isError={error}
      mainHeader={"Orders"}
      currentPage={1}
      maxPages={2}
    >
      {!loading && ordersData && (
        <>
          <StandartTable>
            <thead>
              {HEADERS_SET.orders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </thead>
            <tbody>
              {ordersData.map((item) => {
                return (
                  <tr key={item.OrderId}>
                    <td data-label={HEADERS_SET.orders_small[0]}>
                      <Link to={AppUrlEnum.CURRENT_ORDER + item.OrderId}>
                        {item.OrderId}
                      </Link>
                    </td>
                    <td data-label={HEADERS_SET.orders_small[1]}>
                      ${item.TotalProductsPrice.toFixed(2)}
                    </td>
                    <td data-label={HEADERS_SET.orders_small[2]}>
                      {item.TotalProducts}
                    </td>
                    <td data-label={HEADERS_SET.orders_small[3]}>
                      {item.TotalProductsItems}
                    </td>
                    <td data-label={HEADERS_SET.orders_small[4]}>
                      {item.Shipped.substring(0, 10)}
                    </td>
                    <td data-label={HEADERS_SET.orders_small[5]}>
                      {item.ShipName}
                    </td>
                    <td data-label={HEADERS_SET.orders_small[6]}>
                      {item.City}
                    </td>
                    <td data-label={HEADERS_SET.orders_small[7]}>
                      {item.Country}
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
      {!ordersData && <p>Content not loaded! Try again...</p>}
    </WrapperTables>
  );
};

export default Orders;

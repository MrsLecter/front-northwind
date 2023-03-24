import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tableService from "../../../api/table-service";
import {
  AppUrlEnum,
  CELL_IMG_URL,
  HEADERS_SET,
  PAGE_URLS,
} from "../../../constants";
import Footer from "../../common/footer/Footer";
import { StandartTable } from "../../common/table/Table";
import { ICustomersObject } from "../../types/commonTypes";
import WrapperTables from "../../wrappers/WrapperTables/WrapperTables";

const Customers: React.FC = () => {
  const [customersData, setCustomersData] = useState<ICustomersObject[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const response = await tableService.getTableData<ICustomersObject>({
        url: PAGE_URLS.customers,
        page: 1,
      });
      if (response.status === 200) {
        setCustomersData(response.data.data);
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
      mainHeader={"Customers"}
      currentPage={1}
      maxPages={2}
    >
      {!loading && (
        <>
          <StandartTable img={true}>
            <thead>
              <th></th>
              {HEADERS_SET.customers.map((item) => (
                <th>{item}</th>
              ))}
            </thead>
            <tbody>
              {customersData.map((object) => {
                return (
                  <tr key={object.id}>
                    <td data-label={""}>
                      <img
                        src={CELL_IMG_URL(object.name.replace(" ", "-"))}
                        alt="imageCell.svg"
                      />
                    </td>
                    <td data-label={HEADERS_SET.customers[0]}>
                      <Link to={AppUrlEnum.CURRENT_SUPPLIER + object.id}>
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
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </StandartTable>
          <Footer currentPage={1} totalPages={8} />
        </>
      )}
    </WrapperTables>
  );
};

export default Customers;

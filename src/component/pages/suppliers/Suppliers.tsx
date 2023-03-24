import { useEffect, useState } from "react";
import tableService from "../../../api/table-service";
import {
  AppUrlEnum,
  CELL_IMG_URL,
  HEADERS_SET,
  PAGE_URLS,
} from "../../../constants";
import { ISuppliersObject } from "../../types/commonTypes";
import { StandartTable } from "../../common/table/Table";
import WrapperTables from "../../wrappers/WrapperTables/WrapperTables";
import { Link } from "react-router-dom";

const Suppliers: React.FC = () => {
  const [suppliersData, setSuppliersData] = useState<ISuppliersObject[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const response = await tableService.getTableData<ISuppliersObject>({
        url: PAGE_URLS.suppliers,
        page: 1,
      });
      if (response.status === 200) {
        setSuppliersData(response.data.data);
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
      mainHeader={"Suppliers"}
      currentPage={1}
      maxPages={2}
    >
      {!loading && suppliersData && (
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
                      src={CELL_IMG_URL(object.name.replace(" ", "-"))}
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
      )}
      {!suppliersData && <p>Content not loaded! Try again...</p>}
    </WrapperTables>
  );
};

export default Suppliers;

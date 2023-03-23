import { useEffect, useState } from "react";
import tableService from "../../../api/table-service";
import { AppUrlEnum, SUPPLIERS_HEADERS } from "../../../constants";
import { ISupplierObject } from "../../types/commonTypes";
import { TableWithIcon } from "../../common/table/Table";
import WrapperTables from "../../wrappers/WrapperTables/WrapperTables";

const Suppliers: React.FC = () => {
  const [suppliersData, setSuppliersData] = useState<ISupplierObject[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const response = await tableService.getSuppliers({ page: 1 });
      if (response.status === 200) {
        setSuppliersData(response.data.data);
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
      {!loading && (
        <TableWithIcon
          way={AppUrlEnum.CURRENT_SUPPLIER}
          headers={SUPPLIERS_HEADERS}
          data={suppliersData}
        />
      )}
    </WrapperTables>
  );
};

export default Suppliers;

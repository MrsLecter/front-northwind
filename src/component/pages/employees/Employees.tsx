import { useEffect, useState } from "react";
import tableService from "../../../api/table-service";
import { AppUrlEnum, EMPLOYEES_HEADERS } from "../../../constants";
import { TableWithIcon } from "../../common/table/Table";
import { IEmployeeObject } from "../../types/commonTypes";
import WrapperTables from "../../wrappers/WrapperTables/WrapperTables";

const Employees: React.FC = () => {
  const [employeesData, setEmployeesData] = useState<IEmployeeObject[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const response = await tableService.getEmployees({ page: 1 });
      if (response.status === 200) {
        setEmployeesData(response.data.data);
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
          way={AppUrlEnum.CURRENT_EMPLOYEE}
          headers={EMPLOYEES_HEADERS}
          data={employeesData}
        />
      )}
    </WrapperTables>
  );
};

export default Employees;

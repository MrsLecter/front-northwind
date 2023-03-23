import redoIcon from "@icons/redo_black.svg";
import { StyledWrapperTables, StyledHeader } from "./WrapperTables.styles";

interface IWrapperTables {
  children: React.ReactNode;
  mainHeader: string;
  maxPages: number;
  currentPage: number;
  isLoading: boolean;
  isError: boolean;
}

const WrapperTables: React.FC<IWrapperTables> = ({
  children,
  mainHeader,
  currentPage,
  maxPages,
  isLoading = true,
  isError,
}) => {
  return (
    <StyledWrapperTables>
      {isLoading && <p>Loading suppliers...</p>}
      {isError && <p>Error occured during request! Try again</p>}
      {!isLoading && !isError && (
        <>
          <StyledHeader>
            <p>{mainHeader}</p>
            <img src={redoIcon} alt="redo.svg" />
          </StyledHeader>
          {children}
        </>
      )}
    </StyledWrapperTables>
  );
};

export default WrapperTables;

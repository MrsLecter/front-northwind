import { useNavigate } from "react-router";
import {
  StyledDetailedHeader,
  StyledDetailedFooter,
} from "./detailedPageComponents.styles";

export const DetailedHeader: React.FC<{
  header: string;
  withIcon?: boolean;
}> = ({ header, withIcon = true }) => {
  return (
    <StyledDetailedHeader>
      {withIcon && <span className="material-symbols-outlined">ballot</span>}
      {header[0].toUpperCase() + header.substring(1)}
      &nbsp;information
    </StyledDetailedHeader>
  );
};

export const DetailedFooter: React.FC = () => {
  const navigate = useNavigate();
  return (
    <StyledDetailedFooter>
      <button type="button" onClick={() => navigate(-1)}>
        Go back
      </button>
    </StyledDetailedFooter>
  );
};

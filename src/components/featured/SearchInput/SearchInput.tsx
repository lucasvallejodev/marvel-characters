import "./SearchInput.css";
import Typography from "../../ui/Typography/Typography";
import MagnifierIcon from "../../ui/icons/MagnifierIcon";

type SearchInputProps = {
  count?: number;
  onChange: (value: string) => void;
}

const SearchInput = ({ count, onChange }: SearchInputProps) => {
  return (
    <div className="search-input">
      <div className="search-input__container">
        <MagnifierIcon />
        <input
          type="text"
          placeholder="SEARCH A CHARACTER..."
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      {
        !!count && (
          <Typography size="sm">{count} RESULTS</Typography>
        )
      }
    </div>
  );
}

export default SearchInput;
import { TODO_FILTERS_BUTTONS } from "../consts";
import { type FilterValue } from "../types";

interface Props {
  filterSelected: FilterValue;
  onFilterChange: (key: FilterValue) => void;
}

const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className="filters">
      {Object.entries(TODO_FILTERS_BUTTONS).map(([key, { href, literal }]) => (
        <li key={key}>
          <a
            href={href}
            className={`${filterSelected === key ? "selected" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              onFilterChange(key as FilterValue);
            }}
          >
            {literal}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Filters;

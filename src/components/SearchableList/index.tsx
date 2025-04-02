// Imports
import UserAccordionList from "../UserAccordionList";
import { users } from "../../data/users";

// SearchableList component
const SearchableList = () => {
  return (
    <div className="App">
      <UserAccordionList
        users={users}
        attendedTitle="Attended"
        absentTitle="Absent"
        displayEmail={false}
      />
    </div>
  );
}

export default SearchableList;

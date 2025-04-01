import UserAccordionList from "../UserAccordionList";
import { users } from "../../data/users";

const SearchableList = () => {
  return (
    <div className="App">
      <UserAccordionList users={users} />
    </div>
  );
}

export default SearchableList;

import { useSearchParams } from "react-router-dom";
import HistoryHeader from "../components/historyCoponents/HistoryHeader";
import HistorySearchedImages from "../components/historyCoponents/HistorySearchedImages";
import SearchedValues from "../components/historyCoponents/SearchedValues";
import { useSearchContext } from "../context/contextHook/useSearchContext";

const HistoryPage = () => {
  const [searchParams] = useSearchParams();
  const { searchedValues } = useSearchContext();
  const serchedVal = searchParams.get("search");

  return (
    <div className="container mx-auto px-4 py-2">
      <HistoryHeader />
      {searchedValues.length > 0 && (
        <SearchedValues searchedValues={searchedValues} />
      )}
      {serchedVal && searchedValues.length > 0 && (
        <HistorySearchedImages serchedVal={serchedVal} />
      )}
    </div>
  );
};

export default HistoryPage;

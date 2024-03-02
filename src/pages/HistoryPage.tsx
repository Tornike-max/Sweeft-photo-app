import HistoryHeader from "../components/historyCoponents/HistoryHeader";
import HistorySearchedImages from "../components/historyCoponents/HistorySearchedImages";
import SearchedValues from "../components/historyCoponents/SearchedValues";

const HistoryPage = () => {
  return (
    <div className="container mx-auto px-4 py-2">
      <HistoryHeader />
      <SearchedValues />
      <HistorySearchedImages />
    </div>
  );
};

export default HistoryPage;

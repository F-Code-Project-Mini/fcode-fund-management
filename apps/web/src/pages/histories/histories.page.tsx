import Filters from './Filters';
import HistoriesTable from './HistoriesTable';

const HistoriesPage = () => {
  return (
    <section className="space-y-4">
      <Filters />
      <HistoriesTable />
    </section>
  );
};

export default HistoriesPage;

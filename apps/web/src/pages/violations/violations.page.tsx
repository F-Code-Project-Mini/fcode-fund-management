import AddViolationModal from './AddViolationModal';
import FilterViolations from './FilterViolations';
import ViolationsTable from './ViolationsTable';

const ViolationsPage = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Quản lý vi phạm</h1>
          <p className="text-sm opacity-60 mt-1">Theo dõi và quản lý các vi phạm nội bộ</p>
        </div>
        <AddViolationModal />
      </div>
      <FilterViolations />
      <ViolationsTable />
    </div>
  );
};

export default ViolationsPage;

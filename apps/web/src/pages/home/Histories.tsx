const Histories = () => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">Lịch sử nhận tiền gần đây</h3>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Thành viên</th>
            <th>Mã giao dịch</th>
            <th>Số tiền</th>
            <th>Sự kiện</th>
            <th>Thời gian</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td className="flex flex-col gap-1">
              <span className="font-semibold">Nguyễn Văn A</span>
              <span className="text-gray-400">SE200947</span>
            </td>
            <td>TXN123456</td>
            <td>
              <span className="text-primary font-semibold">+5.000.000đ</span>
            </td>
            <td>Quỹ Tháng 03</td>
            <td className="flex flex-col gap-1">
              <span className="text-gray-500">10 giây trước</span>
              <span className="font-semibold">2026-02-09 14:30:00</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Histories;

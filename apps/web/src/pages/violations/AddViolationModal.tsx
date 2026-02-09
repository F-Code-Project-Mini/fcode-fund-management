const AddViolationModal = () => {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          const modal = document.getElementById('add_violation_modal') as HTMLDialogElement;
          modal?.showModal();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Thêm vi phạm
      </button>

      <dialog id="add_violation_modal" className="modal">
        <div className="modal-box max-w-2xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg mb-4">Thêm vi phạm mới</h3>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mã sinh viên</span>
                </label>
                <input type="text" placeholder="VD: SE200947" className="input input-bordered w-full" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tên thành viên</span>
                </label>
                <input type="text" placeholder="Nhập tên" className="input input-bordered w-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Loại vi phạm</span>
                </label>
                <select className="select select-bordered w-full">
                  <option value="">Chọn loại vi phạm</option>
                  <option value="NO_UNIFORM">Không mặc đồng phục</option>
                  <option value="LATE_MEETING">Đi họp muộn</option>
                  <option value="OTHER">Khác</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Số tiền phạt (đ)</span>
                </label>
                <input type="number" placeholder="20000" className="input input-bordered w-full" min="0" />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Thời gian vi phạm</span>
              </label>
              <input type="datetime-local" className="input input-bordered w-full" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Ghi chú</span>
              </label>
              <textarea className="textarea textarea-bordered h-24" placeholder="Nhập ghi chú (nếu có)"></textarea>
            </div>

            <div className="modal-action">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  const modal = document.getElementById('add_violation_modal') as HTMLDialogElement;
                  modal?.close();
                }}
              >
                Hủy
              </button>
              <button type="submit" className="btn btn-primary">
                Thêm vi phạm
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default AddViolationModal;

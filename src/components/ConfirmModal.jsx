import React, { useRef, useEffect, useState } from 'react';
import Transition from '../utils/Transition';
import { deleteExpense } from '../redux/features/expense/expense.reducer';
import { useSelector, useDispatch } from 'react-redux';
import { deleteIncome } from '../redux/features/income/income.reducer';

function ConfirmModal({ modalOpen, setModalOpen, value, valueType }) {
  const modalContent = useRef(null);
  // close on click outside
  //   useEffect(() => {
  //     const clickHandler = ({ target }) => {
  //       if (!modalOpen || modalContent.current.contains(target)) return;
  //       setModalOpen(false);
  //     };
  //     document.addEventListener('click', clickHandler);
  //     return () => document.removeEventListener('click', clickHandler);
  //   });

  const dispatch = useDispatch();

  const handleDeleteExpense = (id) => {
    if (valueType === 'expense') {
      dispatch(deleteExpense(id));
      setModalOpen(false);
    } else {
      dispatch(deleteIncome(id));
      setModalOpen(false);
    }
  };

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-slate-900 bg-opacity-70 z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        className="fixed inset-0 z-50 overflow-hidden flex items-center top-20 mb-4 justify-center px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          ref={modalContent}
          className="bg-white dark:bg-slate-800 border border-transparent dark:border-slate-700 overflow-auto max-w-xl w-full max-h-full rounded shadow-lg p-5"
        >
          <div className="flex items-center justify-center flex-shrink-0 h-24 w-24 rounded-xl bg-red-100 text-red-500 mx-auto">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 2L2 21h20L12 2zm0 4v4m0 4v4"
              ></path>
            </svg>
          </div>
          <h1 className="text-xl text-center mt-5 font-bold text-slate-800 dark:text-slate-100">
            Are you sure?
          </h1>
          <p className="text-sm text-center mx-auto justify-center max-w-sm mt-3 text-gray-500">
            This action cannot be undone, All values associated with this field will be lost.
          </p>
          <button
            onClick={() => {
              handleDeleteExpense(value);
            }}
            className="w-full py-2 bg-[#4F46E5] hover:bg-[#433BCB] text-white rounded-md mt-5"
          >
            Delete
          </button>
          <button
            onClick={() => setModalOpen(false)}
            className="w-full py-2 border border-gray-700 rounded-md mt-2"
          >
            Cancel
          </button>
        </div>
      </Transition>
    </>
  );
}

export default ConfirmModal;

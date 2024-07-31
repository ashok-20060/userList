import { useState, useRef } from "react";

const useListProps = () => {
  const [userListData, setUserListData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSelectedUser, setCurrentSelectedUser] = useState({});
  const totalPagesRef = useRef(null);

  return {
    userListData,
    setUserListData,
    currentPage,
    setCurrentPage,
    currentSelectedUser,
    setCurrentSelectedUser,
    totalPagesRef,
  };
};

export default useListProps;

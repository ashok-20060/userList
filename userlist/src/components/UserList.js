import React, { useCallback, useEffect } from "react";

// Molecules
import UserListTable from "./molecules/userListTable";
import User from "./molecules/user";
import Pagination from "./molecules/pagination";

// Custom Hooks
import useLoader from "../customHooks/useLoader";
import useListProps from "../customHooks/useListProps";

// Helpers
import { getUserList } from "./UserList.helper";

const UserList = () => {
  const { loading, setLoading, setLoaded } = useLoader();
  const {
    userListData,
    setUserListData,
    currentPage,
    setCurrentPage,
    currentSelectedUser,
    setCurrentSelectedUser,
    totalPagesRef,
  } = useListProps();

  useEffect(() => {
    setLoading();
    getUserList(
      setUserListData,
      currentPage,
      setCurrentSelectedUser,
      totalPagesRef,
      setLoaded
    );
  }, [currentPage]);

  const onSelectUser = useCallback(
    (userId) => {
      const selectedUser = userListData.find((user) => user.id === userId);
      setCurrentSelectedUser(selectedUser);
    },
    [userListData, setCurrentSelectedUser]
  );

  const onPrevPageClick = useCallback(() => {
    setCurrentPage((currentPage) => currentPage - 1);
  }, [setCurrentPage, currentPage]);

  const onNextPageClick = useCallback(() => {
    setCurrentPage((currentPage) => currentPage + 1);
  }, [setCurrentPage, currentPage]);

  return (
    <>
      {loading ? (
        <div>Loading Data...</div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <UserListTable userList={userListData} onUserClick={onSelectUser} />
          <Pagination
            onNextPageClick={onNextPageClick}
            onPrevPageClick={onPrevPageClick}
            currentPage={currentPage}
            totalPagesRef={totalPagesRef}
          />
          <User selectedUser={currentSelectedUser} />
        </div>
      )}
    </>
  );
};

export default UserList;

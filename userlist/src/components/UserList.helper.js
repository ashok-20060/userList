export const getUserList = async (setUserListData, currentPage,setCurrentSelectedUser,totalPagesRef,setLoaded) => {
    const listPromise = await fetch(`https://reqres.in/api/users?page=${currentPage}&delay=5`);
    if(!listPromise.ok){
        alert('error in fecth api');
    }
    const listResponse = await listPromise.json();
    setUserListData(listResponse?.data);
    setCurrentSelectedUser({})
    totalPagesRef.current = {
        perPage: listResponse.per_page,
        totalPages: listResponse.total_pages
    };
    setLoaded();
}
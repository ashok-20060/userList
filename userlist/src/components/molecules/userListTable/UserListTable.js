// Atoms
import Image from "../../atoms/Image";
import Label from "../../atoms/Label";

// Styles
import "./userListTable.css";

const UserListTable = ({ userList = [], onUserClick }) => {
  const tableDataRows = userList.map((user) => {
    const { id, email, first_name, last_name, avatar } = user;
    return (
      <tr style={{ cursor: "pointer" }} onClick={() => onUserClick(id)}>
        <td className="tableDataCell">
          <Label content={id} />
        </td>
        <td className="tableDataCell">
          <Label content={email} />
        </td>
        <td className="tableDataCell">
          <Label content={first_name} />
        </td>
        <td className="tableDataCell">
          <Label content={last_name} />
        </td>
        <td className="tableCellImage">
          <Image width={40} height={40} src={avatar} />
        </td>
      </tr>
    );
  });

  return (
    <table>
      <tr>
        <th className="tableHeaderId">Id</th>
        <th className="tableHeader">Email</th>
        <th className="tableHeader">FirstName</th>
        <th className="tableHeader">LastName</th>
        <th className="tableImageHeader">Avatar</th>
      </tr>
      {tableDataRows}
    </table>
  );
};

export default UserListTable;

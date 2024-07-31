import Image from "../../atoms/Image";
import Label from "../../atoms/Label";

const User = ({ selectedUser = {} }) => {
  const { email, first_name, last_name, avatar } = selectedUser;
  const isUserPresent = Object.keys(selectedUser).length !== 0;

  return (
    <>
      {isUserPresent && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            rowGap: "10px",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              columnGap: "3px",
            }}
          >
          <Label label={first_name}/>
          <Label label={last_name}/>
          </div>
          <Label label={email}/>
          <Image src={avatar} />
        </div>
      )}
    </>
  );
};

export default User;

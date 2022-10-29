import React from "react";

function InputAdminOrData({ onChange, name, editemode, value }) {
  return (
    <>
      {editemode === false ? (
        value
      ) : (
        <input name={name} type={"text"} onChange={onChange} value={value} />
      )}
    </>
  );
}

export default InputAdminOrData;

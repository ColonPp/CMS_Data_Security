import React from "react";
import "../css/login.css";
import kuLogo from "../assets/images/ku-logo.png";
import TextField from "@mui/material/TextField";

function Login() {
  return (
    <div className="login-frame">
      <div className="logo">
        <img src={kuLogo} alt="ku-logo" width="110px" height="130" />
      </div>
      <div className="label">
        <h1>เข้าสู่ระบบยื่นคำร้องฝึกงาน</h1>
      </div>
      <form action="/">
        <div
          style={{
            color: "black",
            fontSize: 16,
            fontFamily: "kanit",
            fontWeight: "400",
            wordWrap: "break-word",
            marginLeft: 70,
            marginTop: 40,
          }}
        >
          บัญชีผู้ใช้
        </div>
        <div className="input-div">
          <input type="text" name="" id="" className="input" />
        </div>
        <div style={{ marginTop: 35 }}></div>
        <div
          style={{
            color: "black",
            fontSize: 16,
            fontFamily: "kanit",
            fontWeight: "400",
            wordWrap: "break-word",
            marginLeft: 70,
          }}
        >
          รหัสผ่าน
        </div>
        <div className="input-div">
          <input type="password" name="" id="" className="input" />
        </div>
        <div
          style={{
            color: "black",
            fontSize: 10,
            fontFamily: "kanit",
            fontWeight: "400",
            wordWrap: "break-word",
            marginLeft: 293,
            marginTop: 3,
          }}
        >
          <a href="#" style={{textDecoration: 'none'}}>ยังไม่มีบัญชี ต้องการลงทะเบียน?</a>
        </div>
        <div className="input-div">
          <button className="btn" type="submit">
            เข้าสู่ระบบ
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

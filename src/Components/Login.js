import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
// import axios from 'axios';
import { InputGroup, FormControl } from 'react-bootstrap';

function Login() {
  // const [UserName, setusername] = useState('');
  // const [Password, setpassword] = useState();

  // useEffect(() => {
  //     try {
  //         const response = axios.post("https://management-system-pbat.onrender.com/api/login")
  //             .then(response => {
  //                 console.log(response.data);
  //             });
  //         // Use 'response' here if needed
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }, []);

  return (
    <div className="wrapper  d-flex align-items-center justify-content-center w-100">

      <div className="login rounded">
        <h2 className="mb-3">Login Form</h2>
        <form className="">
          <div className="form-group mb-2">
            <label htmlFor="username" className="form-label">
              UserName
            </label>

            <InputGroup>
              <InputGroup.Text id="basic-addon1">
                <PersonIcon />
              </InputGroup.Text>
              <FormControl
                type="username"
                placeholder="Enter UserName"
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
              />
            </InputGroup>
          </div>
          <div className="form-group  mb-2">
            <label htmlFor="Password" className="form-label">
               Password
            </label>

            <InputGroup>
              <InputGroup.Text id="basic-addon2">
                <KeyIcon />
              </InputGroup.Text>
              <FormControl
                type="password"
                placeholder="Enter Password"
                aria-label="Password"
                aria-describedby="basic-addon2"
                required
              />
            </InputGroup>

            <div className="invalid-feedback">Please Enter your Password</div>
          </div>

          <div className="form-group form-check mb-2">
            <input type="checkbox" className="form-check-input" />
            <label htmlFor="check" className="form-check-label">
              Remember Me
            </label>
          </div>
          <button type="submit" className="btn btn-success w-100 block mt-2">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;




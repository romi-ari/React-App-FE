import {useState, React} from "react";
import { useNavigate } from "react-router-dom";
import {GoogleLogin} from "react-google-login"

async function doLogin({ email, encryptedPassword }) {
  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      encryptedPassword,
    }),
  });
  const data = await response.json();
  return data.token;
}

async function doLoginWithGoogle(token) {
  // Sesuaikan endpoint
  const response = await fetch("http://localhost:3000/api/v1/auth/google", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token
    }),
  });
  const data = await response.json();
  console.log(data.token)
  return data.token;
}

function Login() {
  const [email, setEmail] = useState("");
  const [encryptedPassword, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState("");

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    doLogin({ email, encryptedPassword })
      .then((token) => localStorage.setItem("token", token))
      .catch((err) => console.log(err.message))
      .finally(() => setIsLoading(false));
  }

  const navigate = useNavigate()

  function dashboard (e) {
    e.preventDefault()
    navigate('/dashboard')
  }
  
  const haldleSuccessGoogle = (response) => {
    console.log(response);
    console.log(response.tokenId);
    if(response.tokenId) {
      doLoginWithGoogle(response.tokenId)
        .then((token) => {
            localStorage.setItem("token", token);
            setIsLoggedIn(token);
          })
        .catch((err) => console.log(err.message))
        .finally(() => setIsLoading(false));      
    }
  }

  const haldleFailureGoogle = (response) => {
    console.log(response);
    alert(response);
  }

  return(
      <section className="vh-100 gradient-custom">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="shadow-lg bg-body rounded col-md-8 col-lg-6 col-xl-5" style={{padding: "0"}}>
              <div className="card bg-dark text-white" style={{borderRadius: "1rem;"}}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>
                    <form onSubmit={handleSubmit}>
                      <div className="form-outline form-white mb-4">
                        <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={encryptedPassword} />
                      </div>
                         <button className="btn btn-outline-light btn-lg px-5" type="submit" value={isLoading ? "Loading" : "Login"} >Submit</button>
                         <button className="btn btn-outline-light btn-lg px-5" type="button" onClick={dashboard} >Login</button>
                    </form>
                    <GoogleLogin
                      clientId={process.env.GOOGLE_CLIENT_ID}
                      buttonText="Login with Google"
                      onSuccess={haldleSuccessGoogle}
                      onFailure={haldleFailureGoogle}
                      cookiePolicy={'single_host_origin'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  )
}

export default Login

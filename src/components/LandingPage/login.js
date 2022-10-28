import React from "react"

function Login() {
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

                  <div className="form-outline form-white mb-4">
                    <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder="Email"/>
                  </div>

                  <div className="form-outline form-white mb-4">
                    <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder="Password" />
                  </div>

                  <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

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

import React, { Component } from 'react';


class Register extends Component {


  render() {

    return (
      <>
        <section class="min-vh-100 d-flex bg-primary align-items-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-md-8 col-lg-6 justify-content-center">
                <div class="card bg-primary shadow-soft border-light p-4">
                  <div class="card-header text-center pb-0">
                    <h2 class="mb-0 h5">We can't find details for your account</h2>
                    <h4 class="mb-0 h6">Please provide us with the some??</h4>
                  </div>
                  <div class="card-body">
                    <form action="#">
                      <div class="form-group">
                        <label for="exampleInputIcon4">Your email</label>
                        <div class="input-group mb-4">
                          <div class="input-group-prepend">
                            <span class="input-group-text"><span class="fas fa-envelope"></span></span>
                          </div>
                          <input class="form-control" id="exampleInputIcon4" placeholder="example@company.com" type="text" aria-label="email adress" />
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="form-group">
                          <label for="exampleInputPassword7">Password</label>
                          <div class="input-group mb-4">
                            <div class="input-group-prepend">
                              <span class="input-group-text"><span class="fas fa-unlock-alt"></span></span>
                            </div>
                            <input class="form-control" id="exampleInputPassword7" placeholder="Password" type="password" aria-label="Password" required />
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="exampleConfirmPassword7">Confirm Password</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text"><span class="fas fa-unlock-alt"></span></span>
                            </div>
                            <input class="form-control" id="exampleConfirmPassword7" placeholder="Confirm password" type="password" aria-label="Password" required />
                          </div>
                        </div>
                        <div class="form-check mb-4">
                          <input class="form-check-input" type="checkbox" value="" id="defaultCheck6" />
                          <label class="form-check-label" for="defaultCheck6">
                            I agree to the <a href="#">terms and conditions</a>
                          </label>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-block btn-primary">Sign in</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

}

export default Register;
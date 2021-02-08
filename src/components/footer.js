import React, { Component } from 'react';


import { Div, StyleReset, ThemeProvider, Button } from "atomize";
import { render } from '@testing-library/react';


class Footer extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <p>
                            {/* does not update on state update, props is static lmao */}
                            <strong>Logged In User::</strong>
                            <br/>
                            Address :: {this.props.address}
                            <br/>
                            Balance :: {this.props.balance}
                        </p>
                        <ul class="d-flex list-unstyled mb-5 mb-lg-0">
                            <li class="mr-2">
                                <a href="https://twitter.com/themesberg" target="_blank" class="btn btn-icon-only btn-pill btn-primary" aria-label="twitter social link"
                                    data-toggle="tooltip" data-placement="top" title="Follow @themesberg on Twitter">
                                    <span aria-hidden="true" class="fab fa-twitter"></span>
                                </a>
                            </li>
                            <li class="mr-2">
                                <a href="https://www.facebook.com/themesberg/" target="_blank" class="btn btn-icon-only btn-pill btn-primary" aria-label="facebook social link"
                                    data-toggle="tooltip" data-placement="top" title="Like @themesberg on Facebook">
                                    <span aria-hidden="true" class="fab fa-facebook"></span>
                                </a>
                            </li>
                            <li class="mr-2">
                                <a href="https://github.com/themesberg" target="_blank" class="btn btn-icon-only btn-pill btn-primary" aria-label="github social link"
                                    data-toggle="tooltip" data-placement="top" title="Open source projects">
                                    <span aria-hidden="true" class="fab fa-github"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://dribbble.com/themesberg" target="_blank" class="btn btn-icon-only btn-pill btn-primary" aria-label="dribbble social link"
                                    data-toggle="tooltip" data-placement="top" title="Follow us on Dribbble">
                                    <span aria-hidden="true" class="fab fa-dribbble"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 mb-5 mb-lg-0">
                        <h5>Themesberg</h5>
                        <ul class="footer-links list-unstyled mt-2">
                            <li class="mb-1"><a class="p-2" target="_blank" href="https://themesberg.com/blog">Blog</a></li>
                            <li class="mb-1"><a class="p-2" target="_blank" href="https://themesberg.com/products">Products</a></li>
                            <li class="mb-1"><a class="p-2" target="_blank" href="https://themesberg.com/about">About Us</a></li>
                            <li><a class="p-2" target="_blank" href="https://themesberg.com/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col-6 col-lg-2 mb-5 mb-lg-0">
                        <h5>Other</h5>
                        <ul class="footer-links list-unstyled mt-2">
                            <li class="mb-1"><a class="p-2" href="https://themesberg.com/docs/pixel-bootstrap/getting-started/overview/" target="_blank">Docs
                                <span class="badge badge-gray text-uppercase ml-2">v1.0</span></a>
                            </li>
                            <li class="mb-1">
                                <a class="p-2" href="https://themesberg.com/docs/pixel-bootstrap/getting-started/changelog" target="_blank">Changelog</a>
                            </li>
                            <li class="mb-1">
                                <a class="p-2" target="_blank" href="https://themesberg.com/licensing">License</a>
                            </li>
                            <li>
                                <a class="p-2" target="_blank" href="https://github.com/themesberg/pixel-bootstrap-ui-kit/issues">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-4 mb-5 mb-lg-0">
                        <h5>Subscribe</h5>
                        <p class="text-gray font-small mt-2">Join our mailing list. We write rarely, but only the best content.</p>
                        <form action="#">
                            <div class="form-row mb-2">
                                <div class="col-12">
                                    <label class="h6 font-weight-normal d-none" for="exampleInputEmail3">Email address</label>
                                    <input type="email" class="form-control mb-2" placeholder="example@company.com" name="email" aria-label="Subscribe form" id="exampleInputEmail3" required />
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary btn-block" data-loading-text="Sending">
                                        <span>Subscribe</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <p class="text-gray font-small m-0">We’ll never share your details. See our <a class="text-black" href="#">Privacy Policy</a></p>
                    </div>
                </div>
                <hr class="my-5" />
                <div class="row">
                    <div class="col">
                        <div class="d-flex text-center justify-content-center align-items-center" role="contentinfo" />
                        <p class="font-weight-normal font-small mb-0">Copyright © Themesberg
                            <span class="current-year">2020</span>. All rights reserved.</p>
                    </div>
                </div>
            </div>
        );
    }
}



export default Footer;
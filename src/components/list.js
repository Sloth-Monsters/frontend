import React, { Component, useState } from 'react';
import { Div, StyleReset, ThemeProvider, Button } from "atomize";

import { web3, portis } from '../services/web3';


const List = (props) => {
    return (
        <>
            <div class="section bg-primary text-dark section-lg">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="mb-4">
                                <span class="h5">Default table</span>
                            </div>
                            <div class="mb-5">
                                <table class="table shadow-soft rounded">
                                    <tr>
                                        <th class="border-0" scope="col" id="class">Class</th>
                                        <th class="border-0" scope="col" id="teacher">Teacher</th>
                                        <th class="border-0" scope="col" id="males">Males</th>
                                        <th class="border-0" scope="col" id="females">Females</th>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="firstyear" rowspan="2">First Year</th>
                                        <th scope="row" id="Bolter" headers="firstyear teacher">D. Bolter</th>
                                        <td headers="firstyear Bolter males">5</td>
                                        <td headers="firstyear Bolter females">4</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="Cheetham" headers="firstyear teacher">A. Cheetham</th>
                                        <td headers="firstyear Cheetham males">7</td>
                                        <td headers="firstyear Cheetham females">9</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="secondyear" rowspan="3">Second Year</th>
                                        <th scope="row" id="Lam" headers="secondyear teacher">M. Lam</th>
                                        <td headers="secondyear Lam males">3</td>
                                        <td headers="secondyear Lam females">9</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="Crossy" headers="secondyear teacher">S. Crossy</th>
                                        <td headers="secondyear Crossy males">4</td>
                                        <td headers="secondyear Crossy females">3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="Forsyth" headers="secondyear teacher">A. Forsyth</th>
                                        <td headers="secondyear Forsyth males">6</td>
                                        <td headers="secondyear Forsyth females">9</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="mb-5">
                                <div class="mb-4">
                                    <span class="h5">Hoverable rows</span>
                                </div>
                                <table class="table table-hover shadow-inset rounded">
                                    <tr>
                                        <th class="border-0" scope="col" id="class3">Class</th>
                                        <th class="border-0" scope="col" id="teacher3">Teacher</th>
                                        <th class="border-0" scope="col" id="males3">Males</th>
                                        <th class="border-0" scope="col" id="females3">Females</th>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="firstyear3" rowspan="2">First Year</th>
                                        <th scope="row" id="Bolter3" headers="firstyear3 teacher3">D. Bolter</th>
                                        <td headers="firstyear3 Bolter3 males3">5</td>
                                        <td headers="firstyear3 Bolter3 females3">4</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="Cheetham3" headers="firstyear3 teacher3">A. Cheetham</th>
                                        <td headers="firstyear3 Cheetham3 males3">7</td>
                                        <td headers="firstyear3 Cheetham3 females3">9</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="secondyear3" rowspan="3">Second Year</th>
                                        <th scope="row" id="Lam3" headers="secondyear3 teacher3">M. Lam</th>
                                        <td headers="secondyear3 Lam3 males3">3</td>
                                        <td headers="secondyear3 Lam3 females3">9</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="Crossy3" headers="secondyear3 teacher3">S. Crossy</th>
                                        <td headers="secondyear3 Crossy3 males3">4</td>
                                        <td headers="secondyear3 Crossy3 females3">3</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" id="Forsyth3" headers="secondyear3 teacher3">A. Forsyth</th>
                                        <td headers="secondyear3 Forsyth3 males3">6</td>
                                        <td headers="secondyear3 Forsyth3 females3">9</td>
                                    </tr>
                                </table>
                            </div>
                            <div class="mb-5">
                                <div class="mb-4">
                                    <span class="h5">Responsive Table</span>
                                </div>
                                <div class="table-responsive-sm shadow-soft rounded">
                                    <table class="table table-striped">
                                        <tr>
                                            <th class="border-0" scope="col" id="class2">Class</th>
                                            <th class="border-0" scope="col" id="teacher2">Teacher</th>
                                            <th class="border-0" scope="col" id="males2">Males</th>
                                            <th class="border-0" scope="col" id="females2">Females</th>
                                        </tr>
                                        <tr>
                                            <th scope="row" id="firstyear2" rowspan="2">First Year</th>
                                            <th scope="row" id="Bolter2" headers="firstyear2 teacher2">D. Bolter</th>
                                            <td headers="firstyear2 Bolter2 males2">5</td>
                                            <td headers="firstyear2 Bolter2 females2">4</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" id="Cheetham2" headers="firstyear2 teacher2">A. Cheetham</th>
                                            <td headers="firstyear2 Cheetham2 males2">7</td>
                                            <td headers="firstyear2 Cheetham2 females2">9</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" id="secondyear2" rowspan="3">Second Year</th>
                                            <th scope="row" id="Lam2" headers="secondyear2 teacher2">M. Lam</th>
                                            <td headers="secondyear2 Lam2 males2">3</td>
                                            <td headers="secondyear2 Lam2 females2">9</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" id="Crossy2" headers="secondyear2 teacher2">S. Crossy</th>
                                            <td headers="secondyear2 Crossy2 males2">4</td>
                                            <td headers="secondyear2 Crossy2 females2">3</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" id="Forsyth2" headers="secondyear2 teacher2">A. Forsyth</th>
                                            <td headers="secondyear2 Forsyth2 males2">6</td>
                                            <td headers="secondyear2 Forsyth2 females2">9</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );


}

export default List;
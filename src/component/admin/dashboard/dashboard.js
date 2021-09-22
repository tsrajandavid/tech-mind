import React, { Component } from 'react'
import logo from './../../../assets/images/tech-mind.svg'
import { Link } from 'react-router-dom'
export default class dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <header>
                    <img src={logo} />
                </header>
                <aside>
                    <ul className="menu">
                        <li className="menu-item">
                            <Link to="dashboard"> Dashboard</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="dashboard"> Post</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="dashboard"> User</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="dashboard"> Role</Link>
                        </li>
                    </ul>
                </aside>
                <section className="dashboard-content">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
}

import React, { useState, useMemo } from 'react'
import logo from './../../../assets/images/tech-mind.svg'
import { Link } from 'react-router-dom'

import Table from './Table'
import makeData from './makeData'
import { Row, Col, Button, Modal, Form } from 'react-bootstrap'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function PostList() {
    const [value, setValue] = useState('');
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }
    const columns = React.useMemo(
        () => [
            {
                Header: 'Post Title',
                accessor: 'postTitle',
            },
            {
                Header: 'Post Description',
                accessor: 'postDescription',
            },
            {
                Header: 'Categories',
                accessor: 'categories',
            },
            {
                Header: 'Action',
                accessor: 'action',
                Cell: row => (
                    <div>
                        <i className="bi bi-pencil-square mr-3"></i>
                        <i className="bi bi-trash"></i>
                    </div>
                )
            },

        ],
        []
    )

    const data = React.useMemo(() => makeData(100), [])
    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['image', 'code-block']
            ],

        }
    }), [])
    return (
        <div>
            <div className="dashboard">
                <header>
                    <img src={logo} />
                </header>
                <aside>
                    <ul className="menu">
                        <li className="menu-item">
                            <i class="bi bi-grid-1x2-fill"></i>
                            <Link to="dashboard"> Dashboard</Link>
                        </li>
                        <li className="menu-item">
                            <i class="bi bi-file-post"></i>
                            <Link to="dashboard"> Post</Link>
                        </li>
                        <li className="menu-item">
                            <i class="bi bi-people"></i>
                            <Link to="dashboard"> User</Link>
                        </li>
                        <li className="menu-item">
                            <i class="bi bi-key"></i>

                            <Link to="dashboard"> Role</Link>
                        </li>
                    </ul>
                </aside>
                <section className="dashboard-content">
                    <div className="text-center d-flex justify-content-end mb-3">
                        <button class="btn btn-primary" onClick={handleShow}><i class="bi bi-plus-lg"></i> Add Post</button>
                    </div>

                    <Table columns={columns} data={data} />
                </section>
            </div>

            <Modal show={show} onHide={handleClose} centered className="postModal">
                <Modal.Header closeButton>
                    <Modal.Title>Add Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col md={12}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Post Title</Form.Label>
                                    <Form.Control type="text" placeholder="Post Title" />
                                </Form.Group>

                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Categories</Form.Label>
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Post Title</Form.Label>
                                    <Form.Control type="date" placeholder="Post Title" />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Post Description</Form.Label>
                                    <ReactQuill modules={modules} formats="image" theme="snow" value={value} />
                                </Form.Group>

                            </Col>
                            <Col md={12} className="d-flex justify-content-end">
                                <button type="button" class="btn btn-secondary mr-3">Cancel</button>
                                <button type="button" class="btn btn-success">Save</button>
                            </Col>
                        </Row>
                    </Form>

                </Modal.Body>

            </Modal>

        </div >
    )
}

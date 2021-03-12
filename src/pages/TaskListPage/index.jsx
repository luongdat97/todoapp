import React, { Component, Fragment } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap'

let taskList = [
    "Đi chơi bóng đá",
    "Mua đồ ăn",
    "Làm bài tập về nhà",
    "Dọn dẹp nhà cửa"
]
    
    

export default function TaskListPage() {
    return (
        <>
            <div style={{ width: 900, padding: "25px 100px"}}>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Nhập nhiệm vụ bạn muốn thêm..." />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Button variant="primary" type="submit">
                                Thêm
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
                <h3 className="my-3">Danh sách nhiệm vụ</h3>
                {
                    taskList.map(task => (
                        <Row className="my-3 border-bottom py-2">
                            <Col xs={9}>
                                {task}
                            </Col>
                            <Col xs={3}>
                                <Button variant="warning" className="mr-3">Sửa</Button>
                                <Button variant="danger">Xóa</Button>
                            </Col>
                        </Row>
                    ))
                }
                
            </div>

        </>
    )
}
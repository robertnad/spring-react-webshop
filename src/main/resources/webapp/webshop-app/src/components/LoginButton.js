import React, { useState } from 'react';
import { Modal, Button, Icon, Tabs, Input } from 'antd';

const { TabPane } = Tabs;

const LoginButton = () => {
    const [showModal, setShowModal] = useState(false);
    // const [signInSelected, setSignInSelected] = useState(true);

    const handleClose = () => {
        setShowModal(false);
    }

    const handleSubmit = () => {
        setShowModal(false);
    }

    const callback = (key) => {
        console.log(key);
    }

    return (
        <div>
            <Button onClick={() => setShowModal(true)}>
                Log in <Icon type="login" />
            </Button>
            <Modal
                // title="Login form"
                visible={showModal}
                // onOk={this.handleOk}
                onCancel={handleClose}
                footer={[
                    <Button key="submit" type="primary" onClick={handleSubmit}>
                        Confirm
                    </Button>,
                  ]}
                >
                <Tabs onChange={callback} type="card">
                    <TabPane tab="Sign in" key="1">
                        <Button><Icon type="mail" theme="twoTone" />Sign in with Google</Button>
                        <Input
                            style={{ paddingTop: '10px' }}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />
                        <Input
                            style={{ paddingTop: '5px' }}
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />
                    </TabPane>
                    <TabPane tab="Register" key="2">
                        <Input                            
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />
                        <Input
                            style={{ paddingTop: '10px' }}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Email"
                        />
                        <Input
                            style={{ paddingTop: '10px' }}
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />
                        <Input
                            style={{ paddingTop: '10px' }}
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </TabPane>
                </Tabs>
            </Modal>
        </div>
    )
}

export default LoginButton;

 /* <Modal
                className="modal"
                isOpen={showModal}
                contentLabel="User Login"
                ariaHideApp={false}
                closeTimeoutMS={150}
            >
                <div className="modal-header">
                    <button
                        className="modal-button"
                        onClick={() => {
                            setSignInSelected(true);
                        }}
                    >
                        Sign in
                    </button>
                    <button
                        className="modal-button"
                        onClick={() => {
                            setSignInSelected(false);
                        }}
                    >
                        Register
                    </button>
                    <button
                        className="modal-button button--close"
                        onClick={() => setShowModal(false)}
                    >
                        x
                    </button>
                </div>

                <button
                    className="google-button"
                    onClick={startLoginWithGoogle}
                >
                    <img className="google-button__icon" src="/images/Google_Logo.svg" alt="" />
                    <span className="google-button__text">
                    Sign in with Google
                    </span>
                </button>

                <button
                    className="github-button"
                    onClick={startLoginWithGithub}
                >
                    <img className="github-button__icon" src="/images/Github_Logo.svg" alt="" />
                    <span className="github-button__text"> 
                    Sign in with Github
                    </span>
                </button>

                {signInSelected ? <SignIn/> : <SignUp/>}
</Modal> */
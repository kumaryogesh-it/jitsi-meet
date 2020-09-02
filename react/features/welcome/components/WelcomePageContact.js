/*
import React from 'react';

import Button from '@atlaskit/button';

import Modal, { ModalTransition } from '@atlaskit/modal-dialog';

export default class WelcomePageContact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      mailSent: false,
      error: null,
      isOpen: false,
    }
  }
  //state = {};

  open = () => this.setState({ isOpen: true });

  close = () => this.setState({ isOpen: false });
  //Check for existing alternative of axios API.
  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `http://app.test/php/react.php`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    }).then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      }).catch(error => this.setState({ error: error.message }));
  };

  render() {
    const { isOpen } = this.state;
    const actions = [
      { text: 'Close', onClick: this.close },
    ];

    return (
      <div>
        <Button onClick={this.open}>Contact Us</Button>

        <ModalTransition>
          {isOpen && (
            <Modal actions={actions} onClose={this.close} heading="Contact Us">

              <form action="/action_page.php">
                <label>Name: </label>
                  <div class="enter-room-input-container">
                    <input class="enter-room-input" type="text" required id="name" name="name" placeholder="Your name.." value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })} /> <br /><br />
                  </div>
                <label>Email:</label>
                  <input type="email" id="email" name="email" placeholder="Your email.." value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })} /> <br /><br />
                <label>Phone:</label>
                  <input type="text" required id="phone" name="phone" placeholder="Your phone.." value={this.state.phone}
                    onChange={e => this.setState({ phone: e.target.value })} /> <br /><br />
                <label>Message:</label>
                  <textarea id="message" name="message" placeholder="Write something.." value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })} ></textarea> <br /><br />
                  <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" /> <br /><br />
              </form>

              <div>
                {this.state.mailSent &&
                  <div>Thank you for contcting us.</div>
                }
              </div>

            </Modal>
          )}
        </ModalTransition>
      </div>
    );
  }
}
*/
import React from "react";

import Button from "@atlaskit/button";

import Modal, { ModalTransition } from "@atlaskit/modal-dialog";

export default class WelcomePageContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
            mailSent: false,
            error: null,
            isOpen: false,
        };
    }
    //state = {};

    open = () => this.setState({ isOpen: true });

    close = () => this.setState({ isOpen: false });
    //Check for existing alternative of axios API.
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.close();

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.state)
        };
        fetch('http://app.test/php/react.php', requestOptions)
          .then(response => response.json())
          .then(data => this.setState({ postId: data.id }));

        // axios({
        //     method: "post",
        //     url: `http://app.test/php/react.php`,
        //     headers: { "content-type": "application/json" },
        //     data: this.state,
        // })
        //     .then((result) => {
        //         this.setState({
        //             mailSent: result.data.sent,
        //         });
        //     })
        //     .catch((error) => this.setState({ error: error.message }));
    };

    render() {
        const { isOpen } = this.state;
        const actions = [{ text: "Close", onClick: this.close }];
        const inputStyle = {
            height: 40,
            width: "100%",
            fontSize: 16,
            color: "white",
            margin: 10,
            backgroundColor: "#273546",
            border: "none",
            borderBottom: "1px solid white",
            padding: 5,
        };

        const textAreaStyle = {
            height: "auto",
            width: "100%",
            fontSize: 16,
            margin: 10,
            color: "white",
            backgroundColor: "#273546",
            border: "none",
            borderBottom: "1px solid white",
            padding: 5,
            lineHeight: 1,
        };

        return (
            <div>
                <Button onClick={this.open}>Contact Us</Button>
                <ModalTransition>
                    {isOpen && (
                        <Modal
                            actions={actions}
                            onClose={this.handleFormSubmit}
                            heading="Contact Us"
                        >
                            <form
                                action="/action_page.php"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <input
                                    style={inputStyle}
                                    type="text"
                                    required
                                    id="name"
                                    name="name"
                                    placeholder="Your name.."
                                    value={this.state.name}
                                    onChange={(e) =>
                                        this.setState({
                                            name: e.target.value,
                                        })
                                    }
                                />

                                <input
                                    style={inputStyle}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your email.."
                                    value={this.state.email}
                                    onChange={(e) =>
                                        this.setState({
                                            email: e.target.value,
                                        })
                                    }
                                />

                                <input
                                    style={inputStyle}
                                    type="text"
                                    required
                                    id="phone"
                                    name="phone"
                                    placeholder="Your phone.."
                                    value={this.state.phone}
                                    onChange={(e) =>
                                        this.setState({
                                            phone: e.target.value,
                                        })
                                    }
                                />

                                <textarea
                                    style={textAreaStyle}
                                    id="message"
                                    name="message"
                                    rows="1"
                                    placeholder="Write something.."
                                    value={this.state.message}
                                    onChange={(e) =>
                                        this.setState({
                                            message: e.target.value,
                                        })
                                    }
                                ></textarea>
                            </form>

                            <div>
                                {this.state.mailSent && (
                                    <div>Thank you for contcting us.</div>
                                )}
                            </div>
                        </Modal>
                    )}
                </ModalTransition>
            </div>
        );
    }
}

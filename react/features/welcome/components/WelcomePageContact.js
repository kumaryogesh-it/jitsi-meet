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
      url: `http://localhost:1992/react-contact-form/api/contact/index.php`,
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
                  <input type="text" required id="name" name="name" placeholder="Your name.." value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })} /> <br /><br />
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

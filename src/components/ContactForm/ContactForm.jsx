import { nanoid } from 'nanoid';
import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = nanoid();
  numberId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.name.trim() === '') {
      alert('Please enter a valid name.');
      return;
    }

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <h2>{this.props.title}</h2>
          <label htmlFor={this.nameId}>
            Name
            <input
              style={{ marginLeft: '10px', marginRight: '10px' }}
              name="name"
              type="text"
              required
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              id={this.nameId}
            />
          </label>
          <label htmlFor={this.numberId}>
            Number
            <input
              style={{ marginLeft: '10px' }}
              name="number"
              type="tel"
              required
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              id={this.numberId}
            />
          </label>
          <button type="submit" style={{ marginLeft: '20px' }}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;

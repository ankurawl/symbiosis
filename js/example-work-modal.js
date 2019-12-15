import React from 'react';

class ExampleWorkModal extends React.Component {
  render() {
    let exmpl = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (

      <div className={ "background--skyBlue " + modalClass } >
        <span className="color--cloud modal__closeButton"
              onClick = { this.props.closeModal } >
          <i className="fas fa-window-close"></i>
        </span>

        <img alt={ exmpl.image.desc }
              className="modal__image"
              src={ exmpl.image.src } />

        <div className="color--cloud modal__text">
          <h2 className="modal__title">
            { exmpl.title }
          </h2>
          <a className="color--skyBlue modal__link"
              href={ exmpl.href } >
            Check it out
          </a>
          <p className="modal__description">
            { exmpl.desc }
          </p>
        </div>

      </div>

    )
  };
};


export default ExampleWorkModal;

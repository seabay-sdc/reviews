import React from 'react';
import './styling.css';
import Modal from 'react-modal';
import { throws } from 'assert';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    }
  };
   
  // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#item-reviews')
   
  class WriteRev extends React.Component {
    constructor() {
      super();
   
      this.state = {
        modalIsOpen: false,
        review: "",
        user: "",
        title: ""
      };
   
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.handleReview = this.handleReview.bind(this);
      this.handleUser = this.handleUser.bind(this);
      this.handleTitle = this.handleTitle.bind(this);
    }
   
    openModal() {
      this.setState({modalIsOpen: true});
    }
   
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#f00';
    }
   
    closeModal() {
      this.setState({modalIsOpen: false});
    }

    handleReview(event) {
        this.setState({review: event.target.value});
      }

    handleUser(event) {
        this.setState({user: event.target.value});
    }

    handleTitle(event) {
        this.setState({title: event.target.value});
    }

    render() {
      return (
        <div id="buttonTile">
          <button id="buttonR"onClick={this.openModal}>Write Review</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            size="lg"
          >
            <div ref={subtitle => this.subtitle = subtitle}></div>
            <center><h2 id="newReviewTitle" >Write Review</h2></center>
            <br></br>
            <form onSubmit={() => {
                this.props.handleSubmit(this.state.review, this.state.user, this.state.title) 
                .then(() => this.closeModal() )    
            }}>
            {/* {this.props.closeModal(this.closeModal)} */}
              <input id="userName" placeholder="User Name" value={this.state.user} onChange={this.handleUser} />
              <br></br>
              <input id="userName" placeholder="Title" value={this.state.title} onChange={this.handleTitle} />
            <br></br>
              <input id="reviewForm" placeholder="Review..." value={this.state.review} onChange={this.handleReview} />
            <br></br>
            <center><input type="submit" value="Submit"/></center>
            </form>
          </Modal>
        </div>
      );
    }
  }
  

  export default WriteRev 
import React from 'react';
import './styling.css';
import Modal from 'react-modal';
import { throws } from 'assert';
import ReactStars from 'react-stars'

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
   
  Modal.setAppElement('#item-reviews')
   
  class WriteRev extends React.Component {
    constructor() {
      super();
   
      this.state = {
        modalIsOpen: false,
        review: "",
        user: "",
        title: "",
        score: 1
      };
   
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.handleReview = this.handleReview.bind(this);
      this.handleUser = this.handleUser.bind(this);
      this.handleTitle = this.handleTitle.bind(this);
      this.ratingChanged = this.ratingChanged.bind(this)
    }
   
    openModal() {
      this.setState({modalIsOpen: true});
    }
   
    afterOpenModal() {
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
    ratingChanged (newRating) {
      this.setState({ score: newRating})
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
          <div id="reviewContainerR">
            <form onSubmit={() => {
                this.props.handleSubmit(this.state.review, this.state.user, this.state.title, this.state.score) 
                .then(() => this.closeModal() )    
            }}>

            <input id="userName" placeholder="User Name" value={this.state.user} onChange={this.handleUser} />
                  <br></br>
            <input id="userName" placeholder="Title" value={this.state.title} onChange={this.handleTitle} />
                <br></br>
            <ReactStars
            onChange={this.ratingChanged}
            count={5}
            value={this.state.score}
            size={20}
            color1={'#C3C3C2'}
            color2={'#E8952A'} 
            half={false}
            />
            <div className= "recContainer" >
              <div className= "recCol">
                <select name="woulRec" form="woulRec">
                <option value="1">Yes</option>
                <option value="0">No</option>
                </select>
              </div>
              <div className= "recCol">
                <div></div>
                <select name="woulRec" form="woulRec">
                <option value="1">Yes</option>
                <option value="0">No</option>
                </select>
              </div>
              <div className= "recCol">
                <select name="woulRec" form="woulRec">
                <option value="1">Yes</option>
                <option value="0">No</option>
                </select>
              </div>
            </div>
            
            <br></br>
            <textarea rows="7" cols="60" wrap="hard" id="reviewForm" placeholder="Review..." value={this.state.review} onChange={this.handleReview} />
                <br></br>
            <center><input type="submit" value="Submit"/></center>
            </form>
          </div>
        </Modal>
        </div>
      );
    }
  }
  

  export default WriteRev 
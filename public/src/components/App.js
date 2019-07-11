import React from 'react';
import axios from 'axios';
import './styling.css';
import Button from './Button.jsx';
import Rankings from './Rankings.jsx';
import SeeReviews from './seeReviews.jsx';
import Reviews from './reviews.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      reviews: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const self = this;
    axios.get('/test').then(function (response) {
      self.setState({
        reviews: response.data
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return React.createElement("div", null, React.createElement("div", {
      className: "headcontainer"
    }, React.createElement("div", {
      id: "title"
    }, "Ratings and Reviews"), React.createElement("div", null), React.createElement("div", null, " ", React.createElement(Button, null))), React.createElement("hr", null), React.createElement("br", null), React.createElement("div", null, React.createElement(Rankings, null)), React.createElement("hr", null), React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      id: "subtitle"
    }, "Most Relevant Reviews"), React.createElement("div", null), React.createElement(SeeReviews, null)), React.createElement("br", null), React.createElement(Reviews, {
      list: this.state.reviews
    }));
  }

}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJCdXR0b24iLCJSYW5raW5ncyIsIlNlZVJldmlld3MiLCJSZXZpZXdzIiwiQXBwIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImlkIiwicmV2aWV3cyIsImNvbXBvbmVudERpZE1vdW50IiwiYmluZCIsInNlbGYiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXRTdGF0ZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPLGVBQVA7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLGNBQW5CO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixnQkFBckI7QUFDQSxPQUFPQyxVQUFQLE1BQXVCLGtCQUF2QjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsZUFBcEI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQk4sS0FBSyxDQUFDTyxTQUF4QixDQUFrQztBQUNoQ0MsRUFBQUEsV0FBVyxHQUFJO0FBQ2I7QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsRUFBRSxFQUFFLENBRE87QUFFWEMsTUFBQUEsT0FBTyxFQUFFO0FBRkUsS0FBYjtBQUlBLFNBQUtDLGlCQUFMLEdBQXlCLEtBQUtBLGlCQUFMLENBQXVCQyxJQUF2QixDQUE0QixJQUE1QixDQUF6QjtBQUNEOztBQUVERCxFQUFBQSxpQkFBaUIsR0FBRztBQUNsQixVQUFNRSxJQUFJLEdBQUcsSUFBYjtBQUNBYixJQUFBQSxLQUFLLENBQUNjLEdBQU4sQ0FBVSxPQUFWLEVBQ0dDLElBREgsQ0FDUSxVQUFVQyxRQUFWLEVBQW9CO0FBQzFCSCxNQUFBQSxJQUFJLENBQUNJLFFBQUwsQ0FBYztBQUFFUCxRQUFBQSxPQUFPLEVBQUVNLFFBQVEsQ0FBQ0U7QUFBcEIsT0FBZDtBQUNELEtBSEQsRUFJR0MsS0FKSCxDQUlTLFVBQVVDLEtBQVYsRUFBaUI7QUFDeEJDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QsS0FORDtBQU9EOztBQUdERyxFQUFBQSxNQUFNLEdBQUk7QUFDUixXQUNFLGlDQUNBO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUNBO0FBQUssTUFBQSxFQUFFLEVBQUM7QUFBUiw2QkFEQSxFQUVBLGdDQUZBLEVBR0Esc0NBQU0sb0JBQUMsTUFBRCxPQUFOLENBSEEsQ0FEQSxFQU1BLCtCQU5BLEVBT0EsK0JBUEEsRUFRQSxpQ0FBSyxvQkFBQyxRQUFELE9BQUwsQ0FSQSxFQVNBLCtCQVRBLEVBVUE7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLE9BQ0E7QUFBSyxNQUFBLEVBQUUsRUFBQztBQUFSLCtCQURBLEVBRUEsZ0NBRkEsRUFHQSxvQkFBQyxVQUFELE9BSEEsQ0FWQSxFQWVBLCtCQWZBLEVBZ0JBLG9CQUFDLE9BQUQ7QUFBUyxNQUFBLElBQUksRUFBRSxLQUFLZixLQUFMLENBQVdFO0FBQTFCLE1BaEJBLENBREY7QUFvQkQ7O0FBM0MrQjs7QUE4Q2xDLGVBQWVMLEdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0ICcuL3N0eWxpbmcuY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24uanN4J1xuaW1wb3J0IFJhbmtpbmdzIGZyb20gJy4vUmFua2luZ3MuanN4J1xuaW1wb3J0IFNlZVJldmlld3MgZnJvbSAnLi9zZWVSZXZpZXdzLmpzeCdcbmltcG9ydCBSZXZpZXdzIGZyb20gJy4vcmV2aWV3cy5qc3gnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpZDogMCxcbiAgICAgIHJldmlld3M6IFtdXG4gICAgfVxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQgPSB0aGlzLmNvbXBvbmVudERpZE1vdW50LmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgYXhpb3MuZ2V0KCcvdGVzdCcpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHNlbGYuc2V0U3RhdGUoeyByZXZpZXdzOiByZXNwb25zZS5kYXRhfSlcbiAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGlkPVwidGl0bGVcIiA+UmF0aW5ncyBhbmQgUmV2aWV3czwvZGl2PlxuICAgICAgPGRpdj48L2Rpdj5cbiAgICAgIDxkaXY+IDxCdXR0b24gLz48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGhyPjwvaHI+XG4gICAgICA8YnI+PC9icj5cbiAgICAgIDxkaXY+PFJhbmtpbmdzIC8+PC9kaXY+XG4gICAgICA8aHI+PC9ocj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGlkPVwic3VidGl0bGVcIiA+TW9zdCBSZWxldmFudCBSZXZpZXdzPC9kaXY+XG4gICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPFNlZVJldmlld3MgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJyPjwvYnI+XG4gICAgICA8UmV2aWV3cyBsaXN0PXt0aGlzLnN0YXRlLnJldmlld3N9Lz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19
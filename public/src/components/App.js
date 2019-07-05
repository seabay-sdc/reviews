import React from 'react';
import './styling.css';
import Header from './Header.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0 //bind functions here

    };
  }

  render() {
    return React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      id: "title",
      className: "item"
    }, "Ratings and Reviews"), React.createElement("div", {
      className: "item"
    }, "2"), React.createElement("div", {
      className: "item"
    }, "3"), React.createElement("div", {
      className: "item"
    }, "4"), React.createElement("div", {
      className: "item"
    }, "5"), React.createElement("div", {
      className: "item"
    }, "6"), React.createElement("div", {
      className: "item"
    }, "7"), React.createElement("div", {
      className: "item"
    }, "8"), React.createElement("div", {
      className: "item"
    }, "9"));
  }

}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImlkIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBTyxlQUFQO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixjQUFuQjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCRixLQUFLLENBQUNHLFNBQXhCLENBQWtDO0FBQ2hDQyxFQUFBQSxXQUFXLEdBQUk7QUFDYjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxFQUFFLEVBQUUsQ0FETyxDQUdiOztBQUhhLEtBQWI7QUFJRDs7QUFHREMsRUFBQUEsTUFBTSxHQUFJO0FBQ1IsV0FDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsT0FDQTtBQUFLLE1BQUEsRUFBRSxFQUFDLE9BQVI7QUFBZ0IsTUFBQSxTQUFTLEVBQUM7QUFBMUIsNkJBREEsRUFFQTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsV0FGQSxFQUdBO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixXQUhBLEVBSUE7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLFdBSkEsRUFLQTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsV0FMQSxFQU1BO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixXQU5BLEVBT0E7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLFdBUEEsRUFRQTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsV0FSQSxFQVNBO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixXQVRBLENBREY7QUFjRDs7QUF6QitCOztBQTRCbEMsZUFBZUwsR0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vc3R5bGluZy5jc3MnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlci5qc3gnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpZDogMFxuICAgIH1cbiAgICAvL2JpbmQgZnVuY3Rpb25zIGhlcmVcbiAgfVxuXG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgaWQ9XCJ0aXRsZVwiIGNsYXNzTmFtZT1cIml0ZW1cIj5SYXRpbmdzIGFuZCBSZXZpZXdzPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj4yPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj4zPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj40PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj41PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj42PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj43PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj44PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj45PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgIFxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19
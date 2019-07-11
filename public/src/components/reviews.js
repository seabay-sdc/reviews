import React from 'react';
import './styling.css';

const Reviews = props => {
  return React.createElement("div", {
    key: "ab",
    className: "reviewContainer"
  }, props.list.map(review => {
    return React.createElement(React.Fragment, null, React.createElement("div", {
      key: "a" + review.id,
      className: "user"
    }, React.createElement("br", null), React.createElement("font", null, " by: "), React.createElement("a", {
      href: ""
    }, review.name), React.createElement("br", null), React.createElement("font", {
      color: "grey"
    }, review.date, " ")), React.createElement("div", {
      key: "b" + review.id,
      className: "review"
    }, React.createElement("div", {
      className: "title"
    }, " ", review.title, " "), React.createElement("div", null, review.review, " ")));
  }));
};

export default Reviews;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9yZXZpZXdzLmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlJldmlld3MiLCJwcm9wcyIsImxpc3QiLCJtYXAiLCJyZXZpZXciLCJpZCIsIm5hbWUiLCJkYXRlIiwidGl0bGUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPLGVBQVA7O0FBR0EsTUFBTUMsT0FBTyxHQUFJQyxLQUFELElBQVc7QUFDdkIsU0FDQTtBQUFLLElBQUEsR0FBRyxFQUFDLElBQVQ7QUFBYyxJQUFBLFNBQVMsRUFBQztBQUF4QixLQUNLQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsR0FBWCxDQUFlQyxNQUFNLElBQUk7QUFDdEIsV0FDQSwwQ0FDQTtBQUFLLE1BQUEsR0FBRyxFQUFFLE1BQU1BLE1BQU0sQ0FBQ0MsRUFBdkI7QUFBMkIsTUFBQSxTQUFTLEVBQUM7QUFBckMsT0FDSSwrQkFESixFQUVJLDBDQUZKLEVBR0k7QUFBRyxNQUFBLElBQUksRUFBQztBQUFSLE9BQVlELE1BQU0sQ0FBQ0UsSUFBbkIsQ0FISixFQUlJLCtCQUpKLEVBS0k7QUFBTSxNQUFBLEtBQUssRUFBQztBQUFaLE9BQW9CRixNQUFNLENBQUNHLElBQTNCLE1BTEosQ0FEQSxFQVFBO0FBQUssTUFBQSxHQUFHLEVBQUUsTUFBTUgsTUFBTSxDQUFDQyxFQUF2QjtBQUEyQixNQUFBLFNBQVMsRUFBQztBQUFyQyxPQUNJO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixZQUF5QkQsTUFBTSxDQUFDSSxLQUFoQyxNQURKLEVBRUksaUNBQU1KLE1BQU0sQ0FBQ0EsTUFBYixNQUZKLENBUkEsQ0FEQTtBQWVILEdBaEJBLENBREwsQ0FEQTtBQXFCSCxDQXRCRDs7QUF5QkUsZUFBZUosT0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vc3R5bGluZy5jc3MnO1xuXG5cbmNvbnN0IFJldmlld3MgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgIDxkaXYga2V5PVwiYWJcIiBjbGFzc05hbWU9XCJyZXZpZXdDb250YWluZXJcIj5cbiAgICAgICAge3Byb3BzLmxpc3QubWFwKHJldmlldyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYga2V5PXtcImFcIiArIHJldmlldy5pZH0gY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgIDxmb250ID4gYnk6IDwvZm9udD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+e3Jldmlldy5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICA8Zm9udCBjb2xvcj1cImdyZXlcIj57cmV2aWV3LmRhdGV9IDwvZm9udD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBrZXk9e1wiYlwiICsgcmV2aWV3LmlkfSBjbGFzc05hbWU9XCJyZXZpZXdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+IHtyZXZpZXcudGl0bGV9IDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+e3Jldmlldy5yZXZpZXd9IDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbiAgZXhwb3J0IGRlZmF1bHQgUmV2aWV3cyAiXX0=
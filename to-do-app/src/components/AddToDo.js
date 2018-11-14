import React,{Component} from 'react';
import PropTypes from 'prop-types';
class AddToDo extends Component {

  toDoInput = React.createRef();

  static propTypes = {
    addToDo: PropTypes.func
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {addToDo} = this.props;
    addToDo(this.toDoInput.current.value);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mt-1 input-group-lg">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-lg">Add To Do</span>
          </div>
          <input type="text" ref={this.toDoInput} className="form-control" />
        </div>
      </form>
    )
  }
}
export default AddToDo;

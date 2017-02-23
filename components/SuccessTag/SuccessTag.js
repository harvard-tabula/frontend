import React, { PropTypes } from 'react';

class SuccessTag extends React.Component {
  constructor () {
    super();
    this.state = {
      isSuccess: true,
      buttonClassName:"tag is-medium"
    };
  }

  tagClick () {
    this.setState(prevState => ({
      isSuccess: !prevState.isSuccess
    }));
    const ifSuccess = this.state.isSuccess;
    var className = (ifSuccess) ? "tag is-medium is-success" : "tag is-medium";
    this.setState({buttonClassName:className});
  }

  render() {
    return (
      <span className={this.state.buttonClassName} onClick={this.tagClick.bind(this)}>{this.props.item}</span>
    );
  }
}

// SuccessTag.propTypes = {
//     item: PropTypes.string.isRequired
// }

export default SuccessTag;
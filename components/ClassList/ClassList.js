import React, { PropTypes } from 'react';

class ClassList extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="heading">
            <h2 className="subtitle">Classes Taken</h2>
          </div>
          <table className="table">
            <thread>
              <tr>
                <th>Class name</th>
                <th>Grade</th>
                <th>Workload</th>
                <th>Semester</th>
                <th>Assoicated Emojis</th>
              </tr>
            </thread>
            <tbody>
              <div id="class-pane">
                {this.props.children}
              </div>
            </tbody>
          </table>
          <a className="button" onClick={this.props.addClass}>Add Class</a>
        </div>
      </section>
    );
  }
}

// ClassList.propTypes = {
//     addClass: PropTypes.func.isRequired(),
//     classes: PropTypes.arrayOf(React.PropTypes.element).isRequired()
// }


export default ClassList;

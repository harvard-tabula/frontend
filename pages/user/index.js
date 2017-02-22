import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';

class UserPage extends React.Component {
  constructor () {
    super();
    this.state = {
      numChildren: 4
    };
  }

  componentDidMount() {
    document.title = 'User Profile';
  }

  onAddClass () {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  }

  render() {
    var interests = ["Coding", "Algorithms", "Data Structures", "Machine Learning", "Artifical Intelligence", "Computer Vision", "Natural Language Processing", "Robotics", "Computer Security", "Computer Architecture", "Programming Languages", "Computational Biology"];
    var interestItems = interests.map((interest) =>
      <SuccessTag item={interest} />
    );

    var experiences = ["Code a website", "Wrote Mathematical Proof", "Code a for loop", "Coded an algorithm"];
    var experienceItems = experiences.map((experience) =>
      <SuccessTag item={experience} />
    );

    var languages = ["Python", "C", "C++", "R", "Haskell", "JAVA", "Javascript", "CSS"];
    var languageItems = languages.map((language) =>
      <SuccessTag item={language} />
    );

    const children = []
    for (var i = 0; i < this.state.numChildren; i+=1) {
      children.push(<ClassComponent />);
    };

    console.log(children);

    return (
      <Layout className='section'>
        <div className='container'>
          <div className='has-text-centered'>
            <h1 className='title'>User Profile</h1>
          </div>
        </div>

        <section className="section">
          <div className="container">
            <div className="heading">
              <h2 className="subtitle">User Information</h2>
            </div>
            <div className="columns">
              <div className="column is-one-third">
                  <figure className="image is-256by256">
                    <img src="http://bulma.io/images/placeholders/256x256.png"></img>
                  </figure>
              </div>
              <div className="column">
                <label className="label">Name</label>
                  <p className="control">
                    <input className="input" type="text" placeholder="Rob Bowden"></input>
                  </p>
                <label className="label">Email</label>
                  <p className="control">
                    <input className="input" type="email" placeholder="robbowden@college.harvard.edu"></input>
                  </p>
              </div>
            </div>
          </div>
        </section>
        <ClassList addChild={this.onAddClass.bind(this)}>
          {children}
        </ClassList>
        <section>
          <div className="container">
            <div className="header">
              <h2 className="subtitle">Interests</h2>
            </div>
            {interestItems}
          </div>
        </section>
        <section>
          <div className="container">
            <div className="header">
              <h2 className="subtitle">Previous Experience</h2>
            </div>
            {experienceItems}
          </div>
        </section>
        <section>
          <div className="container">
            <div className="header">
              <h2 className="subtitle">Languages</h2>
            </div>
            {languageItems}
          </div>
        </section>
      </Layout>
    );
  }
}

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

class ClassList extends React.Component {
  render () {
    return (
      // <section className="section">
      //   <div className="container">
      //     <div className="heading">
      //       <h2 className="subtitle">Classes Taken</h2>
      //     </div>
      //     <div id="class-pane">
      //       {this.props.children}
      //     </div>
      //     <a className="button" onClick={this.props.addChild}>Add Class</a>
      //   </div>
      // </section>


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
              </tr>
            </thread>
            <tbody>
              <div id="class-pane">
                {this.props.children}
              </div>
            </tbody>
          </table>
          <a className="button" onClick={this.props.addChild}>Add Class</a>
        </div>
      </section>
    );
  }
}

class ClassComponent extends React.Component {
  render () {
    return (
      // <div className="card">
      //   <div className="columns">
      //     <div className="column is-3">
      //       <label className="label">Class Name</label>
      //         <p className="control has-icon has-icon-right">
      //           <input className="input is-success" type="text" placeholder="Text input" value="CS50"></input>
      //           <span className="icon is-small">
      //             <i className="fa fa-check"></i>
      //           </span>
      //         </p>
      //     </div>
      //     <div className="column is-1">
      //       <label className="label">Grade</label>
      //         <p className="control">
      //           <span className="select">
      //             <select>
      //               <option>A</option>
      //               <option>A-</option>
      //               <option>B+</option>
      //               <option>B</option>
      //               <option>B-</option>
      //               <option>C+</option>
      //               <option>C</option>
      //               <option>C-</option>
      //             </select>
      //           </span>
      //         </p>
      //     </div>
      //     <div className="column is-2">
      //       <label className="label">Workload</label>
      //         <p className="control">
      //           <span className="select">
      //             <select>
      //               <option>1 hour</option>
      //               <option>2 hours</option>
      //               <option>3 hours</option>
      //               <option>4 hours</option>
      //               <option>5 hours</option>
      //               <option>6 hours</option>
      //               <option>7 hours</option>
      //               <option>8 hours</option>
      //               <option>9 hours</option>
      //               <option>10 hours</option>
      //               <option>11 hours</option>
      //               <option>12 hours</option>
      //               <option>13 hours</option>
      //               <option>14 hours</option>
      //               <option>15 hours</option>
      //               <option>15+ hours</option>
      //             </select>
      //           </span>
      //         </p>
      //     </div>
      //   </div>
      // </div>

      <tr>
        <td>
          <input className="input" type="text" placeholder="Class ID" value=""></input>
        </td>
        <td>
          <p className="control">
            <span className="select">
              <select>
                <option>A</option>
                <option>A-</option>
                <option>B+</option>
                <option>B</option>
                <option>B-</option>
                <option>C+</option>
                <option>C</option>
                <option>C-</option>
              </select>
            </span>
          </p>
        </td>
        <td>
          <p className="control">
            <span className="select">
              <select>
                <option>1 hour</option>
                <option>2 hours</option>
                <option>3 hours</option>
                <option>4 hours</option>
                <option>5 hours</option>
                <option>6 hours</option>
                <option>7 hours</option>
                <option>8 hours</option>
                <option>9 hours</option>
                <option>10 hours</option>
                <option>11 hours</option>
                <option>12 hours</option>
                <option>13 hours</option>
                <option>14 hours</option>
                <option>15 hours</option>
                <option>15+ hours</option>
              </select>
            </span>
          </p>
        </td>
      </tr>
    );
  }
}

export default UserPage;

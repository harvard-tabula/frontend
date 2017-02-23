import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import SuccessTag from '../../components/SuccessTag';
import ClassComponent from '../../components/ClassComponent';
import ClassList from '../../components/ClassList';
import s from './styles.css';

class UserPage extends React.Component {
  constructor () {
    super();
    this.state = {
      numClasses: 4
    };
  }

  componentDidMount() {
    document.title = 'User Profile';
  }

  onAddClass () {
    this.setState({
      numClasses: this.state.numClasses + 1
    });
  }

  render() {
    var academicInterests = ["Coding", "Algorithms", "Data Structures", "Machine Learning & Artifical Intelligence", "Computer Graphics", "Robotics", "Computer Security", "Computer Architecture", "Programming Languages", "Computational Biology"];
    var academicInterestItems = academicInterests.map((academcicInterest) =>
      <SuccessTag item={academcicInterest} />
    );

    var professionalInterests = ["Software Engineer", "Project/Product Manager", "Design", "Backend", "Frontend", "Security", "Mobile", "Hardware", "Databases", "Networks", "Finance"];
    var professionalInterestItems = professionalInterests.map((professionalInterest) =>
      <SuccessTag item={professionalInterest} />
    );

    var milestones = ["Code a website", "Wrote Mathematical Proof", "Code a for loop", "Coded an algorithm"];
    var milestoneItems = milestones.map((milestone) =>
      <SuccessTag item={milestone} />
    );

    var languages = ["Python", "C", "C++", "R", "Haskell", "JAVA", "Javascript", "CSS"];
    var languageItems = languages.map((language) =>
      <SuccessTag item={language} />
    );

    const classes = []
    for (var i = 0; i < this.state.numClasses; i+=1) {
      classes.push(<ClassComponent />);
    };

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
                    <input className="input" type="text" placeholder="ie. Rob Bowden"></input>
                  </p>
                <label className="label">Email</label>
                  <p className="control">
                    <input className="input" type="email" placeholder="ie. robbowden@college.harvard.edu"></input>
                  </p>
                <label className="label">Concentration</label>
                  <p className="control">
                    <input className="input" type="email" placeholder="ie. Computer Science"></input>
                  </p>
                <label className="label">Years Coding</label>
                  <p className="control">
                    <input className="input" type="email" placeholder="ie. 2"></input>
                  </p>
                <label className="label">Graduation Year</label>
                  <p className="control">
                    <input className="input" type="email" placeholder="ie. 2018"></input>
                  </p>
              </div>
            </div>
          </div>
        </section>
        <ClassList addClass={this.onAddClass.bind(this)}>
          {classes}
        </ClassList>
        <section>
          <div className="container">
            <div className="header">
              <h2 className="subtitle">Academic Interests</h2>
            </div>
            {academicInterestItems}
          </div>
        </section>
        <section>
          <div className="container">
            <div className="header">
              <h2 className="subtitle">Professional Interests</h2>
            </div>
            {professionalInterestItems}
          </div>
        </section>
        <section>
          <div className="container">
            <div className="header">
              <h2 className="subtitle">Milestones</h2>
            </div>
            {milestoneItems}
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

export default UserPage;

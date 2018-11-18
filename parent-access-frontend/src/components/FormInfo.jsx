import React, { Component } from 'react';

export default class FormInfo extends Component {
  constructor(props){
    super(props)
    this.state = { firstName: "", lastName: "", nickname: "", preferredPronoun: "", afterSchoolAndWeekendActivity: "", faveMovieMusicFood: "", ifICould: "", needToKnow: "", lookingForwardTo: "", bestCampEverIf: "", shirtSize: "", cqAmbassador: true, camperStatus: "", familyDoctor: "", oncologistSpecialist: "", hospital: "", stayingPositive: "", tryingNewThings: "", interactingWithPeers: "", makingCloseFriendships: "", developingHobbiesInterest: "", overcomingObstacles: "", selfCare: "", oneToOneSupport: false, IEP: false };
  }

  handleChange = prop => event => {
    this.setState({
      [prop]: event.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.state)
  }

  render(){
    const { camperStatus, stayingPositive, tryingNewThings, interactingWithPeers, makingCloseFriendships, developingHobbiesInterest, overcomingObstacles, selfCare, oneToOneSupport, IEP } = this.state;
    return <div className="form-info">
        <form onSubmit={this.handleSubmit}>
          <div className="all-about-me">
            <h2>All About Me!</h2>
            <p>
              This information will help us match your camper to a companion
              or camper group.
            </p>
            <p>Tell us a bit about yourself!</p>

            <div className="form-info--container">
              <fieldset>
                <legend>My first and last names are:</legend>
                <input type="text" placeholder="First Name" name="first_name" onChange={this.handleChange("firstName")} required />
                <input type="text" placeholder="Last Name" name="last_name" onChange={this.handleChange("lastName")} required />
              </fieldset>
            </div>

            <div className="form-info--container">
              <label htmlFor="nickname">...but my friends call me</label>
              <input type="text" placeholder="Nickname" name="nickname" onChange={this.handleChange("preferredName")} />
            </div>

            <div className="form-info--container">
              <label htmlFor="preferred-pronoun">
                I actually prefer people to use __(pronoun)__ when they are
                referring to me.
              </label>
              <input type="text" name="preferred-pronoun" placeholder="e.g. He/Him, She/Her, They/Them" onChange={this.handleChange("preferredPronoun")} />
            </div>

            <div className="form-info--container">
              <label htmlFor="birthday">I celebrate my birthdays on</label>
              <input name="birthday" type="date" onChange={this.handleChange("birthday")} required />
            </div>

            <div className="form-info--container">
              <label htmlFor="after_school_and_weekend_activity">
                After school and on the weekends I like to
              </label>
              <textarea rows="5" cols="33" placeholder="e.g. reading, drawing, skateboarding" name="after_school_and_weekend_activity" onChange={this.handleChange("afterSchoolAndWeekendActivity")} />
            </div>

            <div className="form-info--container">
              <label htmlFor="fave_movie_music_food">
                My favourite movie of all time, the kind of music I like
                listening to, and the most delicious food EVER are:
              </label>
              <textarea rows="5" cols="33" name="fave_movie_music_food" onChange={this.handleChange("faveMovieMusicFood")} />
            </div>

            <div className="form-info--container">
              <label htmlFor="if_i_could">
                If I could do anything in the world I would like to:
              </label>
              <textarea rows="5" cols="33" name="if_i_could" onChange={this.handleChange("ifICould")} />
            </div>

            <div className="form-info--container">
              <label htmlFor="need_to_know">
                The most important thing you need to know about me is:
              </label>
              <textarea rows="5" cols="33" name="need_to_know" onChange={this.handleChange("needToKnow")} />
            </div>

            <div className="form-info--container">
              <label htmlFor="looking_forward_to">
                What I'm looking forward to the most at Camp is:
              </label>
              <textarea rows="5" cols="33" name="looking_forward_to" onChange={this.handleChange("lookingForwardTo")} />
            </div>

            <div className="form-info--container">
              <label htmlFor="best_camp_ever_if">
                This would be the best camp ever if we could:
              </label>
              <textarea rows="5" cols="33" name="best_camp_ever_if" onChange={this.handleChange("bestCampEverIf")} />
            </div>

            <div className="form-info--container">
              <label htmlFor="shirt_size">
                You'll be getting a cool T-shirt at the camp! What size would you like?
                <select onChange={this.handleChange("shirtSize")}>
                  <option value="extra-small">Extra Small</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="extra-large">Extra Large</option>
                </select>
              </label>
            </div>

            <div className="form-info--container">
              <label>
                Would you like to know more about becoming a CQ Ambassador?
                <select onChange={this.handleChange("cqAmbassador")}>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </label>
            </div>
          </div>

          <div className="more-info">
            <h2>More about you!</h2>

            <label>
              Camper's Status
              <select onChange={this.handleChange("camperStatus")}>
                <option value="returning_sibling">
                  Returning Sibling Camper
                </option>
                <option value="returning_patient">
                  Returning Patient Camper
                </option>
                <option value="new_sibling">New Sibling Camper</option>
                <option value="new_camper">New Patient Camper</option>
              </select>
            </label>

            <div className="form-info--container">
              <label htmlFor="family_doctor">Family Doctor:</label>
            <input type="text" name="family_doctor" onChange={this.handleChange("familyDoctor")} required/>
            </div>

            <div className="form-info--container">
              <label htmlFor="oncologist_specialist">
                Oncologist/Specialist:
              </label>
            <input type="text" name="oncologist_specialist" onChange={this.handleChange("oncologistSpecialist")} required />
            </div>

            <div className="form-info--container">
              <label htmlFor="hospital">Hospital:</label>
            <input type="text" name="hospital" onChange={this.handleChange("hospital")} required />
            </div>

            <br />
            <br />

            <p>
              How would you rate your teenager's skills in the following
              areas?
            </p>

            <label>
              Staying positive
              <select onChange={this.handleChange("stayingPositive")}>
                <option value="every">Every time</option>
                <option value="almost">Almost every time</option>
                <option value="occasionally">Occasionally</option>
              </select>
            </label>

            <br />

            <label>
              Trying new things
              <select onChange={this.handleChange("tryingNewThings")}>
                <option value="every">Every time</option>
                <option value="almost">Almost every time</option>
                <option value="occasionally">Occasionally</option>
              </select>
            </label>

            <br />

            <label>
              Interacting with peers in a group
              <select value={interactingWithPeers}>
                <option value="every">Every time</option>
                <option value="almost">Almost every time</option>
                <option value="occasionally">Occasionally</option>
              </select>
            </label>

            <br />

            <label>
              Making close friendships
              <select value={makingCloseFriendships}>
                <option value="every">Every time</option>
                <option value="almost">Almost every time</option>
                <option value="occasionally">Occasionally</option>
              </select>
            </label>

            <br />

            <label>
              Developing hobbies and interest
              <select value={developingHobbiesInterest}>
                <option value="every">Every time</option>
                <option value="almost">Almost every time</option>
                <option value="occasionally">Occasionally</option>
              </select>
            </label>

            <br />

            <label>
              Overcoming obstacles
              <select value={overcomingObstacles}>
                <option value="every">Every time</option>
                <option value="almost">Almost every time</option>
                <option value="occasionally">Occasionally</option>
              </select>
            </label>

            <br />

            <label>
              Taking care of themselvers
              <select value={selfCare}>
                <option value="every">Every time</option>
                <option value="almost">Almost every time</option>
                <option value="occasionally">Occasionally</option>
              </select>
            </label>

            <br />

            <label>
              Does your child need one-to-one support to take care of their needs?
              <select value={oneToOneSupport}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>

            <br />

            <label>
              Does your child have an IEP (Individual Education Plan)?
              <select value={IEP}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>

            <div>
              <label htmlFor="travelArrangements">
                How would you reach the camp grounds?
              </label>
              <input type="textarea" required />
            </div>

            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>;
  }
}
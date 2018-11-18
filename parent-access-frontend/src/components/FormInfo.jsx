import React, { Component } from 'react';

export default class FormInfo extends Component {
  constructor(props){
    super(props)
    this.state = { firstName: "", lastName: "", nickname: "", preferredPronoun: "", afterSchoolAndWeekendActivity: "", faveMovieMusicFood: "", ifICould: "", needToKnow: "", lookingForwardTo: "", bestCampEverIf: "", shirtSize: "small", cqAmbassador: "yes", camperStatus: "new_patient", stayingPositive: "almost", tryingNewThings: "almost", interactingWithPeers: "almost", makingCloseFriendships: "almost", developingHobbiesInterest: "almost", overcomingObstacles: "almost", selfCare: "almost", oneToOneSupport: "no", IEP: "no" };
  }

  render(){
    const { camperStatus, stayingPositive, tryingNewThings, interactingWithPeers, makingCloseFriendships, developingHobbiesInterest, overcomingObstacles, selfCare, oneToOneSupport, IEP } = this.state;
    return <div className="form-info">
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
              <input type="text" placeholder="First Name" name="first_name" required />
              <input type="text" placeholder="Last Name" name="last_name" required />
            </fieldset>
          </div>

          <div className="form-info--container">
            <label htmlFor="nickname">...but my friends call me</label>
            <input type="text" placeholder="Nickname" name="nickname" />
          </div>

          <div className="form-info--container">
            <label htmlFor="preferred-pronoun">
              I actually prefer people to use __(pronoun)__ when they are
              referring to me.
            </label>
            <input type="text" name="preferred-pronoun" placeholder="e.g. He/Him, She/Her, They/Them" />
          </div>

          <div className="form-info--container">
            <label htmlFor="birthday">I celebrate my birthdays on</label>
            <input name="birthday" type="date" value="2018-11-17" required />
          </div>

          <div className="form-info--container">
            <label htmlFor="after_school_and_weekend_activity">
              After school and on the weekends I like to
            </label>
            <textarea rows="5" cols="33" placeholder="e.g. reading, drawing, skateboarding" name="after_school_and_weekend_activity" />
          </div>

          <div className="form-info--container">
            <label htmlFor="fave_movie_music_food">
              My favourite movie of all time, the kind of music I like
              listening to, and the most delicious food EVER are:
            </label>
            <textarea rows="5" cols="33" name="fave_movie_music_food" />
          </div>

          <div className="form-info--container">
            <label htmlFor="if_i_could">
              If I could do anything in the world I would like to:
            </label>
            <textarea rows="5" cols="33" name="if_i_could" />
          </div>

          <div className="form-info--container">
            <label htmlFor="need_to_know">
              The most important thing you need to know about me is:
            </label>
            <textarea rows="5" cols="33" name="need_to_know" />
          </div>

          <div className="form-info--container">
            <label htmlFor="looking_forward_to">
              What I'm looking forward to the most at Camp is:
            </label>
            <textarea rows="5" cols="33" name="looking_forward_to" />
          </div>

          <div className="form-info--container">
            <label htmlFor="best_camp_ever_if">
              This would be the best camp ever if we could:
            </label>
            <textarea rows="5" cols="33" name="best_camp_ever_if" />
          </div>

          <div className="form-info--container">
            <fieldset>
              <legend>
                You'll be getting a cool T-Shirt at camp! What' size would
                you like?
              </legend>
              <input type="radio" id="extra-small" name="shirt_size" />
              <label htmlFor="extra-small">Extra Small</label>
              <br />

              <input type="radio" id="small" name="shirt_size" />
              <label htmlFor="small">Small</label>
              <br />

              <input type="radio" id="medium" name="shirt_size" />
              <label htmlFor="medium">Medium</label>
              <br />

              <input type="radio" id="large" name="shirt_size" />
              <label htmlFor="large">Large</label>
              <br />

              <input type="radio" id="extra-large" name="shirt_size" />
              <label htmlFor="extra-large">Extra Large</label>
              <br />
            </fieldset>
          </div>

          <div className="form-info--container">
            <fieldset>
              <legend>
                Would you like to know more about becoming a CQ ambassador?
              </legend>

              <input type="radio" id="yes" name="cq_ambassador" />
              <label htmlFor="yes">Yes</label>
              <br />

              <input type="radio" id="no" name="cq_ambassador" />
              <label htmlFor="no">No</label>
              <br />
            </fieldset>
          </div>
        </div>

        <div className="more-info">
        <h2>More about you!</h2>

        <label>
          Camper's Status
          <select value={camperStatus}>
            <option value="returning_sibling">
              Returning Sibling Camper
            </option>
            <option value="returning_patient">
              Returning Patient Camper
            </option>
            <option value="new_sibling">
              New Sibling Camper
            </option>
            <option value="new_camper">
              New Patient Camper
            </option>
          </select>
        </label>

        <div className="form-info--container">
          <label htmlFor="family_doctor">Family Doctor:</label>
          <input type="text" name="family_doctor" required/>
        </div>

        <div className="form-info--container">
          <label htmlFor="oncologist_specialist">Oncologist/Specialist:</label>
          <input type="text" name="oncologist_specialist" required />
        </div>

        <div className="form-info--container">
          <label htmlFor="hospital">Hospital:</label>
          <input type="text" name="hospital" required />
        </div>

        <br />
        <br />

        <p>
          How would you rate your teenager's skills in the following
          areas?
        </p>

        <label>
          Staying positive
          <select value={stayingPositive}>
            <option value="every">Every time</option>
            <option value="almost">Almost every time</option>
            <option value="occasionally">Occasionally</option>
          </select>
        </label>

        <br />

        <label>
          Trying new things
          <select value={tryingNewThings}>
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
      </div>

    </div>;
  }
}
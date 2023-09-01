import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
// import { withRouter } from "react-router-dom";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

  componentDidMount() {
    console.log('ai: ', this.props)
    let userId = this.props.match?.params.userId;
    if (!userId) {
      userId = 2; 
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return (
    <Profile {...this.props} profile={this.props.profile}/>
    );
  }
}

let AuthRedirectComponent =  withAuthRedirect(ProfileContainer); 

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
  });
  

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        match={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);
import React from "react";
import UsersView from '../../../platform/ux/Users/UsersView';

class Controller extends React.Component {

  constructor(props) {
    super();
    this.props = props;
    this.state = {
      loading: true,
      users: [],
    };
    this.page = 1;
  }

  componentDidMount() {
    this.makeHttpCall();
    document.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  };

  getUsersApi = (page) => {
    return `https://randomuser.me/api/?page=${page}&results=20&seed=test`;
  }

  setLoading = loading => this.setState({loading});

  addUsers = users => {
    const usersCopy = [...this.state.users];
    this.setState({users: [...users, ...usersCopy]})
  }
  makeHttpCall = async () => {
    const response = await fetch(this.getUsersApi(this.page));
    const body = await response.json();
    this.setLoading(false);
    this.addUsers(body.results);
    return response;
  }

  handleScroll = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = e.target.scrollingElement;
    if (clientHeight + scrollTop === scrollHeight) {
      this.page += 1;
      this.makeHttpCall()
    }
  };

  render() {
    return (
      <div>
        <UsersView {...this.props} {...this.state}/>
      </div>
    );
  }
}

export default Controller;


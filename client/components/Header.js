import React from 'react';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import query from '../queries/CurrentUser';
import mutation from '../mutations/Logout';

class Header extends React.Component {
    onLogoutClick() {
        this.props.mutate({
            refetchQueries: [{ query }]
        });
    }
    renderButtons() {
        const {loading, user} = this.props.data;
        
        // if (this.props.data.loading) {
            if (loading) {
            return <div />;
        }

        if(user) {
            return (
                <li><a onClick={this.onLogoutClick.bind(this)}>Logout</a></li>
            )
        } else {
            return <div>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </div>
        }
    }
    render() {
        // console.log(this.props.data);
        return (
            <nav>
                <div className="nav-wrapper">
                <Link to="/" className="brand-logo left">
                Home
                </Link>
                <ul className="right">
                {this.renderButtons()}
                </ul>
                </div>
            </nav>
        );
    }
}

export default graphql(mutation) (
    graphql(query)(Header)
);
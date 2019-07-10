import React from 'react';
import { Alert } from 'reactstrap';
import axios from 'axios';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        };
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        try {
            const data = await axios.get("http://localhost:8080/users")
            await this.setState(
                {
                    data: data,
                    isLoading: false
                })

        }
        catch (error) {
            console.log(error)
        }
    }

    render() {
        const alert = <Alert color="info">Loading Web Service Data... </Alert>

        return (
            <>
                <h2>WebService Users</h2>
                {this.state.isLoading?alert:this.state.data}
            </>
        )
    }



}
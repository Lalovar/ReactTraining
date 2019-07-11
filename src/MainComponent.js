import React from 'react';
import { Alert, Table } from 'reactstrap';
import axios from 'axios';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: "",
            pass: "",
            isLoading: true
        };
    }

    componentDidMount() {
        //setInterval(this.fetchData, 2000);
        //setTimeout(this.fetchData, 5000);
}
    componentDidUpdate() {
        //this.fetchData()
    }
    fetchData = async () => {
        this.setState({ isLoading: true })
        try {
            const data = await axios.get("http://192.168.15.13:8080/users")
            await this.setState(
                {
                    data: (data.data),
                    isLoading: false
                })

        }
        catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.name]: value
        })
    }

    agregar = async () => {
        this.setState({ isLoading: true })
        const obj = {
            name: this.state.name,
            pass: this.state.pass,
        }
        const data = await axios.put("http://192.168.15.13:8080/users", obj)
        this.fetchData()
    }



    render() {
        const alert = <Alert color="info">Loading Web Service Data... </Alert>

        return (
            <>


                <h2>WebService Users</h2>
                {this.state.isLoading ? alert : null}
                <p>User Nam</p>
                <input name="name" value={this.state.name} onChange={event => { this.handleChange(event) }} />
                <p>Pass</p>
                <input name="pass" value={this.state.pass} onChange={event => { this.handleChange(event) }} />
                <button onClick={this.agregar}> Agregar </button>
                {
                    this.state.loading ? <p>Loading...</p> : null
                }

                <Table bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>User Name</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((element, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{index}</th>
                                        <td>{element.name}</td>
                                        <td>{element.pass}</td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </Table>

            </>
        )
    }



}